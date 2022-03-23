import {helper} from '@ember/component/helper';

export function mult(params) {
  return params.reduce((a, b) => {
    return a * b;
  });
};

Handlebars.registerHelper('iscreated', function (a) {
  if (a === 'created') {
    return true;
  }
});

export default helper(mult);
