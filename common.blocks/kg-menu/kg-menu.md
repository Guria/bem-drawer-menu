item:
```js
{
  title: '',    // title of item
  value: '',    // if not set, json of item used as value
  url: '',      // link url
  glyph: '',    // glyph name from kg-glyph
  iconUrl: '',  // url for icon as background-image
  iconCls: '',  // icon classname (for manual styling or icon font usage)
  content: [    // use for group of items
    sub_items   // sub_item has only `title`, `value` and `url` fields
  ]
}
```
`settingsItem` can't has a sub_items.
`versionItem` has the same fields as sub_item.

bem api
----
json fields:

* items - [item]
* settingsItem
* versionItem

mods:

* autoclose +
* visible [ false, 'lvl1', 'full' ] +

elems:

* menu-button

methods:

* showMenu +
* hideMenu +
* toggleMenu +
* setSelected -

events:

* item-click
* visible-changed

jquery api
----
settings:

* items
* settingsItem
* versionItem
* autoclose
* visible
* menuButton jQuery

events:

* item-click
* visible-changed

kendo api
----
* dataSource { items, settingsItem, versionItem }
* autoclose
* visible
* menuButton??

events:

* item-click
* visible-changed
* databind
* databound