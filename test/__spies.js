const rewire = require('rewire');

const expect = require('chai').expect;
const util = rewire('../lib/util');     // Must require instead of require
const sinon = require('sinon');


describe('Debug Tool Testing', () => {
  beforeEach(() => {  // before each test we are disabling / redirecting console.log
    this.console = {
      log: sinon.spy()
    }

    util.__set__('console', this.console);
  });

  it('Util.debug actually calls the console.log', () => {

    // Save scope of this.
    var _this = this;

    process.env.DEBUG = true; // assume dev set to true
    util.debug('Basic Test', {title: 'none'}, false);

    expect(_this.console.log.callCount).to.equal(1)
  });
});
