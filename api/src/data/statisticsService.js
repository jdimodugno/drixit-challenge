const fetchData = () => {
  try {
    const data = process.env.DB_ENDPOINT ? fetch() : require('../mocks/data.json');
    return data;
  } catch (error) {
    console.error(error);
    throw Error("Error retrieving data");
  }
}

module.exports = { fetchData };