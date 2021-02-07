const {
  TABLE,
  db,
  success,
  error,
} = require('../handler');

module.exports.deleteMusic = async (event) => {
  const { id } = event.pathParameters;

  try {
    const params = {
      TableName: TABLE,
      Key: {
        ID: id,
      },
      ConditionExpression: 'attribute_exists(ID)',
    };

    await db.delete(params).promise();

    return success({ message: 'deleted item successfully!!!' });
  } catch (err) {
    return error(404, 'ID NOT FOUND');
  }
};
