import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ConferenceSessionComponent extends Component {
  @tracked isExpanded = false;

  get isOddSession() {
    return !this.isBreak && (this.args.pos % 2) === 1;
  }

  get isEvenSession() {
    return !this.isBreak && (this.args.pos % 2) === 0;
  }

  get isExpandable() {
    return this.args.session.isBreak || !this.args.session.topicDesc;
  }

  get svgIconName() {
    return this.isExpanded ? 'icon-up-arrow' : 'icon-down-arrow';
  }

  @action toggleExpand() {
    if (!this.isBreak) {
      this.isExpanded = !this.isExpanded;
    }
  }
}
