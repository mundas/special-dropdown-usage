import { SpecialButtonOptions } from '../special-addons/interfaces/special-button-options';
import { SpecialColor } from '../special-addons/interfaces/special-color.enum';
import { SpecialFont } from '../special-addons/interfaces/special-font.enum';
import { Optional } from '@angular/core';

export class ButtonOptions implements SpecialButtonOptions {
    font: SpecialFont;
    text: String;
    color: SpecialColor;

    constructor(text: String, @Optional() color: SpecialColor, @Optional() font: SpecialFont) {
        this.text = text ? text : 'Default text';
        this.color = color ? color : SpecialColor.DEFAULT;
        this.font = font ? font : SpecialFont.DEFAULT;
    }
}
