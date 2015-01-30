/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // configure plugins
    grunt.initConfig({
        uglify: {
            my_target: {
                files: { 'wwwroot/app.js': ['wwwroot/scripts/app.js', 'wwwroot/scripts/**/*.js'] }
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'wwwroot/main.css': 'assets/site.scss',       // 'destination': 'source'
                }
            }
        },

        watch: {
            scripts: {
                files: ['wwwroot/scripts/**/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/**/*.scss'],
                tasks: ['sass']
            }
        },
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'sass', 'watch' ]);
};