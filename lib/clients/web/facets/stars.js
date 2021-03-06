/**
 * API Facet to make calls to methods in the stars namespace.
 *
 * This provides functions to call:
 *   - add: {@link https://api.slack.com/methods/stars.add|stars.add}
 *   - list: {@link https://api.slack.com/methods/stars.list|stars.list}
 *   - remove: {@link https://api.slack.com/methods/stars.remove|stars.remove}
 *
 */

/**
 * @constructor
 */
function StarsFacet(makeAPICall) {
  this.name = 'stars';
  this.makeAPICall = makeAPICall;
}


/**
 * Adds a star to an item.
 * @see {@link https://api.slack.com/methods/stars.add|stars.add}
 *
 * @param {Object=} opts
 * @param {?} opts.file - File to add star to.
 * @param {?} opts.file_comment - File comment to add star to.
 * @param {?} opts.channel - Channel to add star to, or channel where the message to add star to
 *   was posted (used with `timestamp`).
 * @param {?} opts.timestamp - Timestamp of the message to add star to.
 * @param {function=} optCb Optional callback, if not using promises.
 */
StarsFacet.prototype.add = function add(opts, optCb) {
  return this.makeAPICall('stars.add', null, opts, optCb);
};


/**
 * Lists stars for a user.
 * @see {@link https://api.slack.com/methods/stars.list|stars.list}
 *
 * @param {Object=} opts


 * @param {function=} optCb Optional callback, if not using promises.
 */
StarsFacet.prototype.list = function list(opts, optCb) {
  return this.makeAPICall('stars.list', null, opts, optCb);
};


/**
 * Removes a star from an item.
 * @see {@link https://api.slack.com/methods/stars.remove|stars.remove}
 *
 * @param {Object=} opts
 * @param {?} opts.file - File to remove star from.
 * @param {?} opts.file_comment - File comment to remove star from.
 * @param {?} opts.channel - Channel to remove star from, or channel where the message to remove
 *   star from was posted (used with `timestamp`).
 * @param {?} opts.timestamp - Timestamp of the message to remove star from.
 * @param {function=} optCb Optional callback, if not using promises.
 */
StarsFacet.prototype.remove = function remove(opts, optCb) {
  return this.makeAPICall('stars.remove', null, opts, optCb);
};


module.exports = StarsFacet;
