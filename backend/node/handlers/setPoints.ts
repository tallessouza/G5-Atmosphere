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

  const { profile, value } = params
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
        pageSize: 1
      },
      where: `userId=${profile}`
    })
    .then(res => {
      return res
    })

  try {
    var { dpoints, email, id } = returned[0]
    console.log(`Console ${id} ${profile} ${dpoints} ${email}`)
    returned = []
    var finalPoint = dpoints + Number(value)
    await ctx.clients.masterdata
      .updateEntireDocument({
        dataEntity: COURSE_ENTITY,
        fields: {
          email: email,
          dpoints: finalPoint,
          userId: profile.toString()
        },
        id: id
      })
      .then(res => {
        console.log('DEPOIS')
        console.log(finalPoint)
        return res
      })
  } catch (error) {
    console.log(error)
  }
  // ctx.status = 200
  // ctx.body = await analytics.getLiveUsers()
  ctx.set('cache-control', 'no-cache')

  await next()
}
