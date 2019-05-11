if (Meteor.isServer) {
	Meteor.methods({
		signup: function(username, email, password, password2) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var email = Meteor.email().email;
				var password = Meteor.password().password;
			}
		},
	});
	
}














