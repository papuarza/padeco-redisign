import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { EcuadorComponent } from './pages/ecuador/ecuador.component';
import { CostaRicaComponent } from './pages/costa-rica/costa-rica.component';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { ManomanoComponent } from './pages/manomano/manomano.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TradicionalComponent } from './pages/tradicional/tradicional.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosComponent},
  { path: 'online', component: DigitalComponent},
  { path: 'offline', component: TradicionalComponent},
  { path: 'ecuador', component: EcuadorComponent},
  { path: 'costa-rica', component: CostaRicaComponent},
  { path: 'amazon', component: AmazonComponent},
  { path: 'manomano', component: ManomanoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'proyectos', component: ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }