import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private REST_API_SERVER = 'http://client2.local.com:4200/api/';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(url) {
    return this.httpClient.get(this.REST_API_SERVER + url, { withCredentials: true });
  }
}
