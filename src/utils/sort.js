/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */

export function mySort(data, rules) {
  data.sort(function(a, b) {
    // return a.name.localeCompare(b.name)
    if (a.rules > b.rules) {
      return 1
    }
    if (a.rules < b.rules) {
      return -1
    }
    return 0
  })
}

