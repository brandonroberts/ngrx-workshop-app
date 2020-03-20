import { Injectable } from '@angular/core';
import { ProductService } from '@ngrx-workshop-app/product-data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AppActions } from '@ngrx-workshop-app/state/app/actions';
import { ProductActions } from  '@ngrx-workshop-app/state/products/actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ProductActions.enterProductsPage,
        ProductActions.enterProductDetailsPage,
        AppActions.init
      ),
      exhaustMap(() =>
        this.productsService.getProducts().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(() =>
            of(
              ProductActions.loadProductsFailure({
                error: 'Unable to load products'
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}
}
