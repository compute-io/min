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
* @returns {Number|Null} min value
*/
function min( arr, clbk ) {
	var len,
		m, x,
		i;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'min()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'min()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	len = arr.length;
	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		m = clbk( arr[ 0 ], 0 );
		for ( i = 1; i < len; i++ ) {
			x = clbk( arr[ i ], i );
			if ( x < m ) {
				m = x;
			}
		}
	} else {
		m = arr[ 0 ];
		for ( i = 1; i < len; i++ ) {
			if ( arr[ i ] < m ) {
				m = arr[ i ];
			}
		}
	}
	return m;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
