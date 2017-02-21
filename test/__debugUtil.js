const rewire = require('rewire');

const expect = require('chai').expect;
const util = rewire('../lib/util');     // Must require instead of require
const sinon = require('sinon');

const origDebugVal = process.env.DEBUG;

describe('Debug Util', () => {
  beforeEach(() => {
    this.console = {
      log: sinon.spy()
    }


    util.__set__('console', this.console)
  });




  it('Test of logging of debug', () => {

    var _this = this;

    process.env.DEBUG = true;

    util.debug("String title", {hello: "world"}, true)
    expect(_this.console.log.callCount).to.equal(1)

    process.env.DEBUG = origDebugVal;
  });

  it('basic math', () => {
    expect(1+1).to.be.equal(2);
    expect(1*9).to.be.equal(9);
  });
});
