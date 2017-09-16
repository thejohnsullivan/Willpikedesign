echo "document.write('\\" > header.js
sed 's/^.*$/&\\/g;' header.html >> header.js
echo "');" >> header.js
