import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ChaBebe' },
  { path: 'ChaBebe', component: ListaComponent },
  { path: 'Pessoas', component: PessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
