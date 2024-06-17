# Number multiplier API

## How to run

- Init the npm.
```bash
npm install
```

- Run node
```bash
node index.js
```

### Testing (using curl)

On a saperate terminal

- Test case 1
```bash
curl \
-X POST \
-H 'content-type: application/json' \
-H 'Authorization: AAAA' \
--data '{"a":10, "b": 6}' \
http://localhost:55511
```

- Test case 2
```bash
curl \
-X POST \
-H 'content-type: application/json' \
-H 'Authorization: DEVCREW-BACKEND-TEST' \
--data '{"a":10, "b": 6}' \
http://localhost:55511
```

- Test case 3
```bash
curl \
-X POST \
-H 'content-type: application/json' \
-H 'Authorization: DEVCREW-BACKEND-TEST' \
--data '{"a":-2, "b": 5.1}' \
http://localhost:55511
```

- Test case 4
```bash
curl \
-X POST \
-H 'content-type: application/json' \
-H 'Authorization: DEVCREW-BACKEND-TEST' \
--data '{"a":10}' \
http://localhost:55511
```