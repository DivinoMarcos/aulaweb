import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PaisListComponent} from "./pais-list/pais-list.component";
import {PaisFormComponent} from "./pais-form/pais-form.component";
import {PaisDetailsComponent} from "./pais-details/pais-details.component";

export const PaisRoutes: Routes = [
    { path: 'pais', component: PaisListComponent},
    { path: 'pais/visualizar/:id', component: PaisDetailsComponent},
    { path: 'pais/novo', component: PaisFormComponent},
    { path: 'pais/alterar/:id', component: PaisFormComponent},
]; 


/*
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PaisRoutingModule {}
*/