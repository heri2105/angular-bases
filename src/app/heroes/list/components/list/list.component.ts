import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] =['Spiderman','hulk','iroman'];
  public ultimoHeroeBorrado? ="";

  removerUltimoHeroes():void{
    this.ultimoHeroeBorrado = this.heroNames.pop();
  }
}
