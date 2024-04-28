function download_file_IDIV(){
    // Percorso relativo del file ZIP
    var zipFilePath = 'FILE DONWLOADBLE/ESERCITAZIONE DIV.zip';
    // Crea un link temporaneo per il download
    var link = document.createElement('a');
    link.href = zipFilePath;
    link.download = "ESERCITAZIONE DIV.zip";
    // Aggiungi il link alla pagina e simula il click
    document.body.appendChild(link);
    link.click();
    // Pulisci il link temporaneo
    document.body.removeChild(link);
}
function download_file_IMC(){
    var zipFilePath = 'FILE DONWLOADBLE/CALCOLO IMC.zip';
    var link = document.createElement('a');
    link.href = zipFilePath;
    link.download = "CALCOLO IMC.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function download_file_ARTISTI(){
    var zipFilePath = 'FILE DONWLOADBLE/ARTISTI E TESTI MUSICALI.zip';
    var link = document.createElement('a');
    link.href = zipFilePath;
    link.download = "ARTISTI E TESTI MUSICALI.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}