module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure JSHint task
		jshint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configure Nightwatch task
		nightwatch: {
      options: {
        // nightwatch settings
        src_folders: ['tests'],
        output_folder: 'report',
      }
    }

	} );

	// Default tasks
	grunt.registerTask( 'default', [ 'jshint' ] );
	grunt.registerTask( 'selenium', 'nightwatch' );

};
