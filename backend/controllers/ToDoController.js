const ToDoModel = require("../models/ToDoModel");

// The getToDo function retrieves all ToDo items from the database and sends them to the client.
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

// The saveToDo function creates a new ToDo item in the database using the data provided in the request body and sends the created item back to the client.
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("added successfully");
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error("Error adding ToDo:", error);
      res.status(500).send({ message: "Error adding ToDo", error });
    });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
};

// getToDo Function:

// Retrieves all ToDo items from the database.
// Sends the retrieved items back to the client as the response.

// saveToDo Function:

// Extracts the text property from the request body.
// Creates a new ToDo item with the extracted text.
// Sends the newly created item back to the client as the response.
// Logs success or error messages and handles errors by sending appropriate responses to the client.
