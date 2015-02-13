/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

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

        concat: {
            dist: {
                options: {
                    separator: ';',
                },
                files: {
                    'wwwroot/scripts/jquery.js': ['bower_components/jquery/dist/jquery.js'],
                    'wwwroot/scripts/angular.js': ['bower_components/angular/angular.js'],
                    'wwwroot/scripts/angular-material.js': ['bower_components/angular-material/angular-material.js'],
                    'wwwroot/css/angular-material.css': ['bower_components/angular-material/angular-material.css'],
                'wwwroot/scripts/flot-bundle.js': [
                    'bower_components/flot/jquery.flot.js',
                    'bower_components/flot/jquery.colorhelpers.js',
                    'bower_components/flot/jquery.flot.canvas.js',
                    'bower_components/flot/jquery.flot.categories.js',
                    'bower_components/flot/jquery.flot.crosshair.js',
                    'bower_components/flot/jquery.flot.errorbars.js',
                    'bower_components/flot/jquery.flot.fillbetween.js',
                    'bower_components/flot/jquery.flot.image.js',
                    'bower_components/flot/jquery.flot.navigate.js',
                    'bower_components/flot/jquery.flot.pie.js',
                    'bower_components/flot/jquery.flot.resize.js',
                    'bower_components/flot/jquery.flot.selection.js',
                    'bower_components/flot/jquery.flot.stack.js',
                    'bower_components/flot/jquery.flot.symbol.js',
                    'bower_components/flot/jquery.flot.time.js',
                ]
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
    grunt.registerTask('default', ['uglify', 'sass', 'concat', 'watch' ]);
};