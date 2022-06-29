import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Accueil',pathMatch: "full"
  },
  {
    path:'Accueil',component: HomePageComponent
  },
  {
    path:'Products',component: ProductsPageComponent
  },
  {
    path: 'Product/:type/:id', component: ProductPageComponent
  },
  {
    path:'**',component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }