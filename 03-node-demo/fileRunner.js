//importing fs package from node
const fileSystem=require('fs');

//using copyFileSync method to copy the existing file
fileSystem.copyFileSync('file1.txt','copyofFile1.txt');
