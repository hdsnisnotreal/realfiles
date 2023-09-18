const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const fileURL = URL.createObjectURL(file);
    
    const img = document.createElement('img');
    img.src = fileURL;

    fileList.appendChild(img);
    
    // You can implement the logic to send the file to a server for storage and generate a unique link here.
    // This example only displays the uploaded file on the page.
});
