import { Component, OnInit, Input } from '@angular/core';
import { SpecialButtonOptions } from '../interfaces/special-button-options';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent implements OnInit {

  @Input()
  specialButtonOptions: SpecialButtonOptions;

  constructor() { }

  ngOnInit() {
  }

}
