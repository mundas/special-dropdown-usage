import { Injectable } from '@angular/core';
import { SpecialItem } from '../special-addons/interfaces/special-item';
import { SpecialIcon } from '../special-addons/interfaces/special-icon.enum';
import { SpecialColor } from '../special-addons/interfaces/special-color.enum';
import { Item } from '../model/item';
import { SpecialFont } from '../special-addons/interfaces/special-font.enum';

@Injectable()
export class ItemService {

  private itemTypes: Item[] = [];
  constructor() {
    this.itemTypes.push(new Item('Favourite movie', 'It is my secret', SpecialIcon.FILM, SpecialColor.GREEN, SpecialFont.LATO));
    this.itemTypes.push(new Item('Favourite browser', 'It is a joke', SpecialIcon.FIREFOX, SpecialColor.GREEN, SpecialFont.LATO));
    this.itemTypes.push(new Item('Worst editor', 'There is no better editor', SpecialIcon.WORD, SpecialColor.PURPLE, SpecialFont.LATO));
    this.itemTypes.push(new Item('Worst icon', 'Just example', SpecialIcon.ARCHIVE, SpecialColor.PURPLE, SpecialFont.DEFAULT));
    this.itemTypes.push(new Item('Everything else', undefined, SpecialIcon.PDF, SpecialColor.RED, SpecialFont.DEFAULT));
  }

  getItems(): Item[] {
    return this.itemTypes;
  }
}
