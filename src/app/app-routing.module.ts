import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { HomeComponent } from './home/home.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ContatosListagemComponent },
  { path: 'inserirProduto', component: InserirProdutoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
