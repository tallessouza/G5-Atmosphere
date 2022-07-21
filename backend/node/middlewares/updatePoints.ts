import { COURSE_ENTITY } from '../utils/constants'
export async function updatePoints(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const {
    clients: { orders },
  } = ctx
  const { orderId } = ctx.body
  const order = await orders.getOrder(orderId)
  const { userProfileId } = order.clientProfileData
  const totals = order.totals
  const value = Math.floor(Number(totals[0].value) / 100)

  var returned = await ctx.clients.masterdata
    .searchDocuments<{
      dpoints: number
      email: string
      id: string
    }>({
      dataEntity: COURSE_ENTITY,
      fields: ['dpoints', 'email', 'id'],
      pagination: {
        page: 1,
        pageSize: 1,
      },
      where: `userId=${userProfileId}`,
    })
    .then(res => {
      return res
    })

  try {
    var { dpoints, email, id } = returned[0]
    returned = []
    var finalPoint = dpoints + value
    await ctx.clients.masterdata
      .updateEntireDocument({
        dataEntity: COURSE_ENTITY,
        fields: {
          email: email,
          dpoints: finalPoint,
          userId: userProfileId.toString(),
        },
        id: id,
      })
      .then(res => {
        return res
      })
  } catch (error) {}
  await next()
}
