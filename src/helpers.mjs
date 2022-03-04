/**
 * Return only unique values in array, example: unique = array.filter( distinct );
 *
 * @return {Array}
 */
 function distinct(array) {
    return [...new Set(array)]; 
}

/**
 * Return values grouped by key.
 *
 * @return {object}
 */
function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
};

export { distinct, groupBy }