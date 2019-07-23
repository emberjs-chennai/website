import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
  @tracked isExpanded = false;

  @action
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
