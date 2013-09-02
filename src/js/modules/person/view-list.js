spdy.module('Person.Views.List', function(Mod, App, Backbone, Marionette, $, _) {

	Mod.SingleView = Marionette.ItemView.extend({
		template: "#person-single",
		tagName: 'li'
	});
	
	Mod.CollView = Marionette.CollectionView.extend({
		itemView: Mod.SingleView,
		tagName: 'ul'
	});
});