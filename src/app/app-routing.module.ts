
import { FormularioTwoComponent } from './formulario-two/formulario-two.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCdkComponent } from './cdk-form/formulario-cdk/formulario-cdk.component';

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
  },
  {
    path: 'cdk-teste',
    component: FormularioCdkComponent,
    loadChildren: () => import('./cdk-form/cdk-form.module').then((module) => module.CdkFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
