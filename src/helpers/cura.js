const fs = require('fs');
const path = require('path');
const os = require('os');
const plist = require('plist');

const rootLocation = () => {
    return '/Applications/Ultimaker Cura.app/Contents/';
}

const getInfo = () => {
    return plist.parse(fs.readFileSync(path.join(rootLocation(), 'Info.plist'), 'utf8'));
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
    return getInfo().CFBundleVersion;
}

exports.shortVersion = () => {
    return getInfo().CFBundleShortVersionString;
}