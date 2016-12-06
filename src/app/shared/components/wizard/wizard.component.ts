import { Component, OnInit, ContentChildren, Input, Output, EventEmitter } from '@angular/core';
import { QueryList } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';

@Component({
    selector: 'pf-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

    //The wizard title displayed in the header
    @Input()
    title: string;

    //Hides the step indicators in the header of the wizard
    @Input()
    hideIndicators: boolean;

    //The current step can be changed externally - this is the title of the step to switch the wizard to
    @Input()
    currentStep: string;

    // The text to display on the cancel button
    @Input()
    cancelTitle: string;

    //The text to display on the back button
    @Input()
    backTitle: string;

    //The text to display on the next button
    @Input()
    nextTitle: string;

    //Called to notify when the back button is clicked
    @Output()
    backCallback: EventEmitter<any> = new EventEmitter<any>();

    //Called to notify when the next button is clicked
    @Output()
    nextCallback: EventEmitter<any> = new EventEmitter<any>();

    //Called to notify when when the wizard is complete.  Returns a boolean value to indicate if the finish operation is complete
    @Input()
    onFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

    //Called when the wizard is canceled, returns a boolean value to indicate if cancel is successful
    @Output()
    onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

    //Value that is set when the wizard is ready
    @Input()
    wizardReady: boolean = true;

    //Value that is set when the wizard is done
    @Input()
    wizardDone: boolean;

    //The text displayed when the wizard is loading
    @Input()
    loadingWizardTitle: string;

    // Secondary descriptive information to display when the wizard is loading
    @Input()
    loadingSecondaryInformation: string;

    //The height the wizard content should be set to.  This defaults to 300px if the property is not supplied.
    @Input()
    contentHeight: string;

    //Value that indicates wizard is embedded in a page (not a modal).  This moves the navigation buttons to the left hand side of the footer and removes the close button.
    @Input()
    embedInPage: boolean;

    @ContentChildren(WizardStepComponent)
    steps: QueryList<WizardStepComponent>;

    selectedStep: any = {};

    constructor() { }

    ngOnInit() {
    }

    getEnabledSteps() {
        return this.steps.filter(s => s.wzDisabled !== true);
    }

    stepClick(step) {
        if (step.allowClickNav) {

        }
    }

    onCancelEvent() {
        this.onCancel.emit(true);
    }

    backCallbackEvent() {
        this.backCallback.emit(this.selectedStep);
    }

    nextCallbackEvent() {
        this.nextCallback.emit(this.selectedStep);
    }

}
