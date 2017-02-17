// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    clean: ['public/libs/angular'],
    copy: {
      main: {
        files: [
          {expand: true, src: ['node_modules/angular/**'], dest: 'public/libs/angular/', flatten: true},
          {expand: true, src: ['node_modules/angular-route/**'], dest: 'public/libs/angular-route/', flatten: true},
        ],
      },
    },
  });

  // load nodemon
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['clean', 'copy']);
};
