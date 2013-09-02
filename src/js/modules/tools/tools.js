spdy.module('Tools', function(Mod, App, Backbone, Marionette, $, _) {

	Mod.Controller = {
		showTools: function() {
			var toolsView = new Mod.Views.MainView();
			App.toolsRegion.show(toolsView);
		}
	};
	
	App.on("tools:show", function() {
		API.showTools();
	});

	
	API = {
		showTools: function() {
			Mod.Controller.showTools();
		}
	};
	
});