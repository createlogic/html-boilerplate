module.exports = function(grunt) {

	grunt.initConfig({
		
		csslint:{
			options:{
				"important":false,
				"regex-selectors":false,
				"unique-headings":false,
				"universal-selector":false,
				"unqualified-attributes":false,
				"box-sizing":false,
				"outline-none":false,
				"compatible-vendor-prefixes":false
			},
			src:['source/css/*.css']
		},
		jshint:{
			src:['source/js/*.js']
		},
		useminPrepare:{
			html: {
				src:['source/index.html','build/index.html']
			},
			options: {
				dest:'build/'
			}
		},
		cssmin:{
			combine:{
				files: {
				'build/css/all.css':['source/css/normalize_custom.css',
									 'source/css/main.css',
									 'source/css/media.css'
									]								  
				}
			}
		},
		uglify:{
			build:{
				files:{
					'build/js/plugins.js':['source/js/plugins.js'],
					'build/js/main.js':['source/js/main.js']
				}
			}
		},		
		usemin:{
			html:['build/index.html']
		},
		copy:{
			html:{
				src:'source/index.html',dest:'build/index.html'
			},
			js: {
				expand:true,
				cwd:'source/js/',
				src:'vendor/*.js',dest:'build/js/',
				flatten:true,
				filter:'isFile'
			}
		}

	});

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.registerTask('default',['csslint','jshint']);
	grunt.registerTask('build',['copy','useminPrepare','usemin','cssmin','uglify']);
	
};