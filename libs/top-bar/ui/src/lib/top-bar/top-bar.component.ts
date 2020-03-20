import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';

import { CartSelectors } from '@ngrx-workshop-app/state/cart/state';
import { ShippingSelectors } from '@ngrx-workshop-app/state/shipping/state';

import { ShippingMethodSelectionDialogComponent } from '@ngrx-workshop-app/cart/ui';

@Component({
  selector: 'ngrx-workshop-app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  total$ = this.store.pipe(select(CartSelectors.getTotal));
  shippingMethod$ = this.store.pipe(
    select(ShippingSelectors.selectSelectedShippingOption)
  );
  NO_SHIPPING_METHOD_SELECTED_TOKEN =
  ShippingSelectors.NO_SHIPPING_METHOD_SELECTED_TOKEN;

  constructor(private dialog: MatDialog, private store: Store<{}>) {}

  openShippingOptions() {
    this.dialog.open(ShippingMethodSelectionDialogComponent, {
      width: '450px'
    });
  }
}
