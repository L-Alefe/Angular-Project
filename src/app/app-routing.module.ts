import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosListagemComponent } from './components/contatos-listagem/contatos-listagem.component';
import { HomeComponent } from './components/home/home.component';
import { InserirProdutoComponent } from './components/inserir-produto/inserir-produto.component';
import { MozaikoComponent } from './components/mozaiko/mozaiko.component';
import { LookupTableComponent } from './components/routes/lookup-table/lookup-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ContatosListagemComponent },
  { path: 'inserirProduto', component: InserirProdutoComponent },
  { path: 'mozaiko', component: MozaikoComponent },
  { path: 'lookupTable', component: LookupTableComponent, data: { title: 'titulo' } },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
