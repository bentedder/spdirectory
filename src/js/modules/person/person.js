spdy.module('Person', function(Mod, App, Backbone, Marionette, $, _) {	Mod.Controller = {		showAllPeople: function() {			var peopleD = App.request("person:getAll");			$.when(peopleD).done(function(peopleCollection){				var peopleList = new Mod.Views.List.CollView({					collection: peopleCollection				});				App.main.show(peopleList);			});		}	};		App.on("person:showall", function() {		API.showAllPeople();	});		App.reqres.setHandler("person:getAll", function() {		return API.getAllPeople();	});		API = {		getAllPeople: function() {			var defer = $.Deferred();			var people = new Mod.Model.Collection(peopleData);			defer.resolve(people);			return defer.promise();		},		showAllPeople: function() {			Mod.Controller.showAllPeople();		}	};});