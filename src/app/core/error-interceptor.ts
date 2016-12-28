import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ErrorInterceptor implements ErrorHandler {

    handleError(response: any): void {
        console.log("Errror", response);
        throw response;
    }

}
