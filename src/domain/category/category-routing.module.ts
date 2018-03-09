import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoryListComponent} from "./category-list/category-list.component";



const CategoryRoutes: Routes = [
    { path: '', component: CategoryListComponent},
   /* { path: 'pais/visualizar/:id', component: PaisDetailsComponent},
    { path: 'pais/novo', component: PaisFormComponent},
    { path: 'pais/alterar/:id', component: PaisFormComponent},*/
]; 



@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
  })
  export class CategoryRouting {}
