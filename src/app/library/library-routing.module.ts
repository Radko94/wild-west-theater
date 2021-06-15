import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagePlayDetailsComponent } from './components/stage-play-details/stage-play-details.component';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryComponent },
  { path: ':id', component: StagePlayDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
