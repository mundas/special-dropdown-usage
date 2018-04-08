import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpecialItem } from '../interfaces/special-item';
import { SpecialOptions } from '../interfaces/special-options';

@Component({
  selector: 'app-special-dropdown',
  templateUrl: './special-dropdown.component.html',
  styleUrls: ['./special-dropdown.component.css']
})
export class SpecialDropdownComponent implements OnInit {

  @Input()
  specialItems: SpecialItem[];
  @Input()
  specialOptions: SpecialOptions;
  @Output()
  selection: EventEmitter<SpecialItem> = new EventEmitter<SpecialItem>();

  selectedItem: SpecialItem;

  constructor() { }

  ngOnInit() {
  }

  selectItem(specialItem: SpecialItem, event: Event) {
    event.preventDefault();
    this.selectedItem = specialItem;
    this.selection.emit(this.selectedItem);
  }
}
