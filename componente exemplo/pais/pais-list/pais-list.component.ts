import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {DATATABLE_OPTIONS} from '../../../app.api';

import {LayoutDefaultComponent} from '../../../_layout/layout-default/layout-default.component';

import {PaisService} from "../pais.service";
import {Pais} from "../pais";

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<Pais> = new Subject()

  paises: Pais[]

  constructor(
    public layout: LayoutDefaultComponent, 
    public paisService: PaisService
  ) { }

  ngOnInit() {

    this.layout.title = 'Lista de Mantenedora';
    this.dtOptions = DATATABLE_OPTIONS;

    this.paisService.findAll()
    .subscribe(paises => {
      this.paises = paises
      this.dtTrigger.next()
    });

  }

}
