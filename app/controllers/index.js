import Controller from '@ember/controller';
import schedule from '../data/schedule';

export default class IndexController extends Controller {
  schedule = schedule;
}
