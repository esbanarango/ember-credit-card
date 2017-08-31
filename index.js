/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-credit-card',
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.import('vendor/card.js');
  },

  treeForVendor(vendorTree) {
    let momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'card', 'dist'), {
      files: ['card.js'],
    });

    return new MergeTrees([vendorTree, momentTree]);
  },
};
