import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../model/item';
import { SpecialColor } from '../special-addons/interfaces/special-color.enum';
import { ButtonOptions } from '../model/button';
import { Options } from '../model/options';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Item[];
  options: Options;
  selectedItem: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.options = new Options();
    this.options.specialButtonOptions = new ButtonOptions('Some very specific things ...', SpecialColor.WHITE, undefined);
  }

  onSelectItem(item: Item) {
    this.selectedItem = item;
  }

}
