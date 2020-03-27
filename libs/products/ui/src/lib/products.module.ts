import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsFeature, ProductsEffects } from '@ngrx-workshop-app/state/products';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSnackBarModule,
    StoreModule.forFeature(ProductsFeature.productsFeatureKey, ProductsFeature.reducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsModule {}
