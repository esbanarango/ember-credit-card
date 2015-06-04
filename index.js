/* jshint node: true */
'use strict';

module.exports = {
  name: 'credit-card',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/card/lib/card.js');
  }
};
