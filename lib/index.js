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
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: min( arr )
*	Computes the minimum value of an array.
*
* @param {Array} arr - array of values
* @returns {Number} min value
*/
function min( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'min()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		val = arr[ 0 ];

	for ( var i = 1; i < len; i++ ) {
		if ( arr[ i ] < val ) {
			val = arr[ i ];
		}
	}
	return val;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
