import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from 'src/plugins/app.boostrap.module';
import { EscolherComponent } from './escolher/escolher.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PessoasComponent } from './pessoas/pessoas.component';
import { AppRoutingModule } from './app.routing.module';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolherComponent,
    PessoasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    EscolherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
