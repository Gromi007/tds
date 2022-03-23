import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('string') status;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @hasMany('orderdetail') orderdetails;
  @belongsTo('user') user;

  get count() {
    return this.orderdetails.length;
  }

  get statusact() {
    return this.status;
  }
}
