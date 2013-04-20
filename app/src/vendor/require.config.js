var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "src/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "src/vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "src/vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "src/vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "handlebars",
            "location": "src/vendor/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "src/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "src/vendor/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "src/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "src/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "src/vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "src/vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "src/vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "handlebars",
            "location": "src/vendor/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "src/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "src/vendor/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "src/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "src/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "src/vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "src/vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "src/vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "handlebars",
            "location": "src/vendor/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "src/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "src/vendor/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "src/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}