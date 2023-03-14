# !/bin/bash

rm fuguetebot.zip

rm -rf node_modules

npm install --only=prod

npm run postinstall

zip -q -r fuguetebot.zip *
