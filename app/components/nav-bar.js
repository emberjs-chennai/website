import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @action
  toggleExpanded() {
    // Get the "main-nav" element
    let $target = document.getElementById('main-nav');
    // Toggle the class on "main-nav"
    $target.classList.toggle('hidden');
  }
}
