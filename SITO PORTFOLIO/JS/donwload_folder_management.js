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
function download_Cartella_IDIV(){
    downloadFile('CARTELLE DONWLOADBLE/ESERCITAZIONE DIV.zip', 'ESERCITAZIONE DIV.zip');
}
function download_Cartella_IMC(){
    downloadFile('CARTELLE DONWLOADBLE/CALCOLO IMC.zip', 'CALCOLO IMC.zip');
}
function download_Cartella_ARTISTI(){
    downloadFile('CARTELLE DONWLOADBLE/ARTISTI E TESTI MUSICALI.zip', 'ARTISTI E TESTI MUSICALI.zip');
}
function download_Cartella_MV2(){
    downloadFile('CARTELLE DONWLOADBLE/MUSEO VIRTUALE 2.0.zip', 'MUSEO VIRTUALE 2.0.zip');
}
function download_Cartella_MV(){
    downloadFile('CARTELLE DONWLOADBLE/MUSEO VIRTUALE.zip', 'MUSEO VIRTUALE.zip');
}
function download_Cartella_LISTE(){
    downloadFile('CARTELLE DONWLOADBLE/LISTE ORDINATE E IMG.zip', 'LISTE ORDINATE E IMG.zip');
}
function download_Cartella_METEO(){
    downloadFile('CARTELLE DONWLOADBLE/METEO.zip', 'METEO.zip');
}
function download_Cartella_MVE(){
    downloadFile('CARTELLE DONWLOADBLE/MUSEO VIRTUALE EDITATO.zip', 'MUSEO VIRTUALE EDITATO.zip');
}
function download_Cartella_PGLINK(){
    downloadFile('CARTELLE DONWLOADBLE/PAGINA LINKATA.zip', 'PAGINA LINKATA.zip');
}
function download_Cartella_SCR1(){
    downloadFile('CARTELLE DONWLOADBLE/SCRIPT 1.zip', 'SCRIPT 1.zip');
}
function download_Cartella_SCR2(){
    downloadFile('CARTELLE DONWLOADBLE/SCRIPT 2.zip', 'SCRIPT 2.zip');
}
function download_Cartella_SCR3(){
    downloadFile('CARTELLE DONWLOADBLE/SCRIPT 3.zip', 'SCRIPT 3.zip');
}
function download_Cartella_SCR4(){
    downloadFile('CARTELLE DONWLOADBLE/SCRIPT 4.zip', 'SCRIPT 4.zip');
}
function download_Cartella_TIMETABLE(){
    downloadFile('CARTELLE DONWLOADBLE/SITO WEB ORARIO.zip', 'SITO WEB ORARIO.zip');
}
function download_Cartella_SELVIEW(){
    downloadFile('CARTELLE DONWLOADBLE/SELEZIONA E VISUALIZZA UN ELEMENTO.zip', 'SELEZIONA E VISUALIZZA UN ELEMENTO.zip');
}
