var fs = require('fs');

// Load the config file and read the JSON into an object
try {
    console.log('Loading config...');
    var data = fs.readFileSync('./config.json');
    var conf = JSON.parse(data);
    console.log('Loaded!');
} catch (e) {
    console.error("Can't load the `../config.json` file, have you created it?\n");
    console.error(e);
    process.exit(1);
}

// Base REST endpoints
var endpoints = {
    "bitbucket": {
        "all": "https://api.bitbucket.org/2.0/repositories/" + conf.bitbucket.user
    },
    "gogs": {
        "migrate": conf.gogs.protocol + "://" + conf.gogs.url + "/api/v1/repos/migrate"
    }
};

// Allows for getting all repos from a team instead of just a user
if (conf.bitbucket.team !== null) {
    endpoints.bitbucket.all = "https://api.bitbucket.org/2.0/repositories/" + conf.bitbucket.team;
}

// Load the Migrator
var Migrator = require('./migrator'),
    m = new Migrator(endpoints, conf);

m.startMigration();
