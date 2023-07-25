import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power:10
  }]

  public onDeleteCharacter(indice:number){
    this.onDeleteCharacterEmitter.emit(indice);
  }

  @Output()
  public onDeleteCharacterEmitter: EventEmitter <number> = new EventEmitter();



}
