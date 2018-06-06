/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';

TrelloPowerUp.initialize({
  // Start adding handlers for your capabilities here!
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'Estimate Hours',
      callback: function(t) {
        return t.popup({
          title: "Estimation",
          url: 'estimate',
        });
      }
		}];
	},
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function(estimate) {
      return [{
        icon: estimate ? WHITE_ROCKET_ICON : GREY_ROCKET_ICON,
        text: estimate ? `${estimate} ${estimate > 1 ? 'hours' : 'hour'}` : 'N/A',
        color: estimate ? 'green' : null,
      }];
    });
  },
  'card-detail-badges': function(t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function(estimate) {
      return [{
      title: 'Estimate',
      color: estimate ? 'green' : 'red',
      text: estimate ? `${estimate} ${estimate > 1 ? 'hours' : 'hour'}` : 'No Estimate',
      callback: function(t) {
        return t.popup({
          title: 'Estimation',
          url: 'estimate'
        });
      }
    }]
    });
  }
});
