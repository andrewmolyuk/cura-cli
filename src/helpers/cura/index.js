'use strict';

const os = require('os');
const cura = require(`./cura-${os.platform()}.js`);

exports.location = cura.location;
exports.version = cura.version;
exports.shortVersion = cura.shortVersion;
exports.resources = cura.resources;
