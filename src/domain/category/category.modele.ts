import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Component
import {CategoryListComponent} from './category-list/category-list.component'

//routing 
import {CategoryRouting} from './category-routing.module';

//Service
import {CategoryService} from './category.service';

@NgModule({
    declarations: [
        //Componentes
        CategoryListComponent

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,

      // Routing
      CategoryRouting
    ],
    
    providers: [
      // services
      CategoryService
    ]
  })
  export class PaisModule { }