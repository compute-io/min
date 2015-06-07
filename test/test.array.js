/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	min = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array minimum', function tests() {

	it( 'should export a function', function test() {
		expect( min ).to.be.a( 'function' );
	});

	it( 'should compute the minimum', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 2;

		assert.strictEqual( min( data ), expected );
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( min( [] ) );
	});

});
