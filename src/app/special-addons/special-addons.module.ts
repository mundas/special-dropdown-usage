import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialDropdownComponent } from './special-dropdown/special-dropdown.component';
import { SpecialSelectionViewComponent } from './special-selection-view/special-selection-view.component';
import { SpecialButtonComponent } from './special-button/special-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpecialDropdownComponent, SpecialSelectionViewComponent, SpecialButtonComponent],
  exports: [
    SpecialDropdownComponent]
})
export class SpecialAddonsModule { }
