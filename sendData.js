const { connect } = require("amqplib");
const connectToQueue = async () => {
  const connection = await connect("amqp://localhost");


  const channel = await connection.createChannel();

  const queue = "messages";
  const message = '{js: "hello"}';

  await channel.assertQueue(queue, { durable: false });

  channel.sendToQueue(queue, Buffer.from(message));
};

connectToQueue();
