modules.define('menu', ['jquery', 'keyboard__codes'], function(provide, $, keyCodes, Menu) {
  provide(Menu.decl(
  {
    _scrollToItem : function(item) {
      var parent;
      item.domElem.parents().each(function(){
        if (this.scrollHeight > this.clientHeight) {
          parent = $(this);
          return false;
        }
      });
      if (!parent) { return; }
      var domElemOffsetTop = parent.offset().top,
          itemDomElemOffsetTop = item.domElem.offset().top,
          relativeScroll;

      if((relativeScroll = itemDomElemOffsetTop - domElemOffsetTop) < 0 ||
        (relativeScroll =
          itemDomElemOffsetTop +
          item.domElem.outerHeight() -
          domElemOffsetTop -
          parent.outerHeight()) > 0) {
            parent.stop().animate({
              scrollTop: parent.scrollTop() + relativeScroll
            }, 200, function (x, t, b, c, d) {
              return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            });
          }
    },
    _onItemHover : function(item) {
        if(item.hasMod('hovered')) {
            this._hoveredItem && this._hoveredItem.delMod('hovered');
            this._hoveredItem = item;
        } else if(this._hoveredItem === item) {
            this._hoveredItem = null;
        }
    },

    _onKeyDown : function(e) {

        if(e.keyCode === keyCodes.ENTER || e.keyCode === keyCodes.SPACE) {
            this
                .unbindFromDoc('keydown', this._onKeyDown)
                .bindToDoc('keyup', this._onKeyUp);

            e.keyCode === keyCodes.SPACE && e.preventDefault();
            this._onItemClick(this._hoveredItem, { source : 'keyboard' });
        }

        var keyCode = e.keyCode,
            isArrow = keyCode === keyCodes.UP || keyCode === keyCodes.DOWN;

        if(isArrow && !e.shiftKey) {
            e.preventDefault();

            var dir = keyCode - 39, // using the features of key codes for "up"/"down" ;-)
                items = this.getItems(),
                len = items.length,
                hoveredIdx = items.indexOf(this._hoveredItem),
                nextIdx = hoveredIdx,
                i = 0;

            do {
                nextIdx += dir;
                nextIdx = nextIdx < 0? len - 1 : nextIdx >= len? 0 : nextIdx;
                if(++i === len) return; // if we have no next item to hover
            } while(items[nextIdx].hasMod('disabled'));

            this._lastTyping.index = nextIdx;

            this._scrollToItem(
              this._hoveredItem = items[nextIdx].setMod('hovered')
            );

        }
    },
    _onItemClick : function(clickedItem) {
      this.__base.apply(this, arguments);

      this.getItems().forEach(function(item) {
        item === clickedItem?
          item.toggleMod('checked') &&
            this._scrollToItem(item) :
          item.delMod('checked');
      }, this);
      this._isValValid = false;
      this.emit('change');
    }
  }, {}));

});
