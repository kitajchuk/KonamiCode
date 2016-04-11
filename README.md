KonamiCode
==========

> Listen and handle the input: up, up, down, down, left, right, left, right, b, a. Game on!



## Installation

```shell
npm install konami-code --save-dev
```


## Usage
```javascript
var KonamiCode = require( "konami-code" );
var konami = new KonamiCode();

konami.listen(function () {
    // Do cool stuff here...
});
```