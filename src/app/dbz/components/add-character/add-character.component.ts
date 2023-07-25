import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public charactersss : Character={
      name:'',
      power:0
    }
    public emitCharacter(){
      if(this.charactersss.name ==""){
        return;
      }
      this.onNewCharacter.emit(this.charactersss);

      console.log(this.charactersss);

      this.charactersss = {name:'',power:0}
    }

    public borrarIdCharacter(personaje : Character){

    }
}
