# A super-light logger with colors for NodeJS.

## Features:

* Timestamps
* Context
* Colors
* Easy to use

## Log example with loggio:

```
Sun Oct 16 2016 15:28:34 GMT+0200 (CEST) | examples => hello!
```

## Log types:

* Default log (default color): loggio.log('message')
* Error log (red): loggio.error('message')
* Warning log (yellow): loggio.log('message')
* Info log (blue): loggio.info('message')

## Set default color:

Set a default color to use in default logs.

```
let loggio = require('loggio')('examples', 'green')
```

## Setup:

```
npm install --save loggio
```

```
//example.js
//Initialize context to "simple" and default color "green".
let loggio = require('loggio')('examples', 'green')
loggio.log('hello!') // Sun Oct 16 2016 15:24:49 GMT+0200 (CEST) | examples => hello!
```
