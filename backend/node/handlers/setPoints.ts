import { COURSE_ENTITY } from '../utils/constants'
// import { getPoints } from './getPoints'

export async function setPoints(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params }
    }
  } = ctx

  // console.log(ctx.vtex.authToken)
  // console.info('Received params:', params)

  const { email, value } = params
  try {
    var { id, dpoints } = { id: '', dpoints: 0 }
    await ctx.clients.masterdata
      .searchDocuments<{
        id: string
        dpoints: number
      }>({
        dataEntity: COURSE_ENTITY,
        fields: ['dpoints', 'id'],
        pagination: {
          page: 1,
          pageSize: 1
        },
        where: `email=${email}`
      })
      .then(res => {
        ;({ id, dpoints } = res[0])
      })
    await ctx.clients.masterdata
      .createOrUpdateEntireDocument({
        dataEntity: COURSE_ENTITY,
        fields: {
          email: email,
          dpoints: dpoints + Number(value)
        },
        id: id
      })
      .then(res => {
        return res
      })
  } catch (error) {
    console.log(error)
  }
  ctx.status = 200
  // ctx.body = await analytics.getLiveUsers()
  // ctx.set('cache-control', 'no-cache')

  await next()
}
