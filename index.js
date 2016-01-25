/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-phil',

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/Faker/build/build/faker.js');
  }
};
