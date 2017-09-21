import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaMotoresComponent } from './tabela-motores/tabela-motores.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaMotoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
