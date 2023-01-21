// fire base url
url = ""


function addProduct() {
  var ss = SpreadsheetApp.openByUrl("");
  var dataLoggerSheet = ss.getSheetByName("data");
  var minutesSheet = ss.getSheetByName("minutes");

  data = importData();

  var minute = minutesSheet.getRange("A1").getValues();

  if (minute[0][0] == data['minutes']) {
    minutesSheet.getRange("A1").setValue(data['minutes']);
    pH = data['pH'];
    temp_Inside = data['T_Inside'];
    temp_Outside = data['T_Outside'];
    uv_index = data['UV'];
    var dateTime = new Date();
    var time = dateTime.toLocaleTimeString();

    // Get last edited row from DataLogger sheet
    var row = dataLoggerSheet.getLastRow() + 1;

    // Start Populating the data
    dataLoggerSheet.getRange("A" + row).setValue(row-1); // ID
    dataLoggerSheet.getRange("B" + row).setValue(dateTime); // dateTime
    dataLoggerSheet.getRange("C" + row).setValue(time); // tag
    dataLoggerSheet.getRange("D" + row).setValue(pH); // value
    dataLoggerSheet.getRange("E" + row).setValue(temp_Inside); // value
    dataLoggerSheet.getRange("F" + row).setValue(temp_Outside); // value
    dataLoggerSheet.getRange("G" + row).setValue(uv_index); // value
  }
  
}



function importData() {
  try {
    // /rates/EUR
    var res = UrlFetchApp.fetch(url);
    var content = res.getContentText();
    var json = JSON.parse(content);

    Logger.log(json);

    if (typeof (json) === "undefined") {
      return "Node Not Available";
    }
    else if (typeof (json) == "object") {
      return json;
    }
  }
  catch (err) {
    Logger.log(err)
    // return "Error getting data";  
  }
}



function doGet(){
addProduct();
var ss = SpreadsheetApp.openById("14ca-7cxg5eVefhrqm_WgFHJc8B5_eN_2h41qaf9I_kg")
var values = ss.getActiveSheet().getDataRange().getValues();
var data= [];

for (var i =1; i< values.length; i++) {
  var row = values[i];
  var feedback = {};
  feedback['reads'] = row[0];
  feedback['date'] = row[2];
  feedback ['pH_value'] = row [3];
  feedback['temp_inside']= row [4];
  feedback['temp_outside']=row [5];
  feedback['UV_index'] = row [6];
  feedback['timee'] = row [2];
  data.push(feedback);
}
return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}