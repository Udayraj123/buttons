/*
 * button-component
 * https://github.com/upstage/button-component
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

 'use strict';

 module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    benchmarks: grunt.file.readJSON('data/benchmarks.json'),
    assemble: {
      options: {// global options
        // Values for repeat helper, see example #5.
        repeat: {
          expandright: 3,
          expandleft: 7,
          expandup: 8,
          expanddown: 50,
          slideleft: 25,
          slideright: 50,
          slideup: 25,
          slidedown: 200,
          zoomout: 100,
          zoomin: 25
        },
        // This is just present always, idk what it does..
        flatten: true,
        // Default Configuration for the prettify helper
        prettify: {
          indent: 2,
          condense: true,
          newlines: true
        },
        // The general folder to place your CSS, JS scripts and Images
        assets: '_demo/assets',
        // Using JS to modify your own page.
        helpers: 'templates/helpers/*.js',
        // [Global - ] headers, footers, common partials
        partials: 'templates/includes/*.hbs',
        // different arrangements of these partials
        layoutdir: 'templates/layouts',
        // default task-level layout
        layout: 'default.hbs',
      },
        /* 
      button000: {
        // INPUT files
        files: {'_demo/button-000/': ['button-000/index.html']},
        // files: { target : input files}, if no layout given, one page of each input file is assembled onto the target (file or dir)
        options: {layout: 'none'}, // override task-level layout
      },
      // Nope, it doesn't stitch - verify concat using this- 
      button001: {
        files: {'_demo/button-001/index.html': ['button-000/index.html','button-000/index2.html']},
        options: {layout: 'none'}, // override task-level layout
      },
      button010: {
        files: {'_demo/button-010/': ['button-010/index.hbs']}
      },
      button011: {
        files: {'_demo/button-011/': ['button-011/index.hbs']},
        options: {partials: 'button-011/includes/*.hbs'}
      },
      button020: {
        files: {'_demo/button-020/': ['button-020/index.hbs']},
        options: {
          // partials has only one file that picks up the data
          partials: 'button-020/buttonPartial.hbs',
          // modifiers using json! (can use any name than modifiers tho)
          data: 'button-020/*.json' //buttonFile.json
        // syntax of feeding data {{> buttonPartial buttonFile.expand-right }}
        }
      },
      button021: {//nop- seems same as 20
      {{> body }} seems a keyword as there's no body.hbs 

        THIS ONE CHOSE COMPONENT.hbs as layout and ADDED JSON DATA FROM WITHIN THE index.hbs
          ---
          layout: component.hbs
          demo:
            title: "Example 2: Topcoat Buttons + Effeckt.css"
            component: buttons
            modifier: effeckt-demo-buttons
            source:
              name: Hakim El Hattab
              url: http://lab.hakim.se/effeckt/
          ---
          files: {'_demo/button-021/': ['button-021/index.hbs']},
          options: {
            partials: 'button-021/button.hbs',
            data: 'button-021/*.json'
          }
        },
        
        button030: {
        // there's your for-loop! 
          // {{#repeat '10'}}
          files: {'_demo/button-030/': ['button-030/index.hbs']},
          options: {
            partials: 'button-030/button.hbs',
            data: 'button-030/*.json'
          }
        },
        button040: {
        // foreach loop, better! Nope, look next! - can access variables only through partials though
        //{{#each button}} ... {{> button }} {{/each}}
        files: {'_demo/button-040/': ['button-040/index.hbs']},
        options: {
          partials: 'button-040/*.html',
          data: 'button-040/*.json',//demo.json and button.json
          styles: 'button-040/styles.css'
        }
      },
      button041: {
        // usage of '.' when not using keys, and the titleize helper = {{titleize .}}
        files: {'_demo/button-041/': ['button-041/index.hbs']},
        options: {
          partials: 'button-041/button.hbs',
          data: 'button-041/*.json',
          styles: 'button-041/styles.css'
        }
      },
      button050: {
        files: {'_demo/button-050/': ['button-050/index.hbs']},
        options: {
          partials: 'button-050/button.hbs',
          data: 'button-050/*.json'
        }
      },
      button060: {
        files: {'_demo/button-060/': ['button-060/index.hbs']},
        options: {
          repeatOptions: {
            expandright: 3,
            expandleft: 70,
            expandup: 80,
            expanddown: 50,
            slideleft: 25,
            slideright: 50,
            slideup: 25,
            slidedown: 200,
            zoomout: 100,
            zoomin: 25
          },
          partials: 'button-060/button.hbs',
          data: 'button-060/*.json'
        }
      },
      */
      // Pages collection, array format.
      button070: {
        files: {'_demo/button-070/': ['button-070/index.hbs']},
        options: {
          layout: 'component.hbs',
          // assembles multiple pages, array contains filename,data,content
          pages: '<%= benchmarks.pages.one %>',
          partials: 'button-070/button.hbs',
          data: ['button-070/button.json'],
        }
      },
      // Pages collection, array format.
      button080: {
        files: {'_demo/button-080/': ['button-080/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.two %>',
          partials: 'button-080/button.hbs',
          data: 'button-080/*.json',
        }
      },
      // Pages collection, object format. Key is the filename
      button081: {
        files: {'_demo/button-081/': ['button-080/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.three %>',
          partials: 'button-080/button.hbs',
          data: 'button-080/*.json',
        }
      },
      button090: {
        files: {'_demo/button-090/': ['button-090/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.four %>',
          partials: 'button-090/button.hbs',
          data: 'button-090/*.json',
        }
      },
      buttoni18n: {
        files: {'_demo/button-i18n/': ['button-i18n/index-*.hbs']},
        options: {
          data: 'button-i18n/**/*.json'
        }
      },
    },
    // Before creating new files, remove files from previous build.
    clean: ['_demo/**/*.html']

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);

};
