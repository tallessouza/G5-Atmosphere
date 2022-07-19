// node/event/liveUsersUpdate.ts
import { Clients } from './../clients/index'
import { EventContext } from '@vtex/api'
import { COURSE_ENTITY } from '../utils/constants'

export async function updateLiveUsers(ctx: EventContext<Clients>) {
  // const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
  // console.log('MOCKED LIVE USERS ', liveUsersProducts)
  const Points = Math.floor(Math.random() * 100)
  // const [savedProduct] =
  // await Promise.all(
  //   liveUsersProducts.map(async () => {
  // console.log(savedProduct)
  console.log(Points)
  try {
    // console.log('SAVED PRODUCT', savedProduct)

    // await ctx.clients.masterdata
    //   .createOrUpdateEntireDocument({
    //     dataEntity: COURSE_ENTITY,
    //     fields: {
    //       count: liveUsers,
    //       slug
    //     },
    //     id: savedProduct?.id
    //   })
    //   .then(res => {
    //     console.log(res)
    //     return res
    //   })

    await ctx.clients.masterdata
      .createOrUpdateEntireDocument({
        dataEntity: COURSE_ENTITY,
        fields: {
          email: 'talles1.swd@gmail.com',
          dpoints: Points
        },
        id: '33033816-0463-11ed-835d-1204b2dc377f'
      })
      .then(res => {
        console.log(res)
        return res
      })
  } catch (e) {
    // console.log(`failed to update product ${slug}`)
    console.log(e)
  }
  // })
  // )
  try {
    await ctx.clients.masterdata
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
        where: `email=talles1.swd@gmail.com`
      })
      .then(res => {
        console.log(res)
        return res
      })
  } catch (error) {
    console.log(error)
  }
  return true
}
