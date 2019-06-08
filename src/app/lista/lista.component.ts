import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { EscolherComponent } from '../escolher/escolher.component'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  modalRef: BsModalRef;
  produtos: Array<any>;

  constructor(private service: Service, private modalService: BsModalService) {
    this.produtos = new Array<any>();
  }

  ngOnInit() {
    this.service
      .produtos()
      .subscribe((res: Array<any>) => this.produtos = res);
  }

 
  openModal(produto: any) {
    this.modalRef = this.modalService.show(
      EscolherComponent,
      Object.assign({}, { 
        class: 'gray modal-sm modal-dialog-centered',
        initialState:{
          Produto: produto
        }
      })
    );
  }
}
