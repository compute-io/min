/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	min = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix minimum', function tests() {

	var data,
		mat,
		i;

	data = new Int8Array( 9 );
	for ( i = 0; i < data.length; i++ ) {
		data[ i ] = i + 1;
	}
	mat = matrix( data, [3,3], 'int8' );


	it( 'should export a function', function test() {
		expect( min ).to.be.a( 'function' );
	});

	it( 'should compute the minimum along matrix columns', function test() {
		var out, m, expected;

		out = matrix( [3,1], 'int32' );

		m = min( out, mat );
		expected = '1;4;7';

		assert.strictEqual( m.toString(), expected );

		m = min( out, mat, 2 );
		expected = '1;4;7';

		assert.strictEqual( m.toString(), expected );
	});

	it( 'should compute the minimum along matrix rows', function test() {
		var out, m, expected;

		out = matrix( [1,3], 'int32' );

		m = min( out, mat, 1 );
		expected = '1,2,3';

		assert.strictEqual( m.toString(), expected );
	});

	it( 'should return null if provided a matrix having one or more zero dimensions', function test() {
		var out, mat;

		out = matrix( [0,0] );

		mat = matrix( [0,10] );
		assert.isNull( min( out, mat ) );

		mat = matrix( [10,0] );
		assert.isNull( min( out, mat ) );

		mat = matrix( [0,0] );
		assert.isNull( min( out, mat ) );
	});

});
