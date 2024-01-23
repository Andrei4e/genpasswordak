A package designed to generate random passwords

## Quickstart

**1. Install**

```shell
npm install genpasswordak
```

**2. Random password generation**

```javascript
const genPwd = require("genpasswordak");
genPwd.genPwdDefault(); // ⇨ '77i01ca%w'
genPwd.genPwd(8, true, false); // ⇨ 'IaItaM40'
```

## API

| Method | Description |
| --- | --- |
| genPwdDefault() | Default password generation method (length from 8 to 16 characters, lowercase and uppercase letters, numbers, special characters) |
| genPwdDefault(pwdLength, isNumber, isSymbol) | Password generation method.<br/>**pwdLength** - Password length. Type - *number*;<br/>**isNumber** - Digit presence flag. Type - *boolean*;<br/>**isSymbol** - Flag for the presence of special characters. Type - *boolean*.|