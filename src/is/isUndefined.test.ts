const chai = require('chai')
const assert = chai.assert

import { isUndefined } from './isUndefined'

describe('isUndefined()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isUndefined, 'function', 'Is a function')
	})

	it('returns TRUE when passed valid numbers or strings', function () {
		assert.ok(isUndefined(undefined))
	})

	it('returns FALSE when passed valid numbers or strings', function () {
		assert.ok(!isUndefined('a value'))
		assert.ok(!isUndefined('undefined'))
		assert.ok(!isUndefined(0))
		assert.ok(!isUndefined([]))
		assert.ok(!isUndefined({}))
	})
})