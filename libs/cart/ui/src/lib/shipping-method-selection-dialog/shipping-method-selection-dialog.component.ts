import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, publishReplay, refCount, startWith, take } from 'rxjs/operators';

import { ShippingActions } from '@ngrx-workshop-app/state/shipping/actions';
import { ShippingSelectors } from '@ngrx-workshop-app/state/shipping';

@Component({
  selector: 'ngrx-workshop-app-shipping-method-selection-dialog',
  templateUrl: './shipping-method-selection-dialog.component.html',
  styleUrls: ['./shipping-method-selection-dialog.component.css']
})
export class ShippingMethodSelectionDialogComponent implements OnInit {
  private _userSelections$ = new Subject<string>();
  private _originallySelectedOption$ = this.store.pipe(
    select(ShippingSelectors.selectSelectedShippingOption),
    take(1),
    publishReplay(1),
    refCount()
  );

  shippingOptions$ = this.store.pipe(
    select(ShippingSelectors.selectAllShippingOptions)
  );

  currentlySelected$ = merge(
    this._originallySelectedOption$,
    this._userSelections$
  ).pipe(
    publishReplay(1),
    refCount()
  );

  selectDisabled$ = combineLatest([
    this.currentlySelected$.pipe(
      startWith(ShippingSelectors.NO_SHIPPING_METHOD_SELECTED_TOKEN)
    ),
    this._originallySelectedOption$
  ]).pipe(
    map(([current, original]) =>
      current === ShippingSelectors.NO_SHIPPING_METHOD_SELECTED_TOKEN
        ? true
        : current === original
    )
  );

  constructor(
    private store: Store<{}>,
    private dialogRef: MatDialogRef<ShippingMethodSelectionDialogComponent>
  ) {}

  ngOnInit() {}

  optionSelected(option: string) {
    this._userSelections$.next(option);
  }

  select(shippingMethod: string) {
    this.store.dispatch(
      ShippingActions.shippingDialogSelectShippingMethod({ shippingMethod })
    );
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
