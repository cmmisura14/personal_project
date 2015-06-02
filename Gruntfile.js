module.exports = function(grunt){
    //Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!<%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            },
            build2: {
                src: 'client/scripts/controllers/registration.js',
                dest: 'public/javascripts/controllers/registration.min.js'
            },
            build3: {
                src: 'client/scripts/controllers/flies.js',
                dest: 'public/javascripts/controllers/flies.min.js'
            },
            build4: {
                src: 'client/scripts/controllers/login.js',
                dest: 'public/javascripts/controllers/login.min.js'
            },
            build5: {
                src: 'client/scripts/controllers/displayflies.js',
                dest: 'public/javascripts/controllers/displayflies.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/css/bootstrap-theme.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": "public/vendors/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: "stylesheet.css",
                dest: "public/stylesheets/"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};