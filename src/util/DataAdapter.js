export default class DataAdapter {
  constructor() {
    this.data = require("../assets/twitter_processed.json");
  }

  // Returns data as an array of JSON.
  loadAsJson() {
    return this.data;
  }

  // Returns data as two arrays. The first one being the columns and the second one contains arrays of data.
  loadAsArray() {
    const columns = Object.keys(this.data[0]);

    const rows = this.data.map(item => {
      return Object.values(item);
    });

    return [columns, rows];
  }

  // Gets the data for a specified user as JSON.
  getByUserId(userId) {
    return this.data.filter(item => item.user_id === userId);
  }
}
