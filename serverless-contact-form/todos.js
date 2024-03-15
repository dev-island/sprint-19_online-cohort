module.exports.create = (event, context, callback) => {
  console.log("Hello from Lambda!")
  try {
    console.log("event", event.body)
  } catch (error) {
    console.log("error", error)
  }

  const res = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Here's the todo item you created!",
        data: 'test',
      },
      null,
      2
    ),
  };
  callback(null, res);
}