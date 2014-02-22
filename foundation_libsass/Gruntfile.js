module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configureable paths
    var planktinConfig = {
        assets: 'app/assets'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        planktin: planktinConfig,

        clean: {
            dist: [
                'public/fonts/*',
                'public/javascripts/*',
                'public/stylesheets/*'
            ]
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts',
                    dest: 'public/fonts',
                    src: [
                        'fontawesome-webfont.*'
                    ]
                },{
                    expand: true,
                    cwd: 'bower_components/foundation-icon-fonts',
                    dest: 'public/fonts',
                    src: [
                        'foundation-icons.eot',
                        'foundation-icons.svg',
                        'foundation-icons.ttf',
                        'foundation-icons.woff'
                    ]
                },{
                    expand: true,
                    cwd: 'bower_components/foundation/js/vendor',
                    dest: 'public/javascripts',
                    src: [
                        'custom.modernizr.js',
                        'jquery.js'
                    ]
                },{
                    expand: true,
                    cwd: 'bower_components/foundation/js',
                    dest: 'public/javascripts',
                    src: [
                        'foundation.min.js'
                    ]
                }]
            },
        },

        sass: {
            options: {
                includePaths: [
                    'bower_components/foundation/scss',
                    'bower_components/font-awesome/scss',
                    'bower_components/foundation-icon-fonts',
                    '<%= planktin.assets %>/scss'
                ]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/stylesheets/app.css': '<%= planktin.assets %>/scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },
            // js: {
            //     files: ['<%= planktin.assets %>/scripts/{,*/}*.js'],
            //     tasks: ['jshint'],
            //     options: {
            //         livereload: true
            //     }
            // },
            sass: {
                files: '<%= planktin.assets %>/scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    // Register tasks
    grunt.registerTask('build', [
        'clean:dist',
        'sass',
        'copy'
    ]);

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
}
