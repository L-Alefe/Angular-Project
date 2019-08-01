import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [AppComponent, ContatosListagemComponent, MenuComponent, HomeComponent, InserirProdutoComponent, MozaikoComponent, TypeaheadComponent, LookupComponent, LookupTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
