import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/deploy", (req, res) => {
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl);
    res.json({});
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});