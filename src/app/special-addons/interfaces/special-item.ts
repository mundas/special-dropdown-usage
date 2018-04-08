import { SpecialIcon } from './special-icon.enum';
import { SpecialColor } from './special-color.enum';
import { SpecialFont } from './special-font.enum';

export interface SpecialItem {
    text: String;
    font: SpecialFont;
    icon: SpecialIcon;
    color: SpecialColor;
}
