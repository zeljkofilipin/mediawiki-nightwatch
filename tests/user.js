'use strict';
module.exports = {

	'User should be able to create account': function ( client ) {
		client
		.url( client.launch_url + 'Special:CreateAccount' )
		.assert.elementPresent( '#wpCreateaccount' )
		.end();
	},

	'User should be able to log in': function ( client ) {
		client
		.url( client.launch_url + 'Special:UserLogin' )
		.assert.elementPresent( '#wpLoginAttempt' )
		.end();
	},

	'User should be able to chage preferences': function ( client ) {
		client
		.url( client.launch_url + 'Special:UserLogin' )
		.setValue( '#wpName1', 'Admin' )
		.setValue( '#wpPassword1', 'vagrant' )
		.click( '#wpLoginAttempt' )
		.url( client.launch_url + 'Special:Preferences' )
		.assert.elementPresent( '#prefcontrol' )
		.end();
	}

};
