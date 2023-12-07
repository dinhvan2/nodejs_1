module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },
  mongooseTobObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
