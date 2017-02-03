import { FormControl } from '@angular/forms';

export class ofValidators {

    static minValue(minValue: number): any {
        return (control: FormControl): { [key: string]: any } => {
            var v: number = control.value;
            return v < minValue ? { 'minValue': { 'requiredMinValue': minValue, 'actualValue': v } } : null;
        };
    }

}