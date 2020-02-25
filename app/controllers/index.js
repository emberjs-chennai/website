import Controller from '@ember/controller';
import previousTalksList from '../data/previous-talks';

export default class IndexController extends Controller {
  previousTalksList = previousTalksList
}
