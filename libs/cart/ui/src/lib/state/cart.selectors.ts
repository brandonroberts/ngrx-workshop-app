import { createSelector } from '@ngrx/store';
import { ShippingSelectors } from '@ngrx-workshop-app/state/shipping';
import { CartSelectors } from '@ngrx-workshop-app/state/cart';

export const getTotal = createSelector(
  CartSelectors.getCartTotal,
  ShippingSelectors.selectShippingCost,
  (cartTotal, shippingCost) => cartTotal + shippingCost
);
