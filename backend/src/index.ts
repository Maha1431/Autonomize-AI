import connectDB from "./Config/database";
import { app } from "./app";


const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port : http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.log(`MongoDB connection Failed: ${err}`)
  });