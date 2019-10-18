const chai = require('chai')
const assert = chai.assert

import { randomColour } from './randomColour'

describe('randomColour()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof randomColour, 'function', 'Is a function')
	})

	it('Builds a string from prefix+given chars+suffix or given length', function () {
		assert.ok(/^#[A-F0-9]{6}/.test(randomColour()))
	})

	it('Builds a string from prefix+given chars+suffix of given length', function () {
		assert.notEqual(randomColour(), randomColour())
		assert.notEqual(randomColour(), randomColour())
		assert.notEqual(randomColour(), randomColour())
		assert.notEqual(randomColour(), randomColour())
	})
})

