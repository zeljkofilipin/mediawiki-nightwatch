module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure eslint task
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			]
		},

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

		// Configure JSONLint task
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		},

		// Configure Nightwatch task
		nightwatch: {
			options: {
				// nightwatch settings
				// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				src_folders: [ 'tests' ], // eslint-disable-line camelcase
				output_folder: 'report' // eslint-disable-line camelcase
				// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
			}
		}

	} );

	// Default tasks
	grunt.registerTask( 'default', [ 'eslint', 'jscs', 'jshint', 'jsonlint' ] );
	grunt.registerTask( 'selenium', 'nightwatch' );

};
