import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { ProductActions } from '@ngrx-workshop-app/state/products/actions';
import { ProductsSelectors } from '@ngrx-workshop-app/state/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$ = this.store.pipe(select(ProductsSelectors.getAllProducts));

  constructor(private store: Store<{}>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.store.dispatch(ProductActions.enterProductsPage());
  }

  share() {
    this.snackBar.open('The product has been shared!', undefined, {
      duration: 1000
    });
  }
}
