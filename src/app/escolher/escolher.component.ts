import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Service } from '../app.service';

export class Pessoa {
  Nome: string;
  Sobrenome: string;
  Email: string;
  Produto: any;
}


@Component({
  selector: 'app-escolher',
  templateUrl: './escolher.component.html',
  styleUrls: ['./escolher.component.scss']
})
export class EscolherComponent implements OnInit {

  Produto: any;
  pessoa: Pessoa;

  constructor(
    private modalRef: BsModalRef,
    private service: Service
  ) {
    this.pessoa = new Pessoa();
  }

  ngOnInit() {
  }

  close() {
    this.modalRef.hide();
  }

  escolher() {
    if(this.validar()) {

      this.pessoa.Produto = this.Produto;

      this.service.fazerEscolhar(this.pessoa)
      .subscribe(res => {
        alert(res);
      }, err => {
        alert(err)
      });

    } else {
      alert("Preencha todos os campos!")
    }
  }

  validar() {
    if (this.pessoa.Nome == undefined || this.pessoa.Nome == '')
      return false;
    if (this.pessoa.Sobrenome == undefined || this.pessoa.Sobrenome == '')
      return false;
    if (this.pessoa.Email == undefined || this.pessoa.Email == '')
      return false;
    return true;
  }
}
