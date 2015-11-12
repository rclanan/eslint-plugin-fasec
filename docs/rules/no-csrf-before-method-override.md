# Checks to see if CSRF middleware is before methodOverride (no-csrf-before-method-override)

## Rule Details

The following pattern is considered warnings:

```js
app.use(express.csrf());
app.use(express.methodOverride());
```

The following pattern is not considered warnings:

```js
app.use(express.methodOverride());
app.use(express.csrf());
```
