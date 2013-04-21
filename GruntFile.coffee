module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
      all:
        files: ['app/**']
        tasks: ['dev']
        options:
          nospawn: yes

    # stylus:
    #   compile:
    #     options:{}
    #     files:
    #       'dev/css/app.css': 'app/styl/**/*'

    clean: 
      dev: ['dev']

    copy:
      dev:
        files: [
          {expand: yes, cwd: 'app/assets/', src: '**', dest: 'dev/'}
          {expand: yes, cwd: 'app/src/', src: '**', dest: 'dev/src/'}
          {expand: yes, cwd: 'app/specs/', src: '**', dest: 'dev/specs/'}
        ]


    compass:
      dev:
        options:
          sassDir:'app/scss'
          cssDir:'dev/css'
          imagesDir: 'img'

    connect:
      dev:
        options:
          port: 8088
          base: 'dev/'

    # livereload:
    #   options:
    #     port: 35729 


    grunt.registerTask 'default', ['dev', 'connect', 'watch']
    grunt.registerTask 'dev', [ 'copy', 'compass:dev']
    grunt.registerTask 'preview', ['connect', 'watch']

    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'jwalsh-grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-compass'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-contrib-livereload' # todo: implement using grunt-regarde