/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-credit-card',
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.import('vendor/card.js');
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      new Funnel(path.join(this.project.root, 'node_modules', 'card', 'dist'), {
        files: ['card.js'],
      })
    );

    return new MergeTrees(trees);
  },
};
