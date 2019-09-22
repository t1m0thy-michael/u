const chai = require('chai')
const assert = chai.assert

import { times } from './times'

describe('times()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof times, 'function', 'Is a function')
	})

	it('Returns correct arrays when passed scalar', function () {
		assert.deepEqual(times(1, 3), [1, 1, 1])
		assert.deepEqual(times('str', 3), ['str', 'str', 'str'])
	})

	it('Returns correct arrays when passed function', function () {
		assert.deepEqual(times((idx:number) => idx * 2, 3), [0, 2, 4])
	})

	it('Returns array of specified length', function () {
		assert.deepEqual(times(1, 30).length, 30)
		assert.deepEqual(times(1, 13).length, 13)
	})
})