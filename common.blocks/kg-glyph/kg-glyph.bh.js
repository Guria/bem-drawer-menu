if (typeof module === 'object' && module.exports) {
  require('./kg-glyph.prepare.js'); // prepare json from folder with svg
  var glyphs = require('./glyphs.json');
} else {
  var glyphs = {/*borschik:include:../../common.blocks/kg-glyph/glyphs.json*/};
}
module.exports = function (bh) {
  bh.match('kg-glyph', function(ctx, json) {
    return glyphs[json.glyph+'.svg'];
  });
};
