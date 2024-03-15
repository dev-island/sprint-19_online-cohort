module.exports.handler = async (event) => {
  console.log("Hello from Lambda!")
  console.log("event", event.body)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Message received!",
        input: event,
      },
      null,
      2
    ),
  };
};
