modules.require(['bh', 'i-bem__dom_init', 'jquery'], function(BH, init, jquery){

  (function (factory) {
      if (typeof require === 'function') {
          // Load jQuery from amd or CommonJS module system
          factory(require('jquery'));
      } else {
          // Browser globals and as a last yModules
          factory(jQuery || jquery);
      }
  }(function ($) {
    $.fn.kgMenu = function(config) {

      config = $.extend({
        items : [],
        settingsItem : undefined,
        versionItem : undefined,
        autoclose : false,
        visible : undefined,
      }, config);

      var menuMods = {
        autoclose : config.autoclose,
        visible : config.visible
      };

      this.replaceWith(BH.apply({
        block : 'kg-menu',
        mods : menuMods,
        cls : this.attr('class'),
        js : { id: 1 },
        items : config.items,
        settingsItem : config.settingsItem,
        versionItem : config.versionItem
      }));

      config.button && config.button.replaceWith(BH.apply({
        block: 'kg-menu',
        mods: menuMods,
        cls: config.button.attr('class'),
        js: { id: 1 },
        content: {
          block: 'kg-menu', elem: 'menu-button',
          mods: { toggle: config.progressive? 'lvl1' : 'full' },
        }
      }));
      var kgmenu = $('.kg-menu').bem('kg-menu');
      return kgmenu;
    };
  }));
});