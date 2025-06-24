import { connectToDatabase } from "../../../lib/mongodb";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "GET") {
    try {
      const popData = [];
      // console.log(popData, "popData");
      let myPost = await db
        .collection("popup")
        .find()
        .forEach(function (item) {
          popData.push(item);
          // console.log(item, "item");
        });

      res.status(200).json({ popData, msg: "all popup" });
    } catch (error) {}
  }
}
