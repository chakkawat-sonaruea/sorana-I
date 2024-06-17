const express = require("express")
const app = express()
const port = 55511


// Use cors to run test from htmx in `test.html`
//
// const cors = require("cors")
// app.use(cors({
//     origin: "*"
// }))

app.use(express.json())

app.post('/', function(req, res) {
    console.log(req.headers)
    if (req.headers["authorization"] !== "DEVCREW-BACKEND-TEST") {
        res.status(401).send({error: "Unauthorized"})
        return;
    }
    else if (req.headers["content-type"] === "application/json"
        && typeof(req.body.a) === "number"
        && typeof(req.body.b) === "number"
    ) {
        res.status(200).send({result: (req.body.a * req.body.b)})
    }
    else {
        res.status(422).send({error: "Unsupported data format"})
        return;
    }
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})