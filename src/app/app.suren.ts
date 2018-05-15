import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'https://surenapi.azurewebsites.net/';
    public ApiUrl = 'suren/search/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}