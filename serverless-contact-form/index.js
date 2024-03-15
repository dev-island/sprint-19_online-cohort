module.exports.handler = async (event) => {
  // GET THE FORM DATA
  // const sgMail = require("@sendgrid/mail");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
