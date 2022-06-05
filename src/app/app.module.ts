import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/header/navegador/navegador.component';
import { ComponentsComponent } from './components/components.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';
import { IconoComponent } from './components/header/icono/icono.component';
import { InstagramComponent } from './components/footer/instagram/instagram.component';
import { FacebookComponent } from './components/footer/facebook/facebook.component';
import { TwitterComponent } from './components/footer/twitter/twitter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollComponent } from './components/body/scroll/scroll.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ComponentsComponent,
    GalleryComponent,
    IconoComponent,
    InstagramComponent,
    FacebookComponent,
    TwitterComponent,
    FooterComponent,
    ScrollComponent,
  
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
