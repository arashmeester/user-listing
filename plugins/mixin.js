import Vue from 'vue'
import moment from 'moment';

Vue.prototype.$_formatDate = (date, format = 'DD MMM YYYY') => {
  return moment(date).format(format);
}
