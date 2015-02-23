module.exports = function (bh) {
  bh.match('kg-menu__items_type_main', function(ctx, json) {
    var content = [];
    json.items.forEach(function (item, i) {
      var mix = {
        block: 'kg-menu',
        elem: 'item',
        mods: { lvl: 'top', id: item.content && i },
      };
      var top_item = {
        block: 'menu-item',
        tag: 'li',
        mix: item.url? null : mix,
        mods: ctx.extend({ disabled: true }, item.url? { type: 'link'} : null),
        val: item.value || item,
        content: [
          {
            block : 'icon',
            mix : { block: 'kg-menu', elem: 'icon' },
            url : item.iconUrl || undefined,
            cls : item.iconCls || undefined,
            content : (item.glyph || !(item.iconUrl || item.iconCls)) &&
              { block : 'kg-glyph', glyph : item.glyph || 'blank' }
          },
          { tag : 'span', content : item.title },
          item.content && {
            block : 'icon',
            mix: { block: 'kg-menu', elem: 'angle-right' },
            content : { block : 'kg-glyph', glyph: 'angle-right' }
          }
        ]
      };
      if (item.url)
        top_item.content = {
          block: 'link',
          mix: mix,
          url: item.url,
          content: top_item.content
        };

      content.push(top_item);

      item.content &&
        content.push({
          block: 'kg-menu',
          elem: 'group',
          type: 'submenu',
          mods: { lvl: 'sub', id: i },
          params: { items: item.content }
        });
    });
    return content;
  });
};
