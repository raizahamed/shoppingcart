import {Component, OnInit} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs/internal/Subscription";
import {EcommerceService} from "../services/ShoppingCartService";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;

    constructor(private shoppingCartService: ShoppingCartService) {
        this.orders = this.shoppingCartService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.shoppingCartService.OrdersChanged.subscribe(() => {
            this.orders = this.shoppingCartService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.shoppingCartService.saveOrder(this.orders).subscribe();
    }

    loadTotal() {
        this.sub = this.shoppingCartService.TotalChanged.subscribe(() => {
            this.total = this.shoppingCartService.Total;
        });
    }
}
