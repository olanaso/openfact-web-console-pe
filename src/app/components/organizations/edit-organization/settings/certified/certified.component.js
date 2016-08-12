/**
 * Created by AHREN on 10/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
/*Directives import*/
var alerts_1 = require('../../../../../shared/alerts');
var button_save_1 = require('../../../../../shared/button-save');
var button_cancel_1 = require('../../../../../shared/button-cancel');
var CertifiedComponent = (function () {
    function CertifiedComponent(router, activatedRoute, formBuilder, dataService, alertMessageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.alertMessageService = alertMessageService;
        this.working = false;
        this.submitted = false;
        this.alerts = [];
        this.certified = this.activatedRoute.parent.snapshot.data['certified'];
    }
    CertifiedComponent.prototype.ngOnInit = function () {
        this.loadAlerts();
        this.buildForm();
        this.loadData();
    };
    CertifiedComponent.prototype.loadData = function () {
        /*(<FormControl>this.form.controls['name']).updateValue(this.organization.name);
        (<FormControl>this.form.controls['supplierName']).updateValue(this.organization.supplierName);
        (<FormControl>this.form.controls['registrationName']).updateValue(this.organization.registrationName);
        (<FormControl>this.form.controls['additionalAccountId']).updateValue(this.organization.additionalAccountId);
        (<FormControl>this.form.controls['assignedIdentificationId']).updateValue(this.organization.assignedIdentificationId);   */
    };
    CertifiedComponent.prototype.loadAlerts = function () {
        var _this = this;
        this.alertMessageService.getAlerts().forEach(function (alert) {
            _this.alerts.push(alert);
        });
        this.alertMessageService.clearAlerts();
    };
    CertifiedComponent.prototype.buildForm = function () {
        /* this.form = this.formBuilder.group({
           name: ['', []],
           supplierName: ['', []],
           registrationName: ['', []],
           additionalAccountId: ['', []],
           assignedIdentificationId: ['', []],
           enabled: ['', []]
         });*/
    };
    CertifiedComponent.prototype.setSubmitted = function (submitted) {
        this.submitted = submitted;
    };
    CertifiedComponent.prototype.save = function (certified) {
        var _this = this;
        /*Disable button*/
        this.working = true;
        this.certified = Object.assign(this.certified, certified);
        this.certified.save().subscribe(function (result) {
            _this.alerts.push({
                type: 'success',
                message: 'Certified ' + certified.alias + ' updated.'
            });
        }, function (error) {
            _this.working = false;
            _this.alerts.push({
                type: 'error',
                message: 'Certified could not be create.',
                details: error
            });
        });
    };
    CertifiedComponent.prototype.cancel = function () {
        var link = ['./overview'];
        this.router.navigate(link);
    };
    CertifiedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-certified',
            templateUrl: 'certified.component.html',
            styleUrls: ['certified.component.css'],
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                alerts_1.AlertsComponent,
                button_save_1.ButtonSaveComponent,
                button_cancel_1.ButtonCancelComponent
            ],
            providers: [forms_1.FormBuilder]
        })
    ], CertifiedComponent);
    return CertifiedComponent;
}());
exports.CertifiedComponent = CertifiedComponent;
//# sourceMappingURL=certified.component.js.map