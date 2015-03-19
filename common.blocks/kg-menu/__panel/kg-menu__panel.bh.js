module.exports = function (bh) {
  bh.match('kg-menu__panel', function(ctx, json) {
    return {
      block: 'menu',
      mods: { mode: 'radio', disabled: true, fix: 'scroll'  },
      tag: 'nav',
      mix: { block: 'kg-menu', elem: 'panel'},
      attrs: { tabIndex: 0 },
      content: bh.processBemJson([{
        block: 'kg-menu',
        elem: 'group',
        type: 'main',
        mods: { lvl: 'top' },
        params: { items: json.items }
      },{
        block: 'kg-menu',
        elem: 'group',
        type: 'system',
        mods: { lvl: 'top' },
        params: {
          versionItem : json.versionItem,
          settingsItem : json.settingsItem
        }
      }])
    };
  });
};
