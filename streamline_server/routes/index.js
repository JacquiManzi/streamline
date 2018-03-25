const express = require('express');
const router = express.Router();

const exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

/**
 * GET - Render the home page
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Streamline' });
});

/**
 * POST - Launch the encoder
 */
router.post('/launch-encoder', function(req, res, next) {
    const { origin, cdn } = req.body;
    const cmd = `../launch.sh ${origin} ${cdn}`;
    exec(cmd, function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log(error);
        if (!error) {
            res.render('index', {title: 'worked'});
        } else {
            res.render('index', {title: 'didnt work'});
        }
    });

});

module.exports = router;
