document.getElementById('fetchBtn').addEventListener('click', () => {
    setTimeout(() => {
        fetchData(displayData);
    }, 5000);
});

function fetchData(callback) {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Callback executed after 5 seconds</h2>';
    const posts = data.posts.map(post => `<p>${post.title}</p>`).join('');
    resultDiv.innerHTML += posts;
}
