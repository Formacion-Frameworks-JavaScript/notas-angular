import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulaComponent } from './aula/aula.component';
import { LoadingComponent } from './loading/loading.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NotaComponent } from './nota/nota.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';
import { TotalesComponent } from './totales/totales.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AulaComponent,
    LoadingComponent,
    NavegacionComponent,
    NotaComponent,
    NuevaNotaComponent,
    TotalesComponent,
    EstadisticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
