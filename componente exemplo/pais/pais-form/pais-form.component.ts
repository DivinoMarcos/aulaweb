import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {LayoutDefaultComponent} from '../../../_layout/layout-default/layout-default.component';

import {PaisService} from "../pais.service";
import {Pais} from "../pais";

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  pais: Pais;
  paisForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public layout: LayoutDefaultComponent, 
    public paisService: PaisService
  ) { }

  ngOnInit() {

    this.pais = new Pais();

    /* Obter o `ID` passado por parâmetro na URL */
    this.pais.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    this.layout.title = (this.pais.id == null) ? 'Nova Mantenedora' : 'Alterar Mantenedora';

    /* Reactive Forms */
    this.paisForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      sigla: this.builder.control('', [Validators.required,Validators.maxLength(3)]),
    }, {})

    // Se existir `ID` realiza busca para trazer os dados
    if (this.pais.id != null) {
      this.paisService.findOne(this.pais.id)
        .subscribe(pais => {
          this.paisForm = this.builder.group(pais, {})
        })
    }

  }

  /* Método para salva mantenedora */
  salvar(pais: Pais) {
    this.paisService.save(pais)
      .subscribe(response => {
        
        /* Adiciona a lista de mensagens p/ exibição no front-end */
        //this.layout.addMessages(response.messages)

        /* Redireciona para lista */
        this.router.navigate(['/pais'])
      })
  }


}
