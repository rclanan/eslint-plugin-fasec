# LCheck if using unsafe regex via [safe-regex](https://github.com/substack/safe-regex) (no-unsafe-regex)

## Rule Details

The following pattern is considered warnings:

```js
var re = /^(a?){25}(a){25}$/;
```

The following pattern is not considered warnings:

```js
var re = /beep/;
```
