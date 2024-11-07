import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: NosotrosComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'products', component: ProductosComponent },
  { path: 'marc', component: MarcasComponent },
  { path: 'contact', component: ContactanosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
