import Abstractroute from './AbstractRoute';

export default class EmployeesRoute extends Abstractroute {
  model() {
    return this.store.findAll('employee');
  }
}
