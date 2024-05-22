const Btn = document.getElementById('Btn');
const resultDiv = document.getElementById('result');

Btn.addEventListener('click', () => {
    resultDiv.innerText = 'Loading...';
    resultDiv.style.display = 'block';

    const Data = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            reject('Time out');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                clearTimeout(timeout);
                if (!response.ok) {
                    reject('Failed');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error.message);
            });
    });

    Data
        .then(data => {
            resultDiv.innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            resultDiv.innerText = error;
        });
});