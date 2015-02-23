var fs = require('fs'),
    dir = './common.blocks/kg-glyph/__glyphs/',
    glyphs = {};
fs.readdirSync(dir).forEach(function(file){
  glyphs[file] = fs.readFileSync(dir+file).toString();
});
console.log(glyphs);
fs.writeFileSync(dir+'../glyphs.json', JSON.stringify(glyphs));