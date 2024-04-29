function downloadFile(filePath, fileName) {
    //Scarica grazie ad un link temporaneo generato la cartella del progetto
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Funzioni che definiscono il file da scaricare
function download_file_IDIV(){
    downloadFile('FILE DONWLOADBLE/ESERCITAZIONE DIV.zip', 'ESERCITAZIONE DIV.zip');
}
function download_file_IMC(){
    downloadFile('FILE DONWLOADBLE/CALCOLO IMC.zip', 'CALCOLO IMC.zip');
}
function download_file_ARTISTI(){
    downloadFile('FILE DONWLOADBLE/ARTISTI E TESTI MUSICALI.zip', 'ARTISTI E TESTI MUSICALI.zip');
}
function download_file_MV2(){
    downloadFile('FILE DONWLOADBLE/MUSEO VIRTUALE 2.0.zip', 'MUSEO VIRTUALE 2.0.zip');
}
function download_file_MV(){
    downloadFile('FILE DONWLOADBLE/MUSEO VIRTUALE.zip', 'MUSEO VIRTUALE.zip');
}
function download_file_LISTE(){
    downloadFile('FILE DONWLOADBLE/LISTE ORDINATE E IMG.zip', 'LISTE ORDINATE E IMG.zip');
}
