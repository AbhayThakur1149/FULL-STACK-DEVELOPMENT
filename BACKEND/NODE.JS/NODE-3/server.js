const http = require('http');

const Userdetails = [
    {
        Username: "Akshit",
        userID: "2411981057",
        email: "akshit1057.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Arin",
        userID: "2411981106",
        email: "arin1057.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abeer",
        userID: "2411981014",
        email: "abeer1014.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abhay Katoch",
        userID: "2411981018",
        email: "abhay1018.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Jollu Chaudhary",
        userID: "2411981052",
        email: "akshat1052.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",  
        Semester: "5th Semester"
    },
    {
        Username: "Baniya Goyal",
        userID: "2411981012",
        email: "aayush1012.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Akshay Chandel",
        userID: "2411981053",
        email: "akshay1053.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abhay Chaudhary",
        userID: "2411981017",
        email: "abhay1017.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    }
];

const server = http.createServer((req, res) => {

    // CORS
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

    // OPTIONS request
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }

    // POST request
    if (req.method === "POST" && req.url === "/") {

        let bodychunk = "";

        req.on("data", (chunk) => {
            bodychunk += chunk;
        });

        req.on("end", () => {

            try {

                const data = JSON.parse(bodychunk);

                console.log("Received data:", data);

                // Find user using User ID
                const foundUser = Userdetails.find((user) => {
                    return user.userID === data.userID;
                });

                if (foundUser) {

                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({

                        message: "User found successfully",

                        username: foundUser.Username,

                        userID: foundUser.userID,

                        email: foundUser.email,

                        branch: foundUser.Branch,

                        year: foundUser.Year,

                        semester: foundUser.Semester

                    }));

                } else {

                    res.writeHead(404, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({

                        message: "User ID not found"

                    }));

                }

            } catch (error) {

                console.log(error);

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({

                    message: "Invalid JSON data"

                }));

            }

        });

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 Not Found");

    }

});

server.listen(3000, () => {

    console.log("Server Listening on port 3000...");

});