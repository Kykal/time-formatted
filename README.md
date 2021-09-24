[<img align="right" alt="JavaScript" width="32px" src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />][JavaScript_Site]

[JavaScript_Site]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

# What is this?

This package brings functions that convert seconds into formatted time. Use the seconds you want to convert as argument.
```JS
shortTime(int seconds)
```
```JS
longTime(int seconds)
```

## Examples

### shortTime(int seconds)
```JS
const { shortTime } = require('@kykal/time-formatted')

console.log( shortTime(821) );
//Output: 13:41 

console.log( shortTime(8286) );
//Output: 2:18:06
```

### longTime(int seconds)
```JS
const { longTime } = require('@kykal/time-formatted');

console.log( longTime(321) );
//Output: 00:05:21

console.log( longTime(3609) );
//Output: 01:00:09 
```

# Instalation

Using ``npm``:
```SSH
npm i @kykal/time-formatted
```
