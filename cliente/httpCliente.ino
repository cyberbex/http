/* #include <WiFi.h>
#include <HTTPClient.h>
 
const char* ssid = "Bruno Migliorini";
const char* password =  "edicula88";
int valorAdc = 76;
float valorTemp =45.34;
int valorHumidade=78;

 
void setup() {
 
  Serial.begin(115200);
  delay(4000);
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
 
}
 
void loop() {
 
  if ((WiFi.status() == WL_CONNECTED)) { //Check the current connection status
 
    HTTPClient http;
     
    String str1 = "";
    String str2 = "";
    String str3 = "";
    String strFinal = "";
    
    str1 = "https://cyberbex.online/sensores/?temp="+(String)valorTemp;
    str2 = "&humidade="+(String)valorHumidade;
    str3 = "&adc="+(String)valorAdc;
    strFinal = str1+str2+str3; 
    
    http.begin(strFinal); //Specify the URL
    int httpCode = http.GET();                                        //Make the request
 
    if (httpCode > 0) { //Check for the returning code
 
        String payload = http.getString();
        Serial.println(httpCode);
        Serial.println(payload);
        
      }
 
    else {
      Serial.println("Error on HTTP request");
    }
 
    http.end(); //Free the resources
  }
 
  delay(10000);
 
}
 */