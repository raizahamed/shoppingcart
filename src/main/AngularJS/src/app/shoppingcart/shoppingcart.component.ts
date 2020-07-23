import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./cart/cart.component";
import {OrdersComponent} from "./orders/orders.component";

@Component({
    selector: 'app-shoppingCart',
    templateUrl: './shoppingCart.component.html',
    styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    private collapsed = true;
    orderFinished = false;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCart')
    shoppingCart: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor() {
    }

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
}
