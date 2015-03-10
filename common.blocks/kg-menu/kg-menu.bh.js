module.exports = function(bh) {
  bh.match('kg-menu', function(ctx, json) {
    ctx.js(true);
    if(Array.isArray(json.items)) {
      ctx
        .mix({ elem : 'aperture' })
        .content({
          elem : 'panel',
          items : json.items,
          settingsItem : json.settingsItem,
          versionItem : json.versionItem,
        });
    }
  });
};
