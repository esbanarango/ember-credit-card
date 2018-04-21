# Ember Credit card

![Download count all time](https://img.shields.io/npm/dt/ember-credit-card.svg) [![Build Status](https://travis-ci.org/esbanarango/ember-credit-card.svg)](https://travis-ci.org/esbanarango/ember-credit-card) [![npm version](https://badge.fury.io/js/ember-credit-card.svg)](http://badge.fury.io/js/ember-credit-card) [![Ember Observer Score](http://emberobserver.com/badges/ember-credit-card.svg)](http://emberobserver.com/addons/ember-credit-card) [![Greenkeeper badge](https://badges.greenkeeper.io/esbanarango/ember-credit-card.svg)](https://greenkeeper.io/)

This is an Ember wrapper for the amazing [Card](https://github.com/jessepollak/card) project.

## Installation
`ember install ember-credit-card`

## Usage

![card](http://i.imgur.com/qG3TenO.gif)

````handlebars
{{credit-card}}
````

##### Default
By simply adding `{{credit-card}}` a basic form will be generated:

````handlebars
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
You can also specify all the settings that [Card](https://github.com/jessepollak/card/blob/master/src/coffee/card.coffee#L63) supports.

````handlebars
{{  credit-card
  form='#my-form'
  placeholders=cardValues
  width=150
  formatting=false
}}
````

##### With template
The default form and inputs used by default are so simple, so you can pass a template to use your own styled inputs.
> Remeber to either use the default name inputs or specify them on the `{{credit-card}}` arguments

````handlebars
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

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`


## Running Tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/esbanarango/ember-credit-card/badge.svg?style=beer-square)](https://beerpay.io/esbanarango/ember-credit-card)  [![Beerpay](https://beerpay.io/esbanarango/ember-credit-card/make-wish.svg?style=flat-square)](https://beerpay.io/esbanarango/ember-credit-card?focus=wish)
