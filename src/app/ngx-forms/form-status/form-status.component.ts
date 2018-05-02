import { Subscription } from 'rxjs/Subscription';

import { AbstractControl, ControlContainer } from '@angular/forms';

import {
  Directive,
  EventEmitter,
  Host,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Self,
  SimpleChanges,
  SkipSelf,
  forwardRef,
  HostBinding,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[ngxFormControlError]'
})
export class FormControlErrorDirective implements OnInit, OnDestroy {

  @Input()
  public ngxFormControlError: string;

  @HostBinding('class.has-error')
  public hasError: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private parent: ControlContainer) { }

  public ngOnInit() {
    const control = this.parent.control.get(this.ngxFormControlError);
    this.subscriptions.push(control.valueChanges.subscribe((value) => {
      this.hasError = !(control.valid || control.disabled);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
  }

}
