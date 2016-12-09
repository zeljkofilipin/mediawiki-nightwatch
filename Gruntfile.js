module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		nightwatch: {
      options: {
        // nightwatch settings
        src_folders: ['tests'],
        output_folder: 'report',
      }
    }

	} );

	// Default tasks
	grunt.registerTask( 'default', 'test' );
	grunt.registerTask( 'test', 'nightwatch' );

};
