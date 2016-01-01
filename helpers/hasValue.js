/**
 * Handlebars block helper that renders the content inside of it if
 * the current variable is defined (has a value). Note: even falsey values evaluate to true.
 * @param {mixed} a - Variable to check. Can be undefined or null.
 * @param {object} options - Handlebars object.
 * @example
 * {{#hasvalue foo}}The variable 'foo' has a value.{{/hasvalue}}
 * @returns If the variable has a value, content inside of the helper.
* If not, the content inside the `{{else}}` block.
 */
module.exports = function(a, options) {
  if (typeof a !== 'undefined') return options.fn(this);
  else return options.inverse(this);
}
