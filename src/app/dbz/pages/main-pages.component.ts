import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  constructor(private dbzService: DbzService){ };

  get characters(): Character[]{
    return this.dbzService.characters;
  }

  onDeleteCharacter(id:string){
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }

}
