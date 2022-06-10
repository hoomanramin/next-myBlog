import {MongoClient} from "mongodb";
const ContactHandler = async (req, res) => {
  if (req.method === "POST") {
    const {email, name, message} = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({message: "invalid inpout"});
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.k03kg.mongodb.net/?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://hoomanramin:h2296360981HM@cluster0.k03kg.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({message: "could not connect"});
    }
    const db = client.db(process.env.mongodb_databasekey);

    try {
      const collections = await db.collection("messages").insertOne(newMessage);
      newMessage.id = collections.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({message: "could not insert to db"});
      return;
    }
    client.close();
    res.status(201).json({message: "Data Created", message: newMessage});
  }
};

export default ContactHandler;
