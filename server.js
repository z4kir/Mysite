app.use(express.static("./"));


const path = require("path");
app.get("*",(req, res) =>{
    res.sendFile(path.resolve(__dirname,"index.html"));
})


const PORT = process.env.PORT || 4000;


console.log("server started on port:",PORT);
app.listen(PORT);
