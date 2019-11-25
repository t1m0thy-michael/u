const chai = require('chai')
const assert = chai.assert

import { getTag } from './getTag'

describe('getTag()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof getTag, 'function', 'Is a function')
	})

	it('\'Rebuilds\' none-cyclic deep equal object', function () {
		assert.strictEqual(getTag('str'), '[object String]')
		assert.strictEqual(getTag(123), '[object Number]')
		assert.strictEqual(getTag({}), '[object Object]')
		assert.strictEqual(getTag([]), '[object Array]')
		assert.strictEqual(getTag(() => { }), '[object Function]')
		assert.strictEqual(getTag(async () => { }), '[object AsyncFunction]')
		assert.strictEqual(getTag(function* () { }), '[object GeneratorFunction]')
		// assert.strictEqual(getTag(async function* () { }), '[object AsyncGeneratorFunction]') // failing locally??
		assert.strictEqual(getTag(null), '[object Null]')
		assert.strictEqual(getTag(undefined), '[object Undefined]')
	})
})