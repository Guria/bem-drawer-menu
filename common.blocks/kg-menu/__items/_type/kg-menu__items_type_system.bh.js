module.exports = function (bh) {
  bh.match('kg-menu__items_type_system', function(ctx, json) {
    var content = [];
    var mix = { block : 'kg-menu', elem : 'item', mods : { lvl : 'top' } };
    json.settingsItem && content.push({
      block : 'menu-item',
      tag : 'li',
      mix : json.settingsItem.url? null : mix,
      mods : ctx.extend({ disabled : true }, json.settingsItem.url? { type : 'link'} : null),
      val : json.settingsItem.value || json.settingsItem,
      content : [{
        block : 'icon',
        mix : { block: 'kg-menu', elem: 'icon' },
        url : json.settingsItem.iconUrl || undefined,
        cls : json.settingsItem.iconCls || undefined,
        content : (json.settingsItem.glyph || !(json.settingsItem.iconUrl || json.settingsItem.iconCls)) &&
          { block : 'kg-glyph', glyph : json.settingsItem.glyph || 'settings' }
      },
      { tag : 'span', content : json.settingsItem.title }]
    });
    if (json.settingsItem && json.settingsItem.url)
      content[0].content = {
        block: 'link',
        mix: mix,
        url: json.settingsItem.url,
        content: content[0].content
      };

    json.versionItem && content.push({
      block: 'menu-item',
      mix: [
        { block: 'kg-menu', elem: 'item' },
        { block: 'kg-menu', elem: 'version' }
      ],
      tag: 'li',
      val: json.versionItem.value || json.versionItem,
      content: json.versionItem.title || json.versionItem
    });
    return content;
  });
};