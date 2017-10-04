document.write('\
<div class="header">\
<table>\
<td style="width:33%;"><div class="button"><b><a href="index.html">HOME</a></b></div></td>\
<td style="width:33%;"><div class="button"><b><a href="#">ABOUT ME</a></b></div></td>\
<td class="menu-wrapper">\
  <div class="button"><b>GALLERIES</b></div>\
  <div class="menu">\
  <a class="menu-link" href="p1.html">Weight Sled</a>\
  <a class="menu-link" href="#">Coasters</a>\
  </div>\
</td>\
</table>\
</div>\
<style>\
.header {\
  background-color: #555;\
  height: 60px;\
  width: 100%;\
  position: fixed;\
  opacity: .85;\
}\
table {\
  height: 100%;\
  color: white;\
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\
  width: 100%;\
  text-align: center;\
  vertical-align:center;\
  font-size:100%;\
  border-collapse: separate;\
}\
.button {\
  display:inline-block;\
  padding: 5px;\
  padding-bottom: 2px;\
  border: 1px solid white;\
  opacity: .65;\
  cursor: pointer;\
}\
.button:hover {\
  background-color: #777;\
}\
.menu {\
  display: none;\
  position: absolute;\
  width: 80%;\
  margin-left: 10%;\
  z-index: 1;\
  background-color: #777;\
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\
}\
.menu a {\
  display: block;\
  padding: 10px;\
}\
.menu-wrapper {\
  position: relative;\
  width:33%;\
}\
.menu-wrapper:hover .menu {\
  display: block;\
}\
.menu-link {\
  color: #d7d7d7;\
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\
  text-decoration: none;\
}\
\
.menu-link:hover {\
  background-color: #888;\
  color: #eee;\
}\
a {\
  color:inherit;\
  text-decoration: none;\
}\
</style>\
');
