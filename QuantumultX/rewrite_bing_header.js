/******************************
[rewrite_local]
^https?://www\.bing\.com/.* url script-request-header https://raw.githubusercontent.com/lisakhan/ios_rule_script/main/QuantumultX/rewrite_bing_header.js
^https?://www\.bing\.com/.* url script-request-header rewrite_bing_header.js

[mitm] 
hostname = *.bing.com

*******************************/
var modifiedHeaders = $request.headers;
modifiedHeaders['X-Forwarded-For'] = '4.2.2.2';
//console.log(`\n head[X-Forwarded-For]: modifiedHeaders['X-Forwarded-For']`);

$done({
  headers: modifiedHeaders
});