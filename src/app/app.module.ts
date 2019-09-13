import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pipe
import { PipeModule } from './pipes/pipe.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './components/contatos-listagem/contatos-listagem.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { InserirProdutoComponent } from './components/inserir-produto/inserir-produto.component';
import { MozaikoComponent } from './components/mozaiko/mozaiko.component';
import { TypeaheadComponent } from './components/mozaikoComponents/typeahead/typeahead.component';
import { LookupComponent } from './components/mozaikoComponents/lookup/lookup.component';
import { LookupTableComponent } from './components/routes/lookup-table/lookup-table.component';
import { EnviaValorComponent } from './components/envia-valor/envia-valor.component';
import { RecebeValorComponent } from './components/recebe-valor/recebe-valor.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    MenuComponent,
    HomeComponent,
    InserirProdutoComponent,
    MozaikoComponent,
    TypeaheadComponent,
    LookupComponent,
    LookupTableComponent,
    EnviaValorComponent,
    RecebeValorComponent
  ],
  imports: [PipeModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
