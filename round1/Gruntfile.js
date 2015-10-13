module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    uglify: {
      build: {
        src: 'round1/src/**/*.js',
        dest: 'round1/dist/grunt/min.js'
      }
    }
  });

  grunt.registerTask('build', 'uglify');

  grunt.registerTask('default', ['build']);
};