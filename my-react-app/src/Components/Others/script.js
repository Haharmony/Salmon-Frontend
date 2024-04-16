document.addEventListener('DOMContentLoaded', function () {
    const generateFolderBtn = document.querySelector('.assignment-title button');
    const assignmentContent = document.querySelector('.assignment-content');
    const fileInput = document.getElementById('fileInput');
    let folders = [];

    generateFolderBtn.addEventListener('click', function () {
        const folderName = prompt('Enter folder name:');
        if (folderName) {
            const newFolder = { name: folderName, files: [] };
            folders.push(newFolder);

            // Update UI
            renderFolders();
        }
    });

    function renderFolders() {
        if (folders.length > 0) {
            assignmentContent.innerHTML = '';
            folders.forEach(folder => {
                const folderElement = document.createElement('div');
                folderElement.textContent = folder.name;
                assignmentContent.appendChild(folderElement);
            });
        } else {
            assignmentContent.textContent = 'No hay carpetas existentes.';
        }
    }

    fileInput.addEventListener('change', function (event) {
        // Function to handle file upload
        const files = event.target.files;
        if (files.length > 0) {
            // Display information about each file
            assignmentContent.innerHTML = '';
            Array.from(files).forEach(file => {
                const fileElement = document.createElement('div');
                fileElement.textContent = `File: ${file.name}, Type: ${file.type}, Size: ${formatFileSize(file.size)}`;
                assignmentContent.appendChild(fileElement);
            });
        } else {
            assignmentContent.textContent = 'No hay archivos seleccionados.';
        }
    });

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
});