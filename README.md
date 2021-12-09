# REST API SERVERLESS

This is a bare-bones example of a Sinatra application providing a REST
API to a DataMapper-backed model.

The entire application is contained within the `app.rb` file.

`config.ru` is a minimal Rack configuration for unicorn.

`run-tests.sh` runs a simplistic test and generates the API
documentation below.

It uses `run-curl-tests.rb` which runs each command defined in
`commands.yml`.

## Install

```
  yarn install
    or
  npm install
```

## Run the app

```
  yarn start
    or
  npm start

```

## Run the tests

First start the application(``` yarn start or npm start```) and then run the tests 

```
  yarn test 
    or
  npm test

```

# REST API

The REST API to the example app is described below.

## Get the quantity and total price from the product list

### Request

`GET /show`

curl -i -H 'Accept: application/json' http://localhost:3000/dev/show

### Response

HTTP/1.1 200 OK
Date: {}
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 2

[]
