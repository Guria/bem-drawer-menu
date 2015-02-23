module.exports = function (bh) {
  bh.match('kg-menu__group', function(ctx, json) {
    return {
      block: 'menu',
      elem: 'group',
      tag: 'ul',
      mix: [
        { block: 'kg-menu', elem: json.type },
        { block: 'kg-menu', elem: 'items', mods: ctx.mods() }
      ],
      content: ctx.extend({
        block: 'kg-menu',
        elem: 'items',
        mods: { type: json.type }
      }, json.params)
    }
  });
};