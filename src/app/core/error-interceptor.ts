import { ErrorHandler } from "@angular/core";
import { AlertService } from './alert/alert.service';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ErrorInterceptor implements ErrorHandler {

    constructor(private alertService: AlertService) { }

    handleError(response: any): void {
        if (response.status == 401) {
            //Auth.authz.logout();
            console.log("Auth error");
        } else if (response.status == 403) {
            //$location.path('/forbidden');
            console.log("forbidden");
        } else if (response.status == 404) {
            //$location.path('/notfound');
            console.log("not found");
        } else if (response.status) {
            let data: Response = (<Response>response).json();
            if (data && data["errorMessage"]) {
                this.alertService.popAsync('error', 'Error', data["errorMessage"]);
            } else {
                this.alertService.popAsync('error', 'Error', "An unexpected server error has occurred");
            }
        }  
        throw response;
    }

}
