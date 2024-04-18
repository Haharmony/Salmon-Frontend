import React, { useState } from 'react';
import axios from 'axios';

const postPDFApi = 'http://192.168.1.89:3000/api/archivos_pdf/subirPDF';
//const postPDFApi = 'http://172.102.0.78:3000/api/archivos_pdf/subirPDF';
//const postPDFApi = 'http://34.70.85.26:3000/api/archivos_pdf/subirPDF';



function FileUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nombreArchivo, setNombreArchivo] = useState('');
  const [matriculaClase, setMatriculaClase] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setErrorMessage('');
    } else {
      setSelectedFile(null);
      setErrorMessage('Por favor, selecciona un archivo PDF.');
    }
  };

  const handleSubmitPDF = (event) => {
    event.preventDefault();
    if (selectedFile && nombreArchivo && matriculaClase) {
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      formData.append('nombre_archivo', nombreArchivo);
      formData.append('matricula_clase', matriculaClase);

      // Enviar la solicitud POST utilizando Axios
      axios.post(postPDFApi, formData)
        .then(response => {
          // Manejo de la respuesta exitosa
          console.log('Archivo subido exitosamente:', response.data);
          alert("Archivo subido correctamente");
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error al subir el archivo:', error);
        });
    } else {
      setErrorMessage('Por favor, completa todos los campos y selecciona un archivo PDF.');
    }
  };

  return (
    <div>
      <h2>Subir Archivo PDF</h2>
      <form onSubmit={handleSubmitPDF}>
        <div>
          <label>Nombre del Archivo:</label>
          <input type="text" value={nombreArchivo} onChange={(e) => setNombreArchivo(e.target.value)} />
        </div>
        <div>
          <label>Matrícula de Clase:</label>
          <input type="text" value={matriculaClase} onChange={(e) => setMatriculaClase(e.target.value)} />
        </div>
        <div>
          <label>Archivo PDF:</label>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit">Subir PDF</button>
      </form>
    </div>
  );
}

export default FileUploadForm;
