
var version="js2.1";
var s="links.plan2winsoftware.com";
var p=location.protocol.indexOf('https')>-1?'https://':'http://';
var u="/web.gif";
var U=p+s+u;

function PrefixChar(strValue, strCharPrefix, intLength) {
	var intStrValue_length = String(strValue).length;
	if (intStrValue_length < intLength) {
		for (var intI=0; intI<(intLength-intStrValue_length); ++intI) {
			strValue = strCharPrefix + strValue;
		}
	}
	return strValue;
}

function tzs() {
	var d = new Date();

	var tz=d.getTimezoneOffset();
	var tzs=(tz > 0 ? "-" : "+")
	var tzh=Math.floor(Math.abs(tz) / 60);
	var tzm=Math.abs(tzh - (Math.abs(tz) / 60)) * 60;
	var tzs="UTC" + tzs + PrefixChar(tzh, "0", 2) + PrefixChar(tzm, "0", 2);

	return tzs;
}

function hem() {

	var now = new Date();
	var fynow	= now.getFullYear();
	var tzst = tzs();

	var objOutput = [];
	var intO = 0;

	var om1 = new Date("1 Jan " + fynow + " 00:00:00 " + tzst);
	var om7 = new Date("1 Jul " + fynow + " 00:00:00 " + tzst);


   var m1=om1.getTimezoneOffset();
   var m7=om7.getTimezoneOffset();
   var h	= "E";

   if (m1 != m7) {
      h = m1 > m7 ? "N" : "S";
   }
   return h;
}

function X(Y, Z){
  Z=(typeof(Z)!="undefined"?Z:"");
  U+="&"+Y+"="+escape(Z);
}

function frt(cid){

 var jsv="1.3";
 U=U+"?";

 X("v",version);
 X("cid", cid);
 X("u",document.URL);
 X("t",document.title);
 X("l",navigator.language);
 X("je", navigator.javaEnabled()); 
 X("re", screen.width + "x" + screen.height); 
 X("cd", screen.colorDepth);
 X("pd", screen.pixelDepth); 
 X("os", navigator.platform); 
 X("ua", navigator.appName + " " + navigator.appVersion); 
 X("ref", window.document.referrer);  
 X("h", hem());
 X("tz", tzs()); 
 X("jsv", jsv); 

  if( U.length>2048 && navigator.userAgent.indexOf('MSIE')>=0){
 	U = U.substring( 0, 2043)+"&cut=1";

 }
  U = "<img border='0' alt='' src='" + U + "' />"
  document.write(U);
}     


