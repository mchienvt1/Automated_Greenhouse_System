async function mutipleMongooseObject(mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
}
async function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

module.exports = { mutipleMongooseObject, mongooseToObject};