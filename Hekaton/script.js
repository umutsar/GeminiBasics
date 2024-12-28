

async function fetchDailyInformation() {

    try {
        const response = await fetch('http://127.0.0.1:3001/getDailyInformation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (data.response) {
            document.getElementById('content').innerText = data.response;
        } else {
            document.getElementById('content').innerText = "Bir hata oluştu.";
        }
    } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
        document.getElementById('content').innerText = "API isteği sırasında bir hata oluştu.";
    }
}

fetchDailyInformation();
