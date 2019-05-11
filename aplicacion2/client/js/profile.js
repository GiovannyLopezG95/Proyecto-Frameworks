Template.profile.rendered = function() {
	$("#profile-link").addClass('selected');
	$("#login-link").removeClass('selected');
	$("#logout-link").removeClass('selected');

}

Template.profile.events({
	"click .profile-btn": function(event){
		Meteor.profile-btn(function(err){
			if (err){
				Bert.alert(err.reason, "danger", "growl-top-right");
			}else{
				Reouter.go('/');
				Bert.alert("Desconectado", "success", "growl-top-right")
			}
		});
	},
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("Cerraste Sesión", "success", "growl-top-right");
			}
		});
	},
});

Template.profile.helpers({
	email: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},

	username: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	}, 
});


































