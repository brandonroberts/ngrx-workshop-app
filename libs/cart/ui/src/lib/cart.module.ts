import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CartFeature, CartEffects } from '@ngrx-workshop-app/state/cart';

import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ShippingMethodSelectionDialogComponent } from './shipping-method-selection-dialog/shipping-method-selection-dialog.component';

@NgModule({
  declarations: [CartComponent, ShippingMethodSelectionDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    CartRoutingModule,
    StoreModule.forFeature(CartFeature.cartFeatureKey, CartFeature.reducer),
    EffectsModule.forFeature([CartEffects])
  ],
  entryComponents: [ShippingMethodSelectionDialogComponent]
})
export class CartModule {}
