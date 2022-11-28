import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  x: number = 0
  y: number = 0
  clase: number = 0
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  dia:string[] = []
  constructor() {}

  ngOnInit(): void {
    this.construirCalendario();
    for (let i = 0; i < this.diasCalendario.length; i++) {
      var tostring = this.diasCalendario[i].toString();
      var numsStr = tostring.replace(/[^0-9]/g, '');
      this.dia.push(numsStr.toString().substring(0, 2));
    }
  }
  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();
    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado

    // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }
  // @HostListener('document:onMouseMove', ['$event'])
  // onMouseMove(e: any) {
  //   this.x = e.x
  //   this.y = e.y
  //   this.clase = e.x
  // }

}
