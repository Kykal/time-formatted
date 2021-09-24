[<img align="right" alt="Node.JS" width="32px" src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png" />][NodeJS_Site]

[NodeJS_Site]: https://nodejs.org/en/about/

# What is this?

This package brings functions that convert seconds into formatted time. Use the seconds you want to convert as argument.
```JS
shortTime(int seconds)
```
```JS
longTime(int seconds)
```

## How to Import
```JS
//Just shortTime() function
const { shortTime } = require('@kykal/time-formatted')

//Just longTime() function
const { longTime } = require('@kykal/time-formatted');

//All functions (can import with whatever name you want)
const times = require('@kykal/time-formatted');
```

## Examples

### shortTime(int seconds)
```JS

console.log( shortTime(821) );
//Output: 13:41 

console.log( shortTime(8286) );
//Output: 2:18:06

console.log( times.shortTime(342) );
//Output: 5:42
```

### longTime(int seconds)
```JS

console.log( longTime(321) );
//Output: 00:05:21

console.log( longTime(3609) );
//Output: 01:00:09 

console.log( times.longTime(657) );
//Output: 00:10:57
```
