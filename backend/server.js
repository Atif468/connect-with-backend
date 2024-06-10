import express from 'express';
import 'dotenv/config'

const app = express();

const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//     res.send("Server is running...");
// });

app.get("/api/jokes", (req, res) => {
    const jokes = [ 
        {
          id: 1,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 2,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 3,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 4,
          title: "How does a penguin build its house?",
          content: "Igloos it together!"
        },
        {
          id: 5,
          title: "Why did the math book look sad?",
          content: "Because it had too many problems."
        },
        {
          id: 6,
          title: "Why was the math book unhappy?",
          content: "It had too many problems."
        },
        {
          id: 7,
          title: "Why don't programmers like nature?",
          content: "It has too many bugs."
        },
        {
          id: 8,
          title: "What do you get when you cross a snowman and a vampire?",
          content: "Frostbite."
        },
        {
          id: 9,
          title: "Why did the golfer bring an extra pair of pants?",
          content: "In case he got a hole in one."
        },
        {
          id: 10,
          title: "Why don't some couples go to the gym?",
          content: "Because some relationships don't work out."
        }
      ];   //A collection of jokes...
      // const random = Math.floor(Math.random()*10);
      res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is running on port number ${process.env.PORT}`);
});
