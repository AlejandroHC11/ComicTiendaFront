import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartStatusComponent,
    ProductListComponent,
    TiendaComponent,
    MantenimientoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent},
      {path:'mantenimiento',component:MantenimientoComponent},
      {path:'tienda',component:TiendaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
