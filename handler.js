const AWS = require('aws-sdk');
const uuid = require('uuid');
const { success, error } = require('./httpResponses');

const db = new AWS.DynamoDB.DocumentClient();

const TABLE = process.env.TABLE_NAME;

module.exports = {
  db,
  TABLE,
  uuid,
  success,
  error,
};
