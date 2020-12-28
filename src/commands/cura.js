'use strict';

const cura = require('../helpers/cura');

module.exports = (command) => {
    switch (command) {
        case 'version':
            console.log(cura.version);
            break;
        case 'location':
            console.log(cura.location);
            break;
        default:
            console.log(`error: unknown command '${command}'. See 'cura-cli cura --help'.`);
    }
}