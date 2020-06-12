ProperJS // KonamiCode
======================

> up, up, down, down, left, right, left, right, b, a. Game on!



### Installation

```shell
npm i konami-code --save-dev
```



### Usage
```javascript
import KonamiCode from "konami-code";

const konami = new KonamiCode();

konami.listen(() => {
    // Easter egg!!!
    console.log( "konami code!" );
});
```
