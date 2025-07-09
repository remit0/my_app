import { Component, Inject, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'project';
  test = '';

  constructor(@Inject(APP_BASE_HREF) baseHref: string, private helloWorlService : HelloWorldService) {}

  ngOnInit() {
    // We can call this method directly in ngOnInit to load data when the component loads
    //this.fetchData();
    this.test = 'hello';
  }

  fetchData() {
    this.helloWorlService.getData().subscribe((data: any) => {
      console.log("DEBUG DATA");
      console.log(data);
      this.test = data.key;
    }, (error) => {
      console.error(error);
    }
    )

  }
}
