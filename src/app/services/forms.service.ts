import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  private _formsUrl = environment.local + 'forms/'

  sendForm(sampleData: any) {
    return this.http.post(this._formsUrl, sampleData, httpOptions)
  }



}


