import { Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SlidebarComponent } from './shared/slidebar/slidebar.component';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';


import {CardModule } from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table'
import { CategoriesService, ProductsService } from '@bluerun/products';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast'
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';


const UX_MODULE = [
    CardModule,ToolbarModule,ButtonModule,TableModule,InputTextModule,ToastModule
]

export const appRoutes: Route[] = [
    {
        path: '', 
        component: ShellComponent,
        children:[
            {
                path: 'dashboard', 
                component: DashboardComponent
            },
            {
                path: 'categories', 
                component: CategoriesListComponent
            },
            {
                path: 'categories/form', 
                component: CategoriesFormComponent
            },
            {
                path: 'products', 
                component: ProductsListComponent
            },
            {
                path: 'products/form', 
                component: ProductsFormComponent
            }
    ]
    }
];

@NgModule({
    declarations: [DashboardComponent, 
                ShellComponent, 
                SlidebarComponent,
                CategoriesListComponent,
                CategoriesFormComponent,
                ProductsFormComponent,
                ProductsListComponent],
    imports: [
            CommonModule,
            BrowserModule,
            HttpClientModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(appRoutes),UX_MODULE],
    providers : [ MessageService,ProductsService],
    bootstrap: []
  })

  export class appRoute {}
