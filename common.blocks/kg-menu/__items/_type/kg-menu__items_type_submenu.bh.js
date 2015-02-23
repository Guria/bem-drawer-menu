module.exports = function (bh) {
  bh.match('kg-menu__items_type_submenu', function(ctx, json) {
    return json.items.map(function(item){
      var title = ctx.isSimple(item)? item : item.title;
      var url = !ctx.isSimple(item) && item.url;
      var value = !ctx.isSimple(item) && item.value;
      var sub_item = {
        block : 'menu-item',
        mix : { block : 'kg-menu', elem : 'item', mods: { lvl : 'sub'} },
        mods : ctx.extend({ disabled : true }, url? { type : 'link' } : undefined),
        tag : 'li',
        val : value || item,
        content: url? { block: 'link', url: url, content: title } : title
      };
      return sub_item;
    });
  });
};

