import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'bases';
  public counter : number = 12;

  incrementarPorValor(valor:number):void{
    this.counter += valor;
  }
  decrementarPorValor(valor:number):void{
    this.counter -= valor;
  }
  resetear():void{
    this.counter = 10;
  }

}
