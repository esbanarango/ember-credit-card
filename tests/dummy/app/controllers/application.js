import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.creditCard = EmberObject.create({ number:'', name:'', expiration:'', cvc:'' })
  }
});
