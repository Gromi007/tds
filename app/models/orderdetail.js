import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @attr('number') quantity;
  @attr('boolean') prepared;
  @belongsTo('product') product;
  @belongsTo('order') order;

  get amount() {
    return this.product.get('price') * this.quantity;
  }
}
