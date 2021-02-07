const {
  TABLE,
  db,
  success,
  error,
} = require('../handler');

module.exports.updateMusic = async (event) => {
  const { id } = event.pathParameters;

  const parseData = JSON.parse(event.body);

  try {
    const params = {
      TableName: TABLE,
      Key: {
        ID: id,
      },
      UpdateExpression: 'set genre=:genre, singer=:singer',
      ConditionExpression: 'attribute_exists(ID)',
      ExpressionAttributeValues: {
        ':singer': parseData.singer,
        ':genre': parseData.genre,
      },
      ReturnValues: 'ALL_NEW',
    };

    const res = await db.update(params).promise();

    return success(res);
  } catch (err) {
    return error(404, 'ID NOT FOUND');
  }
};
