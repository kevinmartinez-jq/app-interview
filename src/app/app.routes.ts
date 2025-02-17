import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'productos', component: ProductListComponent },
    { path: 'clientes', component: ClientListComponent },
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: '**', redirectTo: 'productos' }
];



export class AppRoutingModule { }