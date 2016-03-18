import {Component, OnInit} from 'angular2/core';
import {Logger} from './common/services/logger.service';

import {PeekABooContainerComponent} from './components/peek-a-boo/peek-a-boo.container.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  directives: [PeekABooContainerComponent],
  providers: [Logger]
})

export class AppComponent {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}