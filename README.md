# music-api-dynamodb

## END POINTS

### Request ( Create a music.)

`POST https://rumcwvd3d2.execute-api.us-east-1.amazonaws.com/dev/music`

    body: {
        "name": "string",
        "genre": "string",
        "singer": "string"
    }

### Response
    200 Ok

### Request ( Update a music.)

`PATCH https://rumcwvd3d2.execute-api.us-east-1.amazonaws.com/dev/music/{id}`
    
    parameter : id

    body: {
        "name": "updated string",
        "genre": "updated string",
        "singer": "updated string",
    }

### Response
    200 Ok
    404 id not found


### Request ( Delete a music.)

`DELETE https://rumcwvd3d2.execute-api.us-east-1.amazonaws.com/dev/music/{id}`
    
    parameter : id

### Response
    200 Ok
    404 id not found


### Request ( Get a music based on id.)

`GET https://rumcwvd3d2.execute-api.us-east-1.amazonaws.com/dev/music/{id}`
    
    parameter : id

### Response
    200 Ok
    404 id not found

### Request ( Get all music.)

`GET https://rumcwvd3d2.execute-api.us-east-1.amazonaws.com/dev/music`

### Response
    200 Ok


### Installation
1. `RUN npm install`