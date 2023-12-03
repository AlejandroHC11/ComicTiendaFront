import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { StoreComponent } from './components/store/store.component';
import { ComicsComponent } from './components/comics/comics.component';
import { NewComicComponent } from './components/new-comic/new-comic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComicComponent } from './components/update-comic/update-comic.component';
import { DeleteComicComponent } from './components/delete-comic/delete-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartStatusComponent,
    ProductListComponent,
    CarritoComponent,
    StoreComponent,
    ComicsComponent,
    NewComicComponent,
    UpdateComicComponent,
    DeleteComicComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent},
      {path:'comics',component:ComicsComponent},
      {path:'tienda',component:StoreComponent},
      {path:'carrito',component:CarritoComponent},
      {path:'newComic',component:NewComicComponent},
      {path: 'updateComic', component: UpdateComicComponent},
      {path: 'deleteComic', component: DeleteComicComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
