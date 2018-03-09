import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'category', loadChildren: 'app/domain/category/category.module#CategoryModule'}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }