var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('ele').innerHTML = this.responseText;
    }
}

xhttp.open("GET", "filename.txt", true);

//GET, POST, PUT

//file to be accessed from the server

//true aync mode on/off true/false

xhttp.send();

