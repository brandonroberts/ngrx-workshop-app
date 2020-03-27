import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShippingFeature, ShippingEffects } from '@ngrx-workshop-app/state/shipping';

@NgModule({
  imports: [CommonModule, RouterModule,
    StoreModule.forFeature(ShippingFeature.shippingFeatureKey, ShippingFeature.reducer),
    EffectsModule.forFeature([ShippingEffects])
  ],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarUiModule {}
