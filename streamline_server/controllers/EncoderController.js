const { executeBashScript } = require('../utils/file_interactions');
const config = require('../config/config');

/**
 *
 * @param origin: String -
 * @param cdn: String -
 * @param cb - Function -
 */
exports.launchEncoder = (origin, cdn, cb) => {
    const cmd = `${config.launch_file_path} ${origin} ${cdn}`;
    executeBashScript(cmd, (err, res) => {
        return cb(err, res);
    });
};
