import express from "express";

const app = express();

app.use(express.json());

const port = 8080;

app.get("/", (request, response) => {
  response.send("Hello Express App");
});

app.get("/articles", (request, response) => {
  response.send("Hello Response From Express");
});

app.post("/addArticle", (request, response) => {
  const { title } = request.body;

  response.send(`Product successfully added ${title}`);
});

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
