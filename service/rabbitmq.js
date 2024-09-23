const { connect } = require("amqplib");

let connection;
let channel;

(async () => {
  connection = await connect("amqp://localhost");
  channel = await connection.createChannel();
})();

module.exports = { connection, channel };
