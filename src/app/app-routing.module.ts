import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'stagePlays',
    loadChildren: () =>
      import('@stagePlays/stage-plays.module').then((module) => module.StagePlaysModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@user/user.module').then((module) => module.UserModule),
  },
  {
    path: '**',
    redirectTo: 'stagePlays'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
