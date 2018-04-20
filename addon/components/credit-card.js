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

  width: 350,
  formatting: true,
  debug: false,

  init() {
    this._super(...arguments);
    let defaultFormSelectors = {
      numberInput: 'input[name="number"]',
      expiryInput: 'input[name="expiry"]',
      cvcInput: 'input[name="cvc"]',
      nameInput: 'input[name="name"]'
    };

    let defaultPlaceholders = {
      number: '•••• •••• •••• ••••',
      name: 'Full Name',
      expiry: '••/••',
      cvc: '•••'
    };

    let defaultMessages = {
      validDate: 'valid\nthru',
      monthYear: 'month/year'
    };

    this.setProperties({
      formSelectors: Object.assign(defaultFormSelectors, this.get('formSelectors')),
      placeholders: Object.assign(defaultPlaceholders, this.get('placeholders')),
      messages: Object.assign(defaultMessages, this.get('messages'))
    });
  },

  didInsertElement() {
    let _this = this;
    let card = new Card({
      form: _this.get('form'),
      container: _this.get('cardContainer'),
      formSelectors: _this.get('formSelectors'),
      width: _this.get('width'), // optional — default 350px
      formatting: _this.get('formatting'), // optional - default true
      messages: _this.get('messages'),
      placeholders: _this.get('placeholders'),
      // if true, will log helpful messages for setting up Card
      debug: _this.get('debug')
    });
    this.set('card',card);
  }
});
