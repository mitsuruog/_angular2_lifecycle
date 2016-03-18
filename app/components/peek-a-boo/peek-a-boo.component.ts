import {
  OnChanges, SimpleChange,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from 'angular2/core';
import {Component, Input, Output} from 'angular2/core';
import {Logger} from '../../common/services/logger.service';

let nextId: number = 1;

export class PeekABoo implements OnInit {

  constructor(
    private logger: Logger
  ) { }

  ngOnInit() { this.trace('OnInit'); }

  protected trace(message: string) {
    this.logger.log(`#${nextId++} ${message}`)
  }

}

@Component({
  selector: 'peek-a-boo',
  template: `<div class="well-sm">My name is {{name}}</div>`
})
export class PeekABooComponent extends PeekABoo implements
  OnInit, DoCheck, OnChanges,
  AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit,
  OnDestroy {

  @Input() name: string;

  private state = 'initialized';

  constructor(
    logger: Logger
  ) {
    super(logger);
    let name = this.name ? 'is' : 'is not';
    this.trace(`name ${name} known at construction`);
  }

  ngOnChanges(changes: {
    [key: string]: SimpleChange;
  }) {
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        this.trace(`OnChanges => name ${this.state} to ${name}`);
      } else {
        this.trace(`OnChanges => ${propName} is ${this.state}`);
      }
      // [MEMO] 初回はinitializedで2回目以降はchanged
      this.state = 'changed';
    }
  }
  ngDoCheck() { this.trace('DoCheck'); }

  ngAfterContentInit() { this.trace('AfterContentInit'); }
  ngAfterContentChecked() { this.trace('AfterContentChecked'); }
  ngAfterViewInit() { this.trace('AfterViewInit'); }
  ngAfterViewChecked() { this.trace('AfterViewChecked----------'); }

  ngOnDestroy() { this.trace('OnDestroy============'); }

}