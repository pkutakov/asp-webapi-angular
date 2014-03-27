module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      '../Scripts/angular.js',
      '../Scripts/angular-*.js',
      '../Scripts/toastr.js',
      '../app/**/*.js',
    ],

    exclude : [
      '../Scripts/-loader.js',
      '../Scripts/*.min.js',
      '../Scripts/angular-scenario.js',
      '../app/unitTests/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
