modules.define('kg-menu', ['i-bem__dom', 'dom', 'keyboard__codes', 'jquery'], function(provide, BEMDOM, dom, keyCodes, $){
  provide(BEMDOM.decl(this.name, {
    onSetMod : {
      js : {
        inited : function() {
          this._menu = this.findBlockInside('menu');
        }
      },
      visible : {
        '*' : function(aperture) {
          var visibility = this.getMod(aperture, 'visible-changed');
          this.emit('view-changed', visibility || 'hidden');
          visibility?
            this._onShow() :
            this._onHide();
        }
      },
    },
    onElemSetMod : {
      item : {
        active : {
          true : function() {
            this._removeActiveMod();
          }
        }
      },
      submenu : {
        active : function(submenu) {
          this.showMenu('full');
          this.findBlocksInside(submenu, 'menu-item').forEach(function(item){
            item.setMod('disabled', !this.hasMod(submenu, 'active'));
          }, this);
        }
      },
    },
    _removeActiveMod: function() {
      this
        .delMod(this.findElem('item', 'active', true), 'active')
        .delMod(this.findElem('submenu', 'active', true), 'active');
    },
    showMenu : function(type) {
      this.setMod('visible', type);
    },
    hideMenu : function() {
      this.delMod('visible');
    },
    toggleMenu : function(type){
      this.hasMod('visible')?
        this.hideMenu() :
        this.showMenu(type);
    },
    setSelected : function(item){
    },
    _onShow : function(){
      if(this._menu.getMod('focused') === true)
        return;
      // enable menu
      this._menu.delMod('disabled');
      // disable items in hidden submenu
      this.findBlocksInside(this.elem('items', 'lvl', 'sub'), 'menu-item').forEach(function(item){
        item.setMod('disabled');
      });
      // bind events handlers
      this._menu.on('item-click', this._onItemClick, this);
      this.nextTick(function() {
        this._menu.setMod('focused');
        this.bindToDoc('pointerclick', this._onDocPointerClick);
        this.bindToDoc('keydown', this._onDocKeyPress);
      });
    },
    _onHide : function() {
      this.elem('items').scrollTop(0);
      this._removeActiveMod();
      this._menu.setMod('disabled');
      // unbind events handlers
      this._menu.un('item-click', this._onItemClick);
      this.unbindFromDoc('pointerclick', this._onDocPointerClick);
      this.unbindFromDoc('keydown', this._onDocKeyPress);
    },
    _onDocPointerClick : function(e) {
      dom.contains(this.domElem, $(e.target)) ||
        this.hideMenu();
    },
    _onDocKeyPress : function(e) {
      e.keyCode === keyCodes.ESC &&
        this.hideMenu();
    },
    _onItemClick : function(e, data) {
      this.emit('item-click', data.item.getVal().title || data.item.getVal());
      var item = this.findElem(data.item.domElem, 'item');
      this.getMod(item, 'lvl') === 'top' &&
        this.setMod(item, 'active');
      var submenu = this.findElem('items', 'id', this.getMod(item, 'id'));
      submenu.length?
        this.setMod(submenu, 'active') :
          this.hasMod('autoclose') &&
            this.hideMenu();
    }
  },
  {
    live : function(){
      this.liveBindTo('menu-button', 'pointerclick', function(e) {
        var type = this.getMod(e.currentTarget, 'toggle') || 'lvl1';
        this.toggleMenu(type);
      });
    }
  }
  ));
});
