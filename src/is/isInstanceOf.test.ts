const chai = require('chai')
const assert = chai.assert

import { isInstanceOf } from './isInstanceOf'

describe('isInstanceOf()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isInstanceOf, 'function', 'Is a function')
	})

	const THING = function () {}

	it('Returns TRUE when VALUE instanceof THING', function () {
		// @ts-ignore 
		const VALUE = new THING()
		// @ts-ignore 
		assert.strictEqual(isInstanceOf(THING, VALUE), true, 'VALUE is instance of THING()')
	})

	it('Returns FALSE when !(VALUE instanceof THING)', function () {
		const VALUE = 'somthingelse'
		// @ts-ignore 
		assert.strictEqual(isInstanceOf(THING, VALUE), false, 'VALUE is NOT instance of THING()')
	})

	it('Thing as string (1)', function () {
		assert.strictEqual(isInstanceOf('Object', {}), true, 'VALUE is instance of THING()')
	})

	it('Thing as string (2)', function () {
		assert.strictEqual(isInstanceOf('Object', 'My Value'), false, 'VALUE is NOT instance of THING()')
	})

	it('returns false on made up element', function () {
		const VALUE = 'a thing'
		assert.strictEqual(isInstanceOf('made up thing', VALUE), false)
	})
})