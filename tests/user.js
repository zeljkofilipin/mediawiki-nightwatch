module.exports = {

	'User should be able to create account': function ( client ) {
		client
		.url( client.launch_url + 'Special:CreateAccount' ) // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
		.assert.elementPresent( '#wpCreateaccount' )
		.end();
	}

};
