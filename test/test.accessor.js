/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	min = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor minimum', function tests() {

	it( 'should export a function', function test() {
		expect( min ).to.be.a( 'function' );
	});

	it( 'should compute the minimum using an accessor', function test() {
		var data, expected;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		expected = 2;

		assert.strictEqual( min( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( min( [], getValue ) );

		function getValue( d ) {
			return d.x;
		}
	});

});
