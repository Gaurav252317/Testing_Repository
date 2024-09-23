const { connect } = require("amqplib");

const connectToQueue = async () => {
  const connection = await connect("amqp://localhost");

  const channel = await connection.createChannel();

  const queue = "messages";

  await channel.assertQueue(queue, { durable: false });

  channel.consume(queue, (msg) => {
    console.log(msg, "Msg Data");
    console.log(msg.content.toString(), "content");
    channel.ack(msg);
  });
};

connectToQueue();
