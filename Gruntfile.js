// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    clean: ['public/libs/angular', 'public/dest/**/*'],
    copy: {
      main: {
        files: [
          {expand: true, src: ['node_modules/angular/**'], dest: 'public/libs/angular/', flatten: true},
          {expand: true, src: ['node_modules/angular-route/**'], dest: 'public/libs/angular-route/', flatten: true},
        ],
      },
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'public/dest/js/application.js': ['public/application.js'],
          'public/dest/js/controllers.js': [
                'public/controllers/search.client.controller.js',
                'public/controllers/result.client.controller.js'
          ],
          'public/dest/js/services.js': [
                'public/services/authentication.client.service.js',
                'public/services/twitter.client.service.js',
          ],
          'public/dest/js/routes.js': ['public/config/application.client.routes.js'],
        }
      }
    },
    concat: {
      js: {
        src: 'public/js/*.js',
        dest: 'public/dest/js/main.js'
      },
      css: {
        src: 'public/css/*.css',
        dest: 'public/dest/css/styles.css'
      },
      angular: {
        src: [
          'public/dest/js/application.js',
          'public/dest/js/controllers.js',
          'public/dest/js/services.js',
          'public/dest/js/routes.js'
        ],
        dest: 'public/dest/js/osprey.js'
      }
    },
    uglify: {
      js: {
        options: {
          preserveComments: false,
          screwIE8: true
        },
        files: {
          'public/dest/main.min.js': [
            'public/dest/js/main.js',
            'public/dest/js/osprey.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: false
      },
      target: {
        files: {
          'public/dest/styles.min.css': ['public/dest/css/styles.css']
        }
      }
    }
  });

  // load nodemon
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['clean', 'copy', 'ngAnnotate', 'concat', 'uglify', 'cssmin']);
};
