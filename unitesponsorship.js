/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile = 'unitesponsorship.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable();
            myFunction();
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

function myFunction(xml) {
   
    document.getElementById("modulename").innerHTML =
    xmlDoc.getElementsByTagName("modulename")[0].childNodes[0].nodeValue;
    document.getElementById("caption").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    document.getElementById("abt").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[1].childNodes[1].childNodes[0].nodeValue;

 document.getElementById("abb").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt2").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("abt3").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt4").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[3].childNodes[0].nodeValue;




var btn = document.querySelector('button');

btn.addEventListener('click', function(){
  var hint = document.getElementById('dis');
  if(hint.style.display == 'none'){
    hint.style.display = 'block';
  }
  else{
    hint.style.display = 'none';
  }

});
   
    }

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Sponsee ID</th><th>Sponsee Name</th><th>Sport</th><th>Achievement</th><th>Year</th><th>Contract</th></tr>"

    var x = xmlDoc.getElementsByTagName("unite")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("sport")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("award")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("contract")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>"
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{  
    y = xmlDoc.getElementsByTagName("unite")[i];
    var name = y.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var reply = confirm("Do you want to delete record? \nName: " + name);
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}



//function to add new record to xml
function addNewRecord()
{
    var i
    var emp = []
    var x = document.getElementById("addRecordForm")
    unite = xmlDoc.createElement("unite")
    emp[0] = xmlDoc.createElement("id")
    emp[1] = xmlDoc.createElement("name")
    emp[2] = xmlDoc.createElement("sport")
    emp[3] = xmlDoc.createElement("award")
    emp[4] = xmlDoc.createElement("year")
    emp[5] = xmlDoc.createElement("contract")
    for(i = 0; i < 6; i++)
    {
        

        emp[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        unite.appendChild(emp[i])
    }
    xmlDoc.documentElement.appendChild(unite);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}