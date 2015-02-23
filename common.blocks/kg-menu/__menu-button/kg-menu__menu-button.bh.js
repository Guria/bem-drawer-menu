module.exports = function(bh){
  bh.match('kg-menu__menu-button', function(ctx) {
    return {
      block: 'button',
      text: 'Меню',
      mix: {
        block: 'kg-menu',
        elem: 'menu-button',
        mods: ctx.mods(),
      },
      icon: { block: 'kg-glyph', glyph: 'bars' }
    };
  });
};