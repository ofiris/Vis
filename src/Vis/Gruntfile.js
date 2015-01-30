/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        uglify: {
            my_target: {
                files: { 'wwwroot/app.js': ['wwwroot/scripts/app.js', 'wwwroot/scripts/**/*.js'] }
            }
        },

        watch: {
            scripts: {
                files: ['wwwroot/scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'watch']);
};