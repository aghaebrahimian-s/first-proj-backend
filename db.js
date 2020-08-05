const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to mongodb.'))
  .catch((error) => {
    console.error('Could not connect to mongodb.', error)
    process.exit(1)
  })

module.exports = mongoose
