import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:() => import('./core/core.module').then(m =>m.CoreModule)},
  {path: 'b', loadChildren:() => import('./data/data.module').then(m =>m.DataModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
