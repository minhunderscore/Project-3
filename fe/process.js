document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentForm');
    const responseDiv = document.getElementById('response');
    const resultText = document.getElementById('resultText');
    const backendUrl = 'localhost:8000'; // Replace with your backend URL

    form.addEventListener('submit', function (event) {
        // async function fetchData() {
        //     try {
        //         const response = await fetch(backendUrl);
        //         const data = await response.text();
        //         console.log(data)
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // }

        event.preventDefault();

        const name = form.name.value;
        const studentNumber = form.studentNumber.value;
        const githubLink = form.githubLink.value;

        const formData = {
            name: name,
            studentNumber: studentNumber,
            githubLink: githubLink
        };

        fetch(backendUrl, {
            method: 'POST',
            // body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':
            }
            body: {"oke": "oke"}
        })
        .then(response => response.json())
        .then(data => {
            // Process the response data (if needed)
            resultText.innerHTML = `Data submitted successfully. Response from the server: ${data.message}`;
            responseDiv.classList.remove('hidden');
        })
        .catch(error => {
            resultText.innerHTML = `An error occurred: ${error.message}`;
            responseDiv.classList.remove('hidden');
        });
    });
});
