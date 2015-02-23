([
  {
    mustDeps : [
      { block : 'i-bem', elem : 'dom' },
      { block : 'keyboard', elem : 'codes' },
      { block : 'menu', mods : { mode : 'radio' } },
      { elems : ['variables'] },
      'dom',
      'jquery',
    ],
    shouldDeps : [
      { elems : ['panel', 'menu-button']},
      { block : 'kg-menu', mods : { fix : 'scroll' } },
    ]
  }
]);
