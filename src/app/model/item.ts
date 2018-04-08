import { SpecialItem } from '../special-addons/interfaces/special-item';
import { SpecialIcon } from '../special-addons/interfaces/special-icon.enum';
import { SpecialColor } from '../special-addons/interfaces/special-color.enum';
import { SpecialFont } from '../special-addons/interfaces/special-font.enum';
import { Optional } from '@angular/core';

export class Item implements SpecialItem {
    font: SpecialFont;
    icon: SpecialIcon;
    color: SpecialColor;
    text: String;
    additionalValue: String;

    constructor(
        text: String,
        additionalValue: String,
        @Optional() icon: SpecialIcon,
        @Optional() color: SpecialColor,
        @Optional() font: SpecialFont) {

        this.text = text ? text : 'Defualt item text';
        this.additionalValue = additionalValue ? additionalValue : ' No additional value';
        this.icon = icon ? icon : SpecialIcon.DEFAULT;
        this.color = color ? color : SpecialColor.DEFAULT;
        this.font = font ? font : SpecialFont.DEFAULT;
    }

}
