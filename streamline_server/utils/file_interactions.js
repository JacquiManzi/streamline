const { exec } = require('child_process');

/**
 *
 * @param cmd
 * @param cb
 */
exports.executeBashScript = (cmd, cb) => {
    exec(cmd, (error, stdout, stderr) => {
        return cb(error, stdout);
    });
};
