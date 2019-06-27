import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';

@NgModule({
  declarations: [AppComponent, ContatosListagemComponent, MenuComponent, HomeComponent, InserirProdutoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
