import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducer} from './products/store/reducers/products.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './products/store/effects/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {CustomSerializer, reducers} from './products/store/reducers/router.reducers';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot({products: reducer, router: reducers.routerState}, {}),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    })
  ],
  providers: [{
    provide: RouterStateSerializer,
    useClass: CustomSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
