import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'project';
  test = {};

  constructor(@Inject(APP_BASE_HREF) baseHref: string, private helloWorlService : HelloWorldService) {}

  fetchData() {
    this.helloWorlService.getData().subscribe((data) => {
      console.log("DEBUG DATA");
      console.log(data);
      this.test = data;
    }, (error) => {
      console.error(error);
    }
    )
  }
}
