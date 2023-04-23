const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', () => {

  fetch('http://localhost:3000/download-node-client')
    .then(response => response.blob())
    .then(data => {
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'node-client.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.log(err)
    });

});