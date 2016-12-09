module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure a jscs task
		jscs: {
			src: [
				'**/*.js',
				'!node_modules/**'
			],
			options: {
				config: '.jscsrc'
			}
		},

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
				// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				src_folders: [ 'tests' ],
				output_folder: 'report'
				// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
			}
		}

	} );

	// Default tasks
	grunt.registerTask( 'default', [ 'jscs', 'jshint' ] );
	grunt.registerTask( 'selenium', 'nightwatch' );

};
