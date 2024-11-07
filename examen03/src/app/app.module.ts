import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FootermenuComponent } from './components/footermenu/footermenu.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    FootermenuComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    MarcasComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
