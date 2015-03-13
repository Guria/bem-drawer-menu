([
  {
    mustDeps : [
      { block : 'i-bem', elem : 'dom' },
      { elems : ['variables'] }
    ],
    shouldDeps : [
      { block : 'keyboard', elem : 'codes' },
      { block : 'menu', mods : { mode : 'radio' } },
      'dom',
      'jquery',
      { elems : ['panel', 'menu-button']},
      { block : 'kg-menu', mods : { fix : 'scroll' } },
    ]
  }
]);
