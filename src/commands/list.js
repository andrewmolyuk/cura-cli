'use strict';

const fs = require('fs');
const path = require('path');
const cura = require('../helpers/cura');
const xml2js = require('xml2js');
const ini = require('ini');

const readFiles = (folder) => {
    const dir = path.join(cura.resources, folder);
    return fs.readdirSync(dir)
        .map(file => path.resolve(dir, file))
        .filter(file => fs.existsSync(file) && fs.lstatSync(file).isFile())
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
            const text = name.label
                ? `${name.brand[0]} ${name.material[0]} ${name.label[0]}`
                : (name.color[0] !== 'Generic')
                    ? `${name.brand[0]} ${name.material[0]} ${name.color[0]}`
                    : `${name.brand[0]} ${name.material[0]}`;
            names.push(text);
        }));

    const result = names.reduce((acc, curr) => { if (acc.includes(curr)) console.log(curr); return acc.includes(curr) ? acc : [...acc, curr] }, []);
    result.map(item => console.log(item));
}

const listQuality = () => {
    readFiles('quality')
        .map(content => ini.parse(content))
        .map(content => console.log(content.general.name));
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
            listQuality();
            break;
        default:
            console.log(`error: unknown resource '${resource}'. See 'cura-cli list --help'.`);
    }
}