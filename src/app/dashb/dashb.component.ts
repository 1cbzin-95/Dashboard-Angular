import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

import { DashbService } from './dashb.service';         //1

declare var google:any;

@Component({
  selector: 'app-dashb',
  templateUrl: './dashb.component.html',
  styleUrls: ['./dashb.component.css']
})
export class DashbComponent implements OnInit {
  private dados:any;                                     //3
  constructor(private dadosService:DashbService){
  }       //2

  ngOnInit(): void { //4
    this.dadosService.obterDados().subscribe(
      dados=>{
        this.dados=dados;
        this.init();
    });
  }
  init():void{
    if(typeof(google)!== 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(()=>{
        google.charts.setOnLoadCallback(this.exibirGraficos());
      },1000);
    }
  }
  exibirGraficos():void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }
  exibirPieChart():void{
    const el =document.getElementById('pie_chart');//pego a referencia
    const chart = new google.visualization.PieChart(el); //instancio passsando a div onde ele sera exibido
    chart.draw(this.obterDataTable(),this.obterOpcoes()); //

  }
  exibir3dPieChart():void{
    const el =document.getElementById('3d_pie_chart');//pego a referencia
    const chart = new google.visualization.PieChart(el); //instancio passsando a div onde ele sera exibido
    const opcoes = this.obterOpcoes();
    opcoes['is3D']= true;
    chart.draw(this.obterDataTable(),opcoes); //
  }
  exibirBarChart():void{
    const el = document.getElementById('bar_chart');//pego a referencia
    const chart = new google.visualization.BarChart(el); //instancio passsando a div onde ele sera exibido

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }
  exibirLineChart():void{
    const el = document.getElementById('line_chart');//pego a referencia
    const chart = new google.visualization.LineChart(el); //instancio passsando a div onde ele sera exibido

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }
  exibirColumnChart():void{
    const el = document.getElementById('column_chart');//pego a referencia
    const chart = new google.visualization.ColumnChart(el); //instancio passsando a div onde ele sera exibido

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }
  exibirDonutChart():void{
    const el = document.getElementById('donut_chart');//pego a referencia
    const chart = new google.visualization.PieChart(el); //instancio passsando a div onde ele sera exibido
    const opcoes = this.obterOpcoes();
    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(),opcoes); //
  }

  obterDataTable():any{
    const data = new google.visualization.DataTable();
    data.addColumn('string','Mês');
    data.addColumn('number','Quantidade');
    data.addRows(this.dados);

    return data;
  }
  obterOpcoes():any{
    return{
      'title':'Quantidade de cadastros  primeiro semestre',
      'width':400,
      'height':300
    }
  }
}
