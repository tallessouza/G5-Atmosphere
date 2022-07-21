import { IOClients } from "@vtex/api";
import Orders from './orders'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get orders() {
    return this.getOrSet('orders', Orders)
  }
}
