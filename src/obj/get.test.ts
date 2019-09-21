const chai = require('chai')
const assert = chai.assert

import { get } from './get'

describe('get()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof get, 'function', 'Is a function')
	})

	it('Returns correct nested value from object/array', function () {
		const obj = {
			a: 1,
			b: {
				c: 3,
				d: {
					e: 5,
					f: {
						g: 7,
						h: [ 8 , 9, 10, [12, [14]]],
						i: null,
						j: [],
						k: {},
					}
				}
			}
		}

		assert.strictEqual(get(null, []), undefined)
		assert.strictEqual(get(obj, []), undefined)
		assert.strictEqual(get(obj, ''), undefined)
		assert.strictEqual(get(obj, 'a'), obj.a)
		assert.strictEqual(get(obj, 'b.d.f.g'), obj.b.d.f.g)
		assert.strictEqual(get(obj, 'b.d.f.h.1'), obj.b.d.f.h[1])
		assert.strictEqual(get(obj, 'b.d.f.h.3.1.0'), 14)
		assert.strictEqual(get(obj, 'b.d.f.h.1'), obj.b.d.f.h[1])
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'h', '1']), obj.b.d.f.h[1])
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'i']), obj.b.d.f.i)
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'j']), obj.b.d.f.j)
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'k']), obj.b.d.f.k)
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'x', '1']), undefined)
		assert.strictEqual(get(obj, ['b', 'd', 'f', 'h', '99']), undefined)
	})
})