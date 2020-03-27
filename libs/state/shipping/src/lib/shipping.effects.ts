import { Injectable } from '@angular/core';
import { ShippingService } from '@ngrx-workshop-app/shipping-data-access';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppActions } from '@ngrx-workshop-app/state/app/actions';
import { ShippingActions } from '@ngrx-workshop-app/state/shipping/actions';

@Injectable()
export class ShippingEffects {
  getShippingOptions$ = createEffect(() =>
    this.actions.pipe(
      ofType(AppActions.init),
      switchMap(() =>
        this.shippingService.getShippingPrices().pipe(
          map(shippingMethods =>
            ShippingActions.shippingApiOptionsLoadedSuccess({ shippingMethods })
          ),
          catchError((error: Error) =>
            of(
              ShippingActions.shippingApiOptionsLoadFailure({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  dispatchAppInit$ = createEffect(() => of(AppActions.init()));

  constructor(
    private actions: Actions,
    private shippingService: ShippingService
  ) {}
}
