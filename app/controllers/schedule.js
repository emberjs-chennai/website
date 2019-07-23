import Controller from '@ember/controller';
import scheduleList from '../data/schedule';

export default class ScheduleController extends Controller {
  get scheduleList() {
    return scheduleList;
  } 
}
