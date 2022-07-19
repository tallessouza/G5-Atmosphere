import {
  LRUCache,
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method
} from '@vtex/api'
import { Clients } from './clients'
import { getPoints } from './handlers/getPoints'
import { setPoints } from './handlers/setPoints'
import { updateLiveUsers } from './event/liveUsersUpdate'

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    email: string
    points: number
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000
      }
    }
  },
  events: {
    liveUsersUpdate: updateLiveUsers
  },
  routes: {
    getPoints: method({
      GET: [getPoints]
    }),
    setPoints: method({
      PATCH: [setPoints]
    })
  }
})
