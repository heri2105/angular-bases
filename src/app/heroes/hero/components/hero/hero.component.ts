import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string= 'ironman';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getObtenerNombre():string{
    return this.name + " - "+ this.age;
  }

  cambiarNombre(){
    this.name ="Spiderman";
  }
  cambiarEdad(){
    this.age = 30;
  }
  resetear():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
