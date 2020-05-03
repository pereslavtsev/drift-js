# Quick start

## Installation

Using npm:
```
npm i drift-js
```

Using yarn:
```
yarn add drift-js
```

## How to use

Example:
```javascript
const accessToken = '4VjcBNuobStJaeLcarzK1FPMBaaWnhIS';
const clientId = 'BYN5cnsuAaDIAfnrFJET7NzBadD8bLT1';
const clientSecret = 'C0emTInjVzlY7sId71sZziJ8XhdywjcD';

const drift = require('drift-js')({ 
  accessToken, 
  clientId, clientSecret 
});

drift.users.getById(123456)
  .then(({ data }) => console.log(data));
```

Using modern ES syntax:
```javascript
import SDK from 'drift-js';

const accessToken = '4VjcBNuobStJaeLcarzK1FPMBaaWnhIS';
const clientId = 'BYN5cnsuAaDIAfnrFJET7NzBadD8bLT1';
const clientSecret = 'C0emTInjVzlY7sId71sZziJ8XhdywjcD';

const drift = new SDK({
  accessToken,
  clientId,
  clientSecret
});

(async () => {
  const { data } = await drift.users.getById(123456);
  console.log(data);
})();
```
