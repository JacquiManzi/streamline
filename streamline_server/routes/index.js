const express = require('express');
const router = express.Router();
const { launchEncoder } = require('../controllers/EncoderController');

/**
 * GET - Render the home page
 */
router.get('/', (req, res, next) => {
    res.render('index', {});
});

router.get('/launch-encoder', (req, res, next) => {
    res.redirect('/');
});

/**
 * POST - Launch the encoder
 */
router.post('/launch-encoder', (req, res, next) => {
    const { origin, cdn } = req.body;
    launchEncoder(origin, cdn, (err, execResponse) => {
        console.log('error', err);
        console.log('res', execResponse);
        if (err) {
            return next(err);
        }
        return res.json({
            status: 'OK',
            statusCode: 200,
            message: 'Successfully launched the encoder.'});
    });
});

module.exports = router;
