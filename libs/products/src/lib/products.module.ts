import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[CategoriesService,ProductsService]
})
export class ProductsModule {}
