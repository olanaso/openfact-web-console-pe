import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pf-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  //The step title displayed in the header and used for the review screen when displayed
  @Input()
  stepTitle: string;

  //  Sets the text identifier of the step
  @Input()
  stepId: string;

  //This sets the priority of this wizard step relative to other wizard steps.They should be numbered sequentially in the order they should be viewed.
  @Input()
  stepPriority: number;

  //Sets whether this step has substeps
  @Input()
  substeps: boolean;

  //Sets whether the next button should be enabled when this step is first displayed
  @Input()
  nextEnabled: boolean;

  //Sets whether the back button should be enabled when this step is first displayed
  @Input() prevEnabled: boolean;

  //The text to display as a tooltip on the next button
  @Input() nextTooltip: string;

  //The text to display as a tooltip on the back button
  @Input() prevTooltip: string;

  //Disables the wizard when this page is shown
  @Input() wzDisabled: boolean;

  //Sets whether or not it's ok for the user to leave this page
  @Input() okToNavAway: boolean;

  //Sets whether the user can click on the numeric step indicators to navigate directly to this step
  @Input() allowClickNav: boolean;

  //The step description (optional)
  @Input() description: string;

  //Data passed to the step that is shared by the entire wizard
  @Input()
  wizardData: any;

  //The function called when the wizard shows this step
  @Output()
  onShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Indicates whether review information should be displayed for this step when the review step is reached
  @Input()
  showReview: boolean;

  //Indicators whether the review information should be expanded by default when the review step is reached
  @Input()
  showReviewDetails: boolean;

  //The template that should be used for the review details screen
  @Input()
  reviewTemplate: string;

  constructor() { }

  ngOnInit() {
  }

}
