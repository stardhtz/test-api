import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestapiService {
  readonly apiUrl = 'https://jsonplaceholder.typicode.com';
  readonly apiSisfo = 'http://10.252.252.44';

  constructor(
    private http: HttpClient,
  ) {  }

  getApiTest(): Observable<any> {
    return this.http.get(this.apiUrl+'/posts/2');
  }

  getApiTracer(): Observable<any> {
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + btoa('tracerstudy:tr4c3rstuDy4pi')});
    return this.http.get(this.apiSisfo + '/tracerstudy/ViewStudyProgram/31', {headers: reqHeader});
  }
}
