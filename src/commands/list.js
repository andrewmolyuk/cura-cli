'use strict';

const listDefinitions = () => {
    console.log('The feature is not implemented yet');
}

module.exports = (resource) => {
    switch (resource) {
        case 'definitions':
            listDefinitions();
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