import { COURSE_ENTITY } from '../utils/constants'

export async function getPoints(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params }
    }
  } = ctx

  // console.log(ctx.vtex.authToken)
  // console.info('Received params:', params)

  const { email } = params
  try {
    console.log(email)
    ctx.body = await ctx.clients.masterdata
      .searchDocuments<{
        id: string
        dpoints: number
      }>({
        dataEntity: COURSE_ENTITY,
        fields: ['dpoints', 'id', 'email'],
        pagination: {
          page: 1,
          pageSize: 1
        },
        // schema: 'v99',
        where: `email=${email}`
      })
      .then(res => {
        console.log(res)
        return res
      })
  } catch (error) {
    console.log(error)
  }
  // ctx.status = 200
  // ctx.body = await analytics.getLiveUsers()
  // ctx.set('cache-control', 'no-cache')

  await next()
}
