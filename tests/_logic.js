const chai = require('chai')
const assert = chai.assert

import u_logic from '../src/_logic'

describe('_logic', function () {

	describe('and()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_logic.and, 'function', 'Is a function')
		})

		it('returns TRUE', function () {
			assert.strictEqual(u_logic.and(true, true, true), true, 'Bools')
			assert.strictEqual(u_logic.and(1, 10), true, 'Numbers')
			assert.strictEqual(u_logic.and('truthy', 1), true, 'Mixed truthy')
			assert.strictEqual(u_logic.and(true, () => true), true, 'Including a function')
		})

		it('returns FALSE', function () {
			assert.strictEqual(u_logic.and(false, false), false, 'all false')
			assert.strictEqual(u_logic.and(false, true), false, 'mixed bools')
			assert.strictEqual(u_logic.and(1, 0), false, 'mixed numbers')
			assert.strictEqual(u_logic.and(true, 0, () => false), false, 'Including a function')
		})
	})

	describe('or()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_logic.or, 'function', 'Is a function')
		})

		it('returns TRUE', function () {
			assert.strictEqual(u_logic.or(true, true, true), true, 'All true')
			assert.strictEqual(u_logic.or(1, 10), true, 'all truthy numbers')
			assert.strictEqual(u_logic.or('truthy', 1), true, 'all mixed truthy')
			assert.strictEqual(u_logic.or(false, true), true, 'truthy/falsy mixed')
			assert.strictEqual(u_logic.or('', 0, 'str', 0), true, 'truthy/falsy mixed - many args')
			assert.strictEqual(u_logic.or(false, () => true), true, 'Including a function')
		})

		it('returns FALSE', function () {
			assert.strictEqual(u_logic.or(false, false), false, 'all false')
			assert.strictEqual(u_logic.or(0, () => ''), false, 'Including a function')
		})
	})

	describe('xor()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_logic.xor, 'function', 'Is a function')
		})

		it('returns TRUE', function () {
			assert.strictEqual(u_logic.xor(false, false, true), true, 'bools')
			assert.strictEqual(u_logic.xor(0, 0, 1), true, 'numbers')
			assert.strictEqual(u_logic.xor('truthy', 0, ''), true, 'mixed')
			assert.strictEqual(u_logic.xor(false, false, () => true), true, 'Including a function')
		})

		it('returns FALSE', function () {
			assert.strictEqual(u_logic.xor(false, false, true, true), false, '2 of each bool')
		})
	})

})