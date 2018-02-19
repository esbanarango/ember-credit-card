/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* global Card */
import Component from '@ember/component';
import layout from '../templates/components/credit-card';

/**
 * Caredit card component.
 *
 * Card docs: https://github.com/jessepollak/card/
 *
 * Usage:
 * {{credit-card}}
 */

export default Component.extend({
  layout: layout,
  showCard: true,
  card: null,
  /**********************************
   * Optional attributes
   **********************************/

  /**
   * A selector or DOM element for the form where users will
   * be entering their information
   */
  form: '#ember-credit-card-form',

  /**
   * A selector or DOM element for the container
   * where you want the card to appear
   */
  cardContainer: '.card-wrapper',

  /**
   *
   *
   */
  formSelectors: {
    numberInput: 'input[name="number"]',
    expiryInput: 'input[name="expiry"]',
    cvcInput: 'input[name="cvc"]',
    nameInput: 'input[name="name"]'
  },

  values: {
    number: '•••• •••• •••• ••••',
    name: 'Full Name',
    expiry: '••/••',
    cvc: '•••'
  },

  messages: {
    validDate: 'valid\nthru',
    monthYear: 'month/year',
  },

  width: 350,

  formatting: true,

  debug: false,

  didInsertElement() {
    this._super(...arguments);

    this.setupCard();
  },

  setupCard() {
    var _this = this,
        card = new Card({

          form: _this.get('form'),

          container: _this.get('cardContainer'),

          formSelectors: _this.get('formSelectors'),

          width: _this.get('width'), // optional — default 350px

          formatting: _this.get('formatting'), // optional - default true

          messages: _this.get('messages'),

          values: _this.get('values'),

          // if true, will log helpful messages for setting up Card
          debug: _this.get('debug')
        });
    this.set('card', card);
  }
});
