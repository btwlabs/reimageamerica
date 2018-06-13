module.exports = function (grunt) {
	
	grunt.initConfig({
		
		watch: {
			options: { 
				livereload: true 
			},
			
			sass: {
			    files: ['sass/{,**/}*.{scss,sass}'],
			    tasks: ['compass:dev'],
			    options: {
			      livereload: true
			    }
			}, //sass
			
			js: {
				files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
				tasks: ['jshint', 'uglify:dev']
			}
			
			jshint: {
				options: {
					jshintrc: '.jshintrc'
				},
				all: ['js/{,**/}*.js', '!js/{,**/}*.min.js']
			},			
		} //watch
				
		uglify: {
			dev: {
				options: {
				  mangle: false,
				  compress: false,
				  beautify: true
				},
				files: [{
				  expand: true,
				  flatten: true,
				  cwd: 'js',
				  dest: 'js',
				  src: ['**/*.js', '!**/*.min.js'],
				]}
			}]
		},
		
				
		compass: {
			options: {
		    	config: 'config.rb',
				bundleExec: true,
				force: true
		  	},
		  	dev: {
		    	options: {
					environment: 'development'
		    	}
		  	},
		  	dist: {
		    	options: {
					environment: 'production'
		    	}
		  	}
		},
				
	}) // initConfig
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', 'watch');
	
}; // exports


