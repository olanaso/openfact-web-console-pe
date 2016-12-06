import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[pfWizNext]'
})
export class WizardNextButtonDirective {
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
  }
}

@Directive({
  selector: '[pfWizPrevious]'
})
export class WizardPreviousButtonDirective {
  constructor() { }
}

@Directive({
  selector: '[pfWizFinish]'
})
export class WizardFinishButtonDirective {
  constructor() { }
}

@Directive({
  selector: '[pfWizCancel]'
})
export class WizardCancelButtonDirective {
  constructor() { }
}

@Directive({
  selector: '[pfWizReset]'
})
export class WizardResetButtonDirective {
  constructor() { }
}
