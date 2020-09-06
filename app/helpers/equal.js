import { helper } from '@ember/component/helper';

export default helper(function equal(params/*, hash*/) {
  let [operand1, operand2] = params;
  return operand1 === operand2;
});
