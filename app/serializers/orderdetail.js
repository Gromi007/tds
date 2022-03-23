import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class OrderdetailSerializer extends JSONSerializer.extend(
  EmbeddedRecordsMixin
) {
  attrs = {
    product: { deserialize: 'records', serialize: 'id' },
  };
  compositeKeys = ['order', 'product'];

  extractId(modelClass, resourceHash) {
    return this.compositeKeys
      .map((key) => {
        if (resourceHash[key].id) {
          return resourceHash[key].id;
        }
        return resourceHash[key];
      })
      .join(',');
  }
}
