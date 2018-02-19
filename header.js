document.write('\
<div class="header">\
<table>\
<td style="width:25%;"><div class="button"><b><a href="index.html">home</a></b></div></td>\
<td class="menu-wrapper">\
  <div class="button"><b>projects</b></div>\
  <div class="menu">\
  <a class="menu-link" href="sled.html">weight sled</a>\
  <a class="menu-link" href="coaster.html">coastrivet</a>\
  <a class="menu-link" href="lamp.html">tilt lamp</a>\
  <a class="menu-link" href="app.html">trail seeker</a>\
  <a class="menu-link" href="brewer.html">brew better</a>\
  <a class="menu-link" href="other.html">other work</a>\
  </div>\
</td>\
<td style="width:25%;"><div class="button"><b><a href="aboutme.html">about</a></b></div></td>\
<td style="width:25%;"><div class="button"><b><a href="#">resume</a></b></div></td>\
</table>\
</div>\
<style>\
.header {\
  background-color: rgba(50,50,50,0.25);\
  height: 60px;\
  width: 100%;\
  position: fixed;\
  opacity: .85;\
  z-index: 99;\
}\
table {\
  height: 100%;\
  color: white;\
  font-family: font-family: -apple-system, SeravekLight, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\
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
  background-color: rgba(70,70,70,0.35);\
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
  color: white;\
  font-family: font-family: -apple-system, SeravekLight, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\
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
