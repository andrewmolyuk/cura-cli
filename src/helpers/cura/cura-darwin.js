'use strict';

const fs = require('fs');
const path = require('path');
const plist = require('plist');

const rootLocation = () => {
    return '/Applications/Ultimaker Cura.app/Contents/';
}

const getInfo = () => {
    return plist.parse(fs.readFileSync(path.join(rootLocation(), 'Info.plist'), 'utf8'));
}

exports.location = path.join(rootLocation(), 'MacOS', 'cura');

exports.version = getInfo().CFBundleVersion;

exports.shortVersion = getInfo().CFBundleShortVersionString;

exports.resources = path.join(rootLocation(), 'Resources', 'resources');