# Hi

This is an sample project made with Angular and Postman Echo Server.

### Prerequisites

- NodeJS
- Postman
- Postman setup (echo server setup)

# Postman setup (echo server setup)

Reference to `https://www.youtube.com/watch?v=AnGUFN3JWy0&t=615s`

When forked, we need two endpoints (Request Methods).

Two Get => `{{url}}/stagePlays`, `{{url}}/stagePlays/:id`

One Post => `{{url}}/login`

Add Example (postman functionality) `{{url}}/stagePlays`:

{
    "args": [
        {"id": "string", "name": "string", "imageUrl": "sting"},
    ],
    "headers": {
        "x-forwarded-proto": "https",
        "x-forwarded-port": "443",
        "host": "postman-echo.com",
        "x-amzn-trace-id": "Root=160a66480-3342356tmm34121",
        "accept": "*/*",
        "cookie": null,
        "user-agent": "PostmanRuntime/7.26.8"
    }
}

Add Example (postman functionality) `{{url}}/stagePlays/:id`

{
    "args": {"id": "string", "name": "string", "imageUrl": "sting"},
    "headers": {
        "x-forwarded-proto": "https",
        "x-forwarded-port": "443",
        "host": "postman-echo.com",
        "x-amzn-trace-id": "Root=160a66480-3342356tmm34121",
        "accept": "*/*",
        "cookie": null,
        "user-agent": "PostmanRuntime/7.26.8"
    }
}

Add Example (postman functionality) `{{url}}/login` 

{
    "args": {"firstName": "string", "lastName": "string", "email": "sting"},
    "headers": {
        "x-forwarded-proto": "https",
        "x-forwarded-port": "443",
        "host": "postman-echo.com",
        "x-amzn-trace-id": "Root=160a66480-3342356tmm34121",
        "accept": "*/*",
        "cookie": null,
        "user-agent": "PostmanRuntime/7.26.8"
    }
}


### Run

`git clone "this repo"`

`cd "this repo"`

`npm i && npm run start`

