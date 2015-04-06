/**
*
*	COMPUTE: min
*
*
*	DESCRIPTION:
*		- Computes the minimum value of an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

// MIN //

/**
* FUNCTION: min( arr[, accessor] )
*	Computes the minimum value of an array.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|null} min value
*/
function min( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'min()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'min()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	var len = arr.length,
		val,
		x,
		i;

	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		val = clbk( arr[ 0 ] );
		for ( i = 1; i < len; i++ ) {
			x = clbk( arr[ i ] );
			if ( x < val ) {
				val = x;
			}
		}
	} else {
		val = arr[ 0 ];
		for ( i = 1; i < len; i++ ) {
			if ( arr[ i ] < val ) {
				val = arr[ i ];
			}
		}
	}
	return val;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
