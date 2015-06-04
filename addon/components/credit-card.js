/* global Card */
import Ember from 'ember';
import layout from '../templates/components/credit-card';

/**
 * Caredit card component.
 *
 * Card docs: https://github.com/jessepollak/card/
 *
 * Usage:
 * {{credit-card}}
 */

export default Ember.Component.extend({
  layout: layout,
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

  setupCard: Ember.on('didInsertElement', function() {
  	var _this = this,
  			card = new Card({
  				form: _this.get('form'),
			    container: _this.get('cardContainer'),

			    // formSelectors: {
			    //     numberInput: 'input#number', // optional — default input[name="number"]
			    //     expiryInput: 'input#expiry', // optional — default input[name="expiry"]
			    //     cvcInput: 'input#cvc', // optional — default input[name="cvc"]
			    //     nameInput: 'input#name' // optional - defaults input[name="name"]
			    // },

			    width: _this.get('width'), // optional — default 350px
			    formatting: _this.get('formatting'), // optional - default true

			    // Strings for translation - optional
			    // messages: {
		     //    validDate: 'valid\ndate', // optional - default 'valid\nthru'
		     //    monthYear: 'mm/yyyy', // optional - default 'month/year'
			    // },

			    // Default values for rendered fields - optional
			    values: {
		        number: '•••• •••• •••• ••••',
		        name: 'Full Name',
		        expiry: '••/••',
		        cvc: '•••'
			    },

			    // if true, will log helpful messages for setting up Card
			    debug: _this.get('debug') // optional - default false
				});
		this.set('card',card);
  })

});
