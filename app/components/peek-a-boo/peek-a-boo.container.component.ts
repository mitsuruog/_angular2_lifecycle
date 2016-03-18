import {Component} from 'angular2/core';
import {PeekABooComponent} from './peek-a-boo.component';
import {Logger} from '../../common/services/logger.service';

@Component({
  selector: 'peek-a-boo-container',
  template: `
  <div>
    <h2>Peek a boo</h2>
    <button type="button" class="btn btn-default"
      (click)="toggleChild()">
        {{hasChild ? 'Destroy' : 'Create'}} component
    </button>
    <button type="button" class="btn btn-default" 
      (click)="updateChild()" *ngIf="hasChild">Update component</button>
    <peek-a-boo *ngIf="hasChild" [name]="name"></peek-a-boo>
  </div>
  `,
  directives: [PeekABooComponent],
})
export class PeekABooContainerComponent {

  hasChild: boolean = false;
  name: string = 'mitsuruog';

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.name = 'mitsuruog';
    }
  }

  updateChild() {
    this.name += '!';
  }

}