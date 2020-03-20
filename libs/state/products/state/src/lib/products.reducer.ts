import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Product } from '@ngrx-workshop-app/api-interface';

import {ProductActions} from  '@ngrx-workshop-app/state/products/actions';

export interface State extends EntityState<Product> {
  selectedId: string | null;
  loaded: boolean;
  error: string | null;
}

export const productsFeatureKey = 'products';

export const adapter = createEntityAdapter<Product>({
  selectId: (model: Product) => model.productId
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  loaded: false,
  error: null
});

const productsReducer = createReducer(
  initialState,
  on(ProductActions.enterProductsPage, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ProductActions.enterProductDetailsPage, (state, { id }) => ({
    ...state,
    selectedId: id
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    adapter.addAll(products, { ...state, loaded: true, error: null })
  ),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}
