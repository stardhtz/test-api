import { Component, OnInit } from '@angular/core';
import { TestapiService } from './services/testapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test-api';
  data = {};

  constructor(private testApi: TestapiService) {}

  ngOnInit(){
    // this.getDataApi();
    this.getDataTracerStudy();
  }

  getDataApi() {
    this.testApi.getApiTest().subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }

  getDataTracerStudy() {
    this.testApi.getApiTracer().subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }
}
