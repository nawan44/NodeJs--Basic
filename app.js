#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)


const { program } = require("@caporal/core")


program.action(({ logger }) => {
  console.log('this from console.log')
	logger.info("Hello, world!")

})


program.run()

 






