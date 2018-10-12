import { Order } from './models/order';
import { ShoppingCartService } from './shopping-cart-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private router: Router, private cartService: ShoppingCartService) { }

  storeOrder(order) {
    return this.db.list('/orders').push(order);

  }
  async placeOrder(order, cart) {
    // let cartId = await this.cartService.getOrCreateCartId();
    // let result = await this.create(order, cartId);
    // this.router.navigate(['./order-success', result.key]);
    // this.cartService.clearCart();
   }   

  create(order, cartId) {
    return this.db.list('/orders/' + cartId ).push({
      order: order,

    })    
  }           

  async getMyOrders()  { 
    let cartId = await this.cartService.getOrCreateCartId();
    return this.db.list('/orders/' + cartId);
  }

  async getAllOrders() {
    return this.db.list('/orders');
  } 
}
