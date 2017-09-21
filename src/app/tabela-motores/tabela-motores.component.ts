import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";

@Component({
  selector: 'app-tabela-motores',
  templateUrl: './tabela-motores.component.html',
  styleUrls: ['./tabela-motores.component.css']
})
export class TabelaMotoresComponent implements OnInit {
  motores = [
    {
      nome:"Modelo Ragon WZ",
      descricao:"Cabeçotes individuais com 4 válvulas por cilindro",
      uso:"veicular"
    },
    {
      nome:"Modelo Ragon TY",
      descricao:"Cabeçotes individuais com 3 válvulas por cilindro",
      uso:"veicular"
    }    
  ];
  constructor() {
    let motor = new Motor();
    motor.nome="Motor WWW";
    motor.descricao = "Motor da Web";
    motor.uso = "veicular"; 
    this.motores.push(motor);
  }

  ngOnInit() {
  }

}
