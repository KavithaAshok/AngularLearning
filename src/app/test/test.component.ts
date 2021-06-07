import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private readonly httpService: HttpService) { }

  ngOnInit() {
  }

  call() {
    this.httpService.getData().subscribe(res => {
      console.log(res);
    });
  }
}
