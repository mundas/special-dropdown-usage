import { Component, OnInit, Input } from '@angular/core';
import { SpecialItem } from '../interfaces/special-item';

@Component({
  selector: 'app-special-selection-view',
  templateUrl: './special-selection-view.component.html',
  styleUrls: ['./special-selection-view.component.css']
})
export class SpecialSelectionViewComponent implements OnInit {

  @Input()
  selectedItem: SpecialItem;

  constructor() {

  }

  ngOnInit() {
  }

}
