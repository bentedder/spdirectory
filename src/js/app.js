_.templateSettings = { interpolate : /\{\{([\s\S]+?)\}\}/g };

var spdy = new Marionette.Application();

spdy.addRegions({
	main: "#regionMain",
	tools: "#regionTools"
});

spdy.navigate = function(route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options);
}

spdy.getCurrentRoute = function() {
	return Backbone.history.fragment;
}

spdy.on('initialize:after', function() {
	if(Backbone.history) {
		Backbone.history.start();
		if(this.getCurrentRoute() === '') {
			spdy.trigger('person:showall');
		}
	}
});