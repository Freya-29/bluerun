/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Products, ProductsService } from '@bluerun/products';


@Component({
    selector: 'bluerun-products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products :Products[] = [] ;

    constructor(
        private productService : ProductsService
    ){}
    
    ngOnInit(): void {
        this._getProducts();
    }

    private _getProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
        })
    }

}
