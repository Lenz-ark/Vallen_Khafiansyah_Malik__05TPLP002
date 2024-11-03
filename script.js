function loadPage(page) {
    // Menggunakan AJAX untuk mengambil halaman dan memasukkan ke div #content
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}
