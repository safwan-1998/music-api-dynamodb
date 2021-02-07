const {
  TABLE,
  db,
  uuid,
  success,
} = require('../handler');

module.exports.createMusic = async (event) => {
  const parseData = JSON.parse(event.body);

  const params = {
    TableName: TABLE,
    Item: {
      ID: uuid.v1(),
      name: parseData.name,
      genre: parseData.genre,
      singer: parseData.singer,
    },
  };

  await db.put(params).promise();

  return success({ message: 'added successfully !!!' });
};
