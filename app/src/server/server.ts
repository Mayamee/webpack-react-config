import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../components/App/App";
import { ssrTemplate } from "./ssr/template";
import path from "path";
const PORT = process.env.PORT || 3000;
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "..", "client")));

app.get("/", (req, res) => {
  res.send(ssrTemplate(ReactDOM.renderToString(App())));
});
app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
