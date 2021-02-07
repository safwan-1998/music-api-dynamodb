const {
  TABLE,
  db,
  success,
} = require('../handler');

module.exports.getAllMusic = async () => {
  const params = {
    TableName: TABLE,
  };

  const res = await db.scan(params).promise();

  return success(res.Items);
};
