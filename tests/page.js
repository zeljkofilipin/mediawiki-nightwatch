'use strict';
module.exports = {

	'Page should be created': function ( client ) {
		var content = Math.random().toString(),
			nonExistingPage = client.page.nonExistingPage();
		nonExistingPage.create( content );
		nonExistingPage.assert.containsText( '@displayedContent', content );
		client.end();
	},

	'Page should be edited': function ( client ) {
		client
		.url( client.launch_url + 'Main_Page' )
		.assert.elementPresent( 'li#ca-edit a' )
		.end();
	},

	'Page should have history': function ( client ) {
		client
		.url( client.launch_url + 'Main_Page' )
		.assert.elementPresent( 'li#ca-history a' )
		.end();
	}

};
