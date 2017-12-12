import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {
  baseUrl = 'http://localhost:4000/api'
  jsonHeaders = {headers: {"Content-Type": "application/json"}}

  constructor(public http: Http) {}

  setToken(token: string) {
    localStorage.setItem("token", token); 
  }

  getToken() {
    let token = localStorage.getItem("token");
    if (token !== null && token !== "") {
      return token; 
    } else {
      return null;
    }
  }

  listSystems(callback: Function) {
    let token = this.getToken();
    if (token == null) {
      console.error("Cannot list systems, no token has been set.");
      return;
    }
    this.http.get(this.baseUrl + '/systems?token=' + token)
      .map(response => response.json())
      .subscribe(data => {
        callback(data.data); 
      }, error => {
        console.error(error);
      });
  }

  login(user: any = {}, callback: Function) {
    this.http.post(this.baseUrl + '/sessions', user)
      .map(response => response.json())
      .subscribe(data => {
        this.setToken(data.data.token);
        callback(data);
      }, error => {
        console.error(error);
      });
  }
  
  register(user: any = {}, callback: Function) {
    this.http.post(this.baseUrl + '/users', user)
      .map(response => response.json())
      .subscribe(data => {
        callback(data);
      }, error => {
        console.error(error);
      });
  }
}
