import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {DataTablesModule} from 'angular-datatables';
import {NotifyModule} from '../../shared/notify/notify.module';

import {SharedModule} from "../../shared/shared.module";

// Component
//import {PaisRoutingModule} from "./pais-routing.module";
import {PaisService} from "./pais.service";
import {PaisDetailsComponent} from "./pais-details/pais-details.component";
import {PaisFormComponent} from "./pais-form/pais-form.component";
import {PaisListComponent} from "./pais-list/pais-list.component";

@NgModule({
    imports: [
      HttpModule,
      CommonModule,
      DataTablesModule,
      FormsModule,
      ReactiveFormsModule,
      NotifyModule,
      RouterModule,

      SharedModule

      // Component
      //PaisRoutingModule
    ],
    declarations: [
      
      // Component
      PaisDetailsComponent,
      PaisFormComponent,
      PaisListComponent
    ],
    providers: [

      // Component
      PaisService
    ]
  })
  export class PaisModule { }