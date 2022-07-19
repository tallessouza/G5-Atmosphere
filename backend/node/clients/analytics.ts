import { AppClient, InstanceOptions, IOContext } from '@vtex/api'

export default class Analytics extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.mocked-analytics@0.x', context, options)
  }

  public getLiveUsers(): Promise<LiveUsersProduct[]> {
    return this.http.get('_v/live-products')
  }
  // public getPoints(): Promise<LiveUsersProduct[]> {
  //   return this.http.get('https://atmosphere.vtexcommercestable.com.br/api/dataentities/CL/documents/{{ _.talles }}?_fields=dpoints')
  // }
}

interface LiveUsersProduct {
  slug: string
  liveUsers: number
}
// interface Points {
//   points: number
// }
