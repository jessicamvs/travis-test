const hello = require('../routes/cccourse-routes.js');
const expect = require('chai').expect;

describe('hello module', function() {
  it('should return jessica', function(){
    expect(hello('jessica')).to.equal('jessica');
  });
});
