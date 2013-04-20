module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
      all:
        files: ['app/**']
        tasks: ['clean', 'copy', 'stylus']
        options:
          nospawn: yes

    stylus:
      compile:
        options:{}
        files:
          'temp/app/assets/css/app.css': 'app/styl/**/*'

    clean: 
      dev: ['temp']

    copy:
      dev:
        files: [
          {expand: yes, src: 'app/**', dest: 'temp/'}
        ]

    grunt.registerTask 'default', ['watch']

    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-clean'