if (typeof exports === 'undefined') {
  exports = {};
}

/*http://benchmarkjs.com/docs#options*/

exports.name = 'React.DOM.div, no props';

exports.fn = function() {
  React.DOM.div(null, 'lol, perf testing ', this.count);
};
