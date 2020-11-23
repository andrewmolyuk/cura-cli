const fs = require('fs');
const path = require('path');
const os = require('os');
const plist = require('plist');

const rootLocation = () => {
    return '/Applications/Ultimaker Cura.app/Contents/';
}

exports.location = () => {
    switch (os.platform()) {
        case 'darwin':
            return '/Applications/Ultimaker Cura.app/Contents/MacOS/cura';
        default:
            throw new Error('Unsupported OS');
    }
}

exports.version = () => {
    var info = plist.parse(fs.readFileSync(path.join(rootLocation(), 'Info.plist'), 'utf8'));
    return info.CFBundleVersion;
}

exports.shortVersion = () => {
    var info = plist.parse(fs.readFileSync(path.join(rootLocation(), 'Info.plist'), 'utf8'));
    return info.CFBundleShortVersionString;
}