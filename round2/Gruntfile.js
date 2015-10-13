module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'round2/src/js',
            src: '**/*.js',
            dest: 'round2/dist/grunt/js'
          }
        ]
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'round2/src/scss',
            src: '**/*.scss',
            dest: 'round2/dist/grunt/css'
          }
        ]
      }
    }
  });

  grunt.registerTask('build', ['babel', 'sass']);

  grunt.registerTask('default', ['build']);
};