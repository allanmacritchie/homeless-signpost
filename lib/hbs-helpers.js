const hbs = require('express-hbs');

hbs.registerHelper('json', function(obj) {
    return new hbs.SafeString(
        JSON.stringify(obj)
    );
});


hbs.registerHelper('dump', function(obj) {
    return new hbs.SafeString(
        "<script>console.log("+JSON.stringify(obj)+")</script>"
    );
});

