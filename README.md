# Lite logger for NodeJS

## Features:

* Timestamps
* Context
* Colors
* Easy to use

## Log example with lite-logger:

```
Sun Oct 16 2016 15:28:34 GMT+0200 (CEST) | examples => hello!
```

## Log types:

* Default log (default color): liteLogger.log('message')
* Error log (red): liteLogger.error('message')
* Warning log (yellow): liteLogger.log('message')
* Info log (blue): liteLogger.info('message')

## Set default color:

Set a default color to use in default logs.

```
let liteLogger = require('lite-logger')('examples', 'green')
```

## Setup:

```
npm install --save lite-logger
```

```
//example.js
//Initialize context to "simple" and default color "green".
let liteLogger = require('lite-logger')('examples', 'green')
liteLogger.log('hello!') // Sun Oct 16 2016 15:24:49 GMT+0200 (CEST) | examples => hello!
```
