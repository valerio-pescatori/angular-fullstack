import * as mongoose from 'mongoose';

const mongoDbURI: string = 'mongodb://localhost:27017/angularfullstack';

async function setMongo(): Promise<any> {
  await mongoose.connect(mongoDbURI);
  console.log('Connected to MongoDB');
}

export default setMongo;
