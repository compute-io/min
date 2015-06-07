'use strict';

/**
* FUNCTION: min( arr, clbk )
*	Computes the minimum value of an array using an accessor.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} min value
*/
function min( arr, clbk ) {
	var len = arr.length,
		m, x,
		i;

	if ( !len ) {
		return null;
	}
	m = clbk( arr[ 0 ], 0 );
	for ( i = 1; i < len; i++ ) {
		x = clbk( arr[ i ], i );
		if ( x < m ) {
			m = x;
		}
	}
	return m;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
