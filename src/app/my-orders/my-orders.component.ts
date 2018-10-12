import { OrderService } from './../order.service';
import { ShoppingCartService } from './../shopping-cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders$;

  constructor(private orderService: OrderService) { }

  async ngOnInit() {
   this.myOrders$ = await this.orderService.getMyOrders();
  }
}
