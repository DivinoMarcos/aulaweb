import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import {CategoryViewComponent} from './category-view/category-view.component'
const CategoryRoutes: Routes = [
    {path: 'list', component: CategoryListComponent},
    {path: 'form', component: CategoryFormComponent},
    {path: 'view', component: CategoryViewComponent},

]; 

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
  })
  
export class CategoryRouting {}