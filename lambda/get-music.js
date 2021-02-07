const {
  TABLE,
  db,
  success,
  error,
} = require('../handler');

module.exports.getMusic = async (event) => {
  const { id } = event.pathParameters;

  try {
    const params = {
      TableName: TABLE,
      Key: {
        ID: id,
      },
      ConditionExpression: 'attribute_exists(ID)',
    };

    const res = await db.get(params).promise();

    return success(res);
  } catch (err) {
    return error(404, 'ID NOT FOUND');
  }
};
