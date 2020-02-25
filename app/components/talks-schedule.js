import Component from '@glimmer/component';
import scheduleList from 'chennai-ember-website/data/schedule';

export default class TalksScheduleComponent extends Component {
  scheduleList = this.args.scheduleList || scheduleList;
}
