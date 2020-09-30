#!/usr/bin/env node

const { program } = require("@caporal/core")


program.version('1.1.2')
.command('install', 'Description')
.argument('path', '')
.alias('i')
.action(({ logger, args }) => {
logger.info('Install')
	logger.info(args.path)
})

program
.command('uninstall', 'Description')
.action(({ logger }) => {
	logger.info('Uninstall')
})
program
.command('info', 'Description')
.default()
.action(({ logger }) => {
        logger.info('Info')
})


program.run()












