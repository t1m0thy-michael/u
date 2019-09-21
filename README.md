![Travis (.com)](https://img.shields.io/travis/com/t1m0thy-michael/util?style=for-the-badge) 
![Coveralls github](https://img.shields.io/coveralls/github/t1m0thy-michael/util?style=for-the-badge) 
![GitHub last commit](https://img.shields.io/github/last-commit/t1m0thy-michael/util?style=for-the-badge) 
![npm](https://img.shields.io/npm/v/tim_util?style=for-the-badge&color=informational) 
![GitHub](https://img.shields.io/github/license/t1m0thy-michael/util?style=for-the-badge&color=informational) 
![npm bundle size](https://img.shields.io/bundlephobia/min/tim_util?style=for-the-badge&color=informational)

# Util

Util is a lightweight libary of simple, commonly useful utility function. Written in typescript 

## Installation

```
npm i tim_util
```

## Usage
Functions are organised so that you can pick and choose as much...
```js
import u from 'tim_util' // everything
```
or as little as you need...
```js
import { num } from 'tim_util' // number/math functions only
```
keeping your project small...
```js
import { makeSureItsAnArray } from 'tim_util' // just the function you need
```

Functions are all available at root level when importing all of tim_util.

## arr
* clean 
* every
* next
* previous
* unique
## async
* delay
* filter
* forEach
* map
## fn
* callOrReturn
* curry
* maybeCall
## is
* isArray
* isArrayLike
* isBetween
* isBool
* isFunction
* isInstanceOf
* isInteger
* isIterable
* isLength
* isMap
* isNull
* isNumber
* isNumberish
* isObject
* isRealNaN
* isScalar
* isString
* isType
* isUndefined
## logic
* and
* or
* xor
## num
* clamp
* randomInt
* randomNumber
* scale
## obj
* clone
* decycle
* equal
* get
* set
* sizeOf
* undecycle
## str
* insert
* makeID
* randomColour
* remove 
## util
* makeSureItsAnArray
* times
