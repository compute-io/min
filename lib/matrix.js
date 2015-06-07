'use strict';

/**
* FUNCTION: min( out, mat[, dim] )
*	Computes the minimum value along a matrix dimension
*
* @param {Matrix} out - output matrix
* @param {Matrix} mat - input matrix
* @param {Number} [dim=2] - matrix dimension along which to compute the maximum. If `dim=1`, compute along matrix rows. If `dim=2`, compute along matrix columns.
* @returns {Matrix|Null} min value or null
*/
function min( out, mat, dim ) {
	var m,
		M, N,
		s0, s1,
		i, j, k;

	if ( dim === 1 ) {
		// Compute along the rows...
		M = mat.shape[ 1 ];
		N = mat.shape[ 0 ];
		s0 = mat.strides[ 1 ];
		s1 = mat.strides[ 0 ];
	} else {
		// Compute along the columns...
		M = mat.shape[ 0 ];
		N = mat.shape[ 1 ];
		s0 = mat.strides[ 0 ];
		s1 = mat.strides[ 1 ];
	}
	if ( M === 0 || N === 0 ) {
		return null;
	}

	for ( i = 0; i < M; i++ ) {
		k = i * s0;
		m = mat.data[ k ];
		for ( j = 1; j < N; j++ ) {
			if ( mat.data[ k + j*s1 ] < m ) {
				m = mat.data[ k + j*s1 ];
			}
		}
		out.data[ i ] = m;
	}
	return out;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;