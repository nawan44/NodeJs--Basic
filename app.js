#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)


const { program } = require("@caporal/core")


program
.argument('<message>', 'Description')
.argument('<name>' , 'Description', {default: 'stranger'})
.argument('vocal...', 'Description')
.argument('numbers...', 'Description')

.action(({args, logger}) => {

logger.info(args.message)
logger.info(args.name)
logger.info(args.vocal)

let total = 0
for (let number of args.numbers)
	{
		total = total + number
	}
	logger.info(total)

})


program.run()

 






