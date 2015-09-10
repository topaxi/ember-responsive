import Ember from 'ember';
export function initialize(instance) {
  var media = instance._lookupFactory('responsive:media');
  var breakpoints = instance._lookupFactory('breakpoints:main');
  if (breakpoints) {
    for (var name in breakpoints) {
      if (breakpoints.hasOwnProperty(name)) {
        media.match(name, breakpoints[name]);
      }
    }
  } else {
    Ember.warn('Breakpoints not found they should be defined in app/breakpoints.js');
  }
}

export default {
  name: 'responsive',
  initialize: initialize
};
