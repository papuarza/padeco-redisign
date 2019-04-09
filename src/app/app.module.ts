import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageService } from './service/translate.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { OficinasComponent } from './shared/oficinas/oficinas.component';
import { OportunidadComponent } from './shared/oportunidad/oportunidad.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { TradicionalComponent } from './pages/tradicional/tradicional.component';
import { ManomanoComponent } from './pages/manomano/manomano.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { EcuadorComponent } from './pages/ecuador/ecuador.component';
import { CostaRicaComponent } from './pages/costa-rica/costa-rica.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ComoTrabajamosComponent } from './shared/como-trabajamos/como-trabajamos.component';
import { OportunidadBlackComponent } from './shared/oportunidad-black/oportunidad-black.component';
import { ServiciosRowComponent } from './shared/servicios-row/servicios-row.component';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    OficinasComponent,
    OportunidadComponent,
    HomeComponent,
    ContactoComponent,
    ServiciosComponent,
    AmazonComponent,
    DigitalComponent,
    TradicionalComponent,
    ManomanoComponent,
    SobreNosotrosComponent,
    EcuadorComponent,
    CostaRicaComponent,
    ProyectosComponent,
    ComoTrabajamosComponent,
    OportunidadBlackComponent,
    ServiciosRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
