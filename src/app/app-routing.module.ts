import { FormularioTwoComponent } from './formulario-two/formulario-two.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormularioComponent
  },
  {
    path: 'form-one',
    component: FormularioComponent
  },
  {
    path: 'form-two',
    component: FormularioTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
