# Ember Credit card

[![Build Status](https://travis-ci.org/esbanarango/ember-credit-card.svg)](https://travis-ci.org/esbanarango/ember-credit-card) [![npm version](https://badge.fury.io/js/ember-credit-card.svg)](http://badge.fury.io/js/ember-credit-card) [![Ember Observer Score](http://emberobserver.com/badges/ember-credit-card.svg)](http://emberobserver.com/addons/ember-credit-card)

This is an Ember wrapper for the amazing [Card](https://github.com/jessepollak/card) project.

## Installation
`npm install --save-dev ember-credit-card` and `ember g ember-credit-card`

## Usage

![card](http://i.imgur.com/qG3TenO.gif)

````html
{{credit-card}}
````

##### Default
By simply adding `{{credit-card}}` you will get the basic form.

````html
<div class='card-wrapper'></div>
<br/>
<form id="ember-credit-card-form">
	{{input type="text" name="number" value=number placeholder='Credit Card Number'}}
	{{input type="text" name="name" value=name placeholder='Name on Credit Card'}}
	{{input type="text" name="expiry" value=expiry}}
	{{input type="text" name="cvc" value=cvc}}
</form>
````

##### Specifying settings
You can also specify all the settings that [Card](https://github.com/jessepollak/card/blob/master/lib/js/card.js#L1136) supports.

````html
{{	credit-card
	form='#my-form'
	values=cardValues
	width=150
	formatting=false
}}
````

##### With template
The default form and inputs used by default are so simple, so you can pass a template to use your own styled inputs.
> Remeber to either use the default name inputs or specify them on the `{{credit-card}}` arguments

````html
{{#credit-card form="#my-form"}}
	<form id='my-form' class='payment-info'>
		<div class="ui input">
      <label>Credit Card Number:</label>
			{{input type="text" value=creditCard.number name='number' placeholder='Credit Card Number'}}
    </div>

		<div class="ui input">
      <label>Name on Credit Card:</label>
			{{input type="text" value=creditCard.name name='name' placeholder='Name on Credit Card'}}
    </div>

		<div class="ui input">
      <label>Expiration:</label>
			{{input type="text" name='expiry' value=creditCard.expiration placeholder='MM/YY'}}
    </div>

		<div class="ui input">
      <label>CVC:</label>
			{{input type="text" name='cvc' value=creditCard.cvc placeholder='CVC'}}
    </div>

	</form>
{{/credit-card}}

````

## Donating
Support this project and [others by esbanarango][gratipay-esbanarango] via [gratipay][gratipay-esbanarango].

[![Support via Gratipay][gratipay]][gratipay-esbanarango]

[gratipay]: https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png
[gratipay-esbanarango]: https://gratipay.com/esbanarango/

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
