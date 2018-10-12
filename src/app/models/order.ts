import { ShoppingCart } from './shopping-cart';
export class Order {
    datePlaced: number;
    items: any[];
    shipping: any = {};

    constructor(public shoppingCart: ShoppingCart, shipping:  any) {
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(item => {
            return {
              product: {
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl,
              },
              quantity: item.quantity,
              totalPrice: item.totalPrice
            }
          }),
          this.shipping = shipping
    }
}