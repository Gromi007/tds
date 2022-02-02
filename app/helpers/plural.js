import { helper } from '@ember/component/helper';

export default helper(function plural(params){
  let[count, zero, one, other] = params;
  if(count === 0){
   return zero;
  }
  if(count === 1){
    return '1 '+one;
  }
  return count + ' ' + other;
});
