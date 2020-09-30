#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)


const { program } = require("@caporal/core")


program
.argument('message', 'Description')
//.option('-u,--uppercase', 'Description')
.option('-t, --type [name]', 'Description', {required: true})
 .action(({args, option, logger }) => {

if (options.type === 'uppercase') {
logger.info(args.message.toUpperCase())
} else {
	logger.info(args.message)
}



})


program.run()

 







