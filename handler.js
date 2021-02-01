'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');
const db = new AWS.DynamoDB.DocumentClient();

module.exports.getAllMusic = (event, context, callback) => {

  const params = {
    TableName: 'music-api-dev-music-uploads'
  }

  return db.scan(params).promise().then((res) =>{
    console.log(res);
    const response = {
      statusCode : 200,
      body : JSON.stringify(res.Items)
    }
    callback(null, response)
  })

};


module.exports.createMusic = (event, context, callback) => {

  const parseData = JSON.parse(event.body);

  const params = {
    TableName : process.env.MUSIC_TABLE,
    Item : {
      ID : uuid.v1(),
      name : parseData.name,
      genre : parseData.genre,
      singer : parseData.singer
    }
  }

  const response = {
    statusCode : 200,
    body : JSON.stringify({
      message : 'added successfully !!!'
    })
  }

  return db.put(params).promise().then(() => {
    callback(null, response)
  })
}



module.exports.updateMusic = (event, context, callback) => {
  const id = event.pathParameters.id;
  console.log(id);

  const parseData = JSON.parse(event.body);

  const params = {
    TableName: 'music-api-dev-music-uploads',
    Key : {
      ID : id
    },
    UpdateExpression: 'set genre=:genre, singer=:singer',
    ExpressionAttributeValues : {
      ':singer' : parseData.singer,
      ':genre' : parseData.genre
    },
    ReturnValues: 'ALL_NEW'
  }

  return db.update(params).promise().then((res) =>{
    console.log(res);

    const response = {
      statusCode : 200,
      body : JSON.stringify(res.Items)
    };
    callback(null, response);
  })

}

module.exports.deleteMusic = (event, context, callback) => {
  const id = event.pathParameters.id;
  console.log(id);

  const params = {
    TableName: 'music-api-dev-music-uploads',
    Key : {
      ID : id
    }
  };

  return db.delete(params).promise().then(() =>{
    const response = {
      statusCode : 200,
      body : 'deleted successfully !!!'
    }
    callback(null, response)
  })
};
