import moongoose from "moongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
  await moongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Database connected `);

  
  } catch (error) {
    console.log("MONGODB HAVE ERROR ", error);
    process.exit(1);
  }
};
export default connectDB;
