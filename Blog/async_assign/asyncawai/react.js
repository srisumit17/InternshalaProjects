document.getElementById('btn').addEventListener('click', fetchData);

async function fetchData() {
    const data = document.getElementById('dataC');
    data.textContent = 'Loading...';

    try {
        const response = await fetch('https://dummyjson.com/posts');
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        displayError(error);
    }
}

function displayData(data) {
    const data1 = document.getElementById('dataC');
    data1.textContent = JSON.stringify(data, null, 2);
}

function displayError(error) {
    const data2 = document.getElementById('dataC');
    data2.textContent = 'Error: ' + error.message;
}
