({
  block : 'page',
  title : 'BEM drawer menu demo',
  styles: [
    { elem : 'css', url : '_kg-menu-build.css' },
    { elem : 'css', url : '_kg-menu-demo.css' },
    { elem : 'css', url : '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' }
  ],
  scripts : [
    { elem : 'js', url : '_kg-menu-build.js' },
    { elem : 'js', url : 'page.js' }
  ],
  content: [{ 
    elem : 'header',
    content: [{ content : 'Logo' }, { content : 'Title' }, {
      elem : 'menu-button'
    }]
  },{
    elem : 'menu-container'
  },{
    elem : 'content',
    content : [{
      elem : 'menu-config'
    },{
      block : 'button',
      mix : { block : 'page', elem : 'generate' },
      mods : { theme : 'islands', size : 'xl', view : 'action'},
      text : 'Сгенерировать меню' 
    }]
  }]
})