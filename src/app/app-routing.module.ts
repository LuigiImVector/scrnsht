import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { SaveComponent } from './pages/save/save.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'save', component: SaveComponent, data: {url: ''}},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
