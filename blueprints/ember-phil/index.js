/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('Faker', '~3.0.0');
  }
};
