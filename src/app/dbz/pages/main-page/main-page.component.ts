import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters:Character[] = [{
    name:'Krilin',
    power:1000,
  },
  {
    name:'Goku',
    power:9500,
  }
];

  onNewCharacter(charts : Character):void{

    console.log(charts);
    this.characters.push(charts);
    console.log(this.characters);
  }
  borrarIdCharacter(indice:number){
    this.characters.splice(indice,1);
  }
}
