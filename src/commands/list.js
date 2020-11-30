'use strict';

const fs = require('fs');
const path = require('path');
const cura = require('../helpers/cura');
const xml2js = require('xml2js');

const readFiles = (folder) => {
    const dir = path.join(cura.resources, folder);
    return fs.readdirSync(dir)
        .map(file => path.resolve(dir, file))
        .filter(file => fs.existsSync(file))
        .map(file => fs.readFileSync(file, 'utf-8'));
}

const listPrinters = () => {
    readFiles('definitions')
        .map(content => JSON.parse(content))
        .filter(content => content !== null && (content.iherits !== null || (content.metadata && content.metadata.type === 'machine')))
        .map(content => console.log(content.name));
}

const listMaterials = () => {
    const names = [];
    readFiles('materials')
        .map(content => xml2js.parseString(content, { trim: true }, (err, content) => {
            const name = content.fdmmaterial.metadata[0].name[0];
            if (name.label) {
                names.push(`${name.brand[0]} ${name.material[0]} ${name.label[0]}`);
            } else if (name.color[0] === 'Generic') {
                names.push(`${name.brand[0]} ${name.material[0]}`);
            } else {
                names.push(`${name.brand[0]} ${name.material[0]} ${name.color[0]}`);
            }
        }));

    const result = names.reduce((acc, curr) => { if (acc.includes(curr)) console.log(curr); return acc.includes(curr) ? acc : [...acc, curr] }, []);
    result.map(item => console.log(item));
}

module.exports = (resource) => {
    switch (resource) {
        case 'printers':
            listPrinters();
            break;
        case 'materials':
            listMaterials();
            break;
        case 'quality':
            console.log('The feature is not implemented yet');
            break;
        default:
            console.log(`error: unknown resource '${resource}'. See 'cura-cli list --help'.`);
    }
}