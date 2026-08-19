let form = document.getElementById("mainform");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const userId = document.getElementById("userID").value;

    const result = document.getElementById("result");

    try {

        const response = await fetch("http://localhost:3000/", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                userID: userId
            })
        });

        const data = await response.json();

        if (response.ok) {

            result.innerHTML = `
                <h2>User Details</h2>

                <p><strong>Name:</strong> ${data.username}</p>

                <p><strong>User ID:</strong> ${data.userID}</p>

                <p><strong>Email:</strong> ${data.email}</p>

                <p><strong>Branch:</strong> ${data.branch}</p>

                <p><strong>Year:</strong> ${data.year}</p>

                <p><strong>Semester:</strong> ${data.semester}</p>
            `;

        } else {

            result.innerHTML = `
                <h2>${data.message}</h2>
            `;

        }

    } catch (error) {

        console.log(error);

        result.innerHTML = `
            <h2>Server Error</h2>
            <p>Unable to connect to the server.</p>
        `;

    }

});