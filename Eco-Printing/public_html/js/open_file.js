/// <reference path="js/PDFPageCount.js" />
document.write('<script type="text/javascript" language="javascript" src="js/pdf.js"></script>')
$(document).ready(function(){
	$("#check").click(
 
    function(e){
		console.log($("#file-input")[0].files[0]);
        var file = $("#file-input")[0].files[0];
		$('.file').html(file);
		$('.type').html(file.type);
		$('.name').html(file.name);
		$('.size').html(file.size);
		var name = file.name;
		console.log(file.name + file.type + ' (' + file.size + ').');
		
		console.log("file uploaded?")
		
		try {
		PDFJS.getDocument('http://localhost:8002/'+file.name).then(function (doc) {
			var numPages = doc.numPages;
			console.log('Number of Pages: ' + numPages);
			console.log('http://localhost:8002/'+file.name)
			$('.pages').html(numPages);
		})
		} catch(err) {
			var numPages = "File not Uploaded";
			$('.pages').html(numPages);
		}
		
        return false;
    });
});