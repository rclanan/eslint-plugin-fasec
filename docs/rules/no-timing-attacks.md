# Looks for potential hot spot string comparisons (no-timing-attacks)

## Rule Details

The following pattern is considered warnings:

```js
if(password === "testing") {
  console.log("invalid");
}
```

The following pattern is not considered warnings:

```js
if(encodedHash === "0820b32b206b7352858e8903a838ed14319acdfd") {
  console.log("valid");
}
```
