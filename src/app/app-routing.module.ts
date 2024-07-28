import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsListComponent } from './components/buttons-list/buttons-list.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: ButtonsListComponent  }, // Default route to Buttons-List-Component.
  { path: '**', component: NotFoundPageComponent } // Wildcard route to NotFoundPageComponent for unmatched paths.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
