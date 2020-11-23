'use strict';

const { program } = require('commander');
const packageJson = require('../package.json');
const list = require('./commands/list');
const cura = require('./commands/cura');

program
    .version(packageJson.version, '-v, --version', 'output the current version')
    .option('-d, --debug', 'output extra debugging information');

program
    .command('list <resource>')
    .description('list a contents of specified resource', {
        resource: 'definitions | extruders | materials | quality'
    })
    .action(list);

program
    .command('cura <command>')
    .description('get information about cura', {
        resource: 'version | location'
    })
    .action(cura);

program.parse(process.argv);