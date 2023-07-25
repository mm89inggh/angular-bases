import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string ='ironman';
  age: number =45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'spiderman';
  }
  changeAge(): void {
    this.age = 20;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
