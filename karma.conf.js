// Karma configuration
// Generated on Fri Sep 11 2015 13:09:56 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine'], // I don't know why, but this order is important, keep this way


    // list of files / patterns to load in the browser
    files: [
        'tests/*_spec.js',
        'tests/**/*_spec.js'
        // each file acts as en
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // add webpack as preprocessor
        'tests/*_spec.js': ['webpack'],
        'tests/**/*_spec.js': ['webpack']
    },
    
    webpack: {
        resolve: {
            extensions: ['', '.js'],
            root: [__dirname]
        },
        module: {
            loaders: [
                { test: /\.html$/, loader: 'handlebars-loader'},
                { test: /jquery\/src\/selector\.js$/, loader: 'amd-define-factory-patcher-loader' }
            ]
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    plugins: [
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-phantomjs-launcher'),
        require('karma-jasmine-jquery')

    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
