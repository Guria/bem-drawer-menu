module.exports = function (bh) {
  bh.match('kg-menu__items_type_system', function(ctx, json) {
    var content = [];
    var mix = { block : 'kg-menu', elem : 'item', mods : { lvl : 'top' } };
    var settingsItem = json.settingsItem;
    var versionItem = json.versionItem;
    settingsItem && content.push({
      block : 'menu-item',
      tag : 'li',
      mix : settingsItem.url? null : mix,
      mods : ctx.extend({ disabled : true }, settingsItem.url? { type : 'link'} : null),
      val : settingsItem.value || settingsItem,
      content : [{
        block : 'icon',
        mix : { block: 'kg-menu', elem: 'icon' },
        url : settingsItem.iconUrl,
        cls : settingsItem.iconCls,
        content : (settingsItem.glyph || !(settingsItem.iconUrl || settingsItem.iconCls)) &&
          { block : 'kg-glyph', glyph : settingsItem.glyph || 'settings' }
      },
      { tag : 'span', content : settingsItem.title }]
    });
    if (settingsItem && settingsItem.url)
      content[0].content = {
        block: 'link',
        mix: mix,
        url: settingsItem.url,
        content: content[0].content
      };

    versionItem && content.push({
      block: 'menu-item',
      mix: [
        { block: 'kg-menu', elem: 'item' },
        { block: 'kg-menu', elem: 'version' }
      ],
      tag: 'li',
      val: versionItem.value || versionItem,
      content: versionItem.title || versionItem
    });
    return content;
  });
};
