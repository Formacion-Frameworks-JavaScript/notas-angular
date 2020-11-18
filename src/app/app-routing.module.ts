import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaEstadisticasComponent } from './pagina-estadisticas/pagina-estadisticas.component';
import { PaginaNotasComponent } from './pagina-notas/pagina-notas.component';

const routes: Routes = [
  {
    path: 'notas', component: PaginaNotasComponent
  },
  {
    path: 'estadisticas', component: PaginaEstadisticasComponent
  },
  {
    path: '', redirectTo: '/notas', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
