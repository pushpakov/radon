const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongodb+srv://pushpak:ufcrVSuRGWuWv3rv@pushpak1111.eszed.mongodb.net/pushpak123?retryWrites=true&w=majority

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

