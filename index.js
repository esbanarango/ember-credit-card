/* eslint-env node */
'use strict';
const resolvePkg = require('resolve-pkg');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,
  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/card.js');
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      new Funnel(resolvePkg('card/dist/'), {
        files: ['card.js']
      })
    );

    return new MergeTrees(trees);
  }
};
