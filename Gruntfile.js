module.exports = function(grunt){
  grunt.initConfig({
    bower_concat: {
      all: {
        dest:{
          'js': 'App/minified.js',
          'css': 'App/minified.css'
        }
      }
    }
  });
 // grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default', 'bower_concat');
};
