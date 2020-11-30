'use strict';

const fs = require('fs');
const path = require('path');
const cura = require('../helpers/cura');

const listPrinters = () => {
    const dir = path.join(cura.resources, 'definitions');
    fs.readdirSync(dir)
        .map(file => path.resolve(dir, file))
        .filter(file => fs.existsSync(file))
        .map(file => fs.readFileSync(file, 'utf-8'))
        .map(content => JSON.parse(content))
        // .filter(content => content && (content.iherits || (content.metadata && content.metadata.type === 'machine')))
        .filter(content => content !== null && (content.iherits !== null || (content.metadata && content.metadata.type === 'machine')))
        .map(content => console.log(content.name));
}

module.exports = (resource) => {
    switch (resource) {
        case 'printers':
            listPrinters();
            break;
        case 'extruders':
            console.log('The feature is not implemented yet');
            break;
        case 'materials':
            console.log('The feature is not implemented yet');
            break;
        case 'quality':
            console.log('The feature is not implemented yet');
            break;
        default:
            console.log(`error: unknown resource '${resource}'. See 'cura-cli list --help'.`);
    }
}