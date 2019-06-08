import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<any>;

  constructor(
    private service: Service
  ) {
    this.pessoas = new Array<any>();
   }

  ngOnInit() {
    this.service.pessoas()
    .subscribe((res: any) => this.pessoas = res);
  }

}
