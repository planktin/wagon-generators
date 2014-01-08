module.exports = function(grunt) {

  // configureable paths
  var planktinConfig = {
    dist: '../../public'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    planktin: planktinConfig,

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss', 
          'bower_components/font-awesome/scss',
          'bower_components/foundation-icons/foundation_icons_acessibility/sass',
          'bower_components/foundation-icons/foundation_icons_general/sass',
          'bower_components/foundation-icons/foundation_icons_general_enclosed/sass',
          'bower_components/foundation_icons/foundation_icons_social/sass'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= planktin.dist %>/stylesheets/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}