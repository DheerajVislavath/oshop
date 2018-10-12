import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  allOrder$;
  orders;

  constructor(private orderService: OrderService) { }

  async ngOnInit() {
    this.allOrder$ = await this.orderService.getAllOrders();
    this.allOrder$.subscribe(allOrders => {
      this.orders = allOrders;
      console.log(this.orders);
    }

  )}
  
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
    
 }

}
