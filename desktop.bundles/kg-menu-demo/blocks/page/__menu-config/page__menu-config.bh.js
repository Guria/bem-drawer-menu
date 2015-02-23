var config = {
  items : [{ 
    title : 'Первое',
    content : [
      'Раз — ромашка',
      'Два — ромашка',
      'Три — ромашка',
      'А я четвёртую нашёл',
      'Пять — ромашка',
      'Шесть — ромашка',
      'Семь!'
    ],
  },{ 
    title : 'Второе',
    value: 2,
    glyph : 'bars',
    content : [
      { title: 'Только название' },
      { title: 'Название и ссылка', url: '#1' },
      { title: 'Название и значение', value: 2 },
      { title: 'Всё вместе', url: '#42', value: 42 },
    ]
  },{
    title : 'Компот',
    iconUrl : 'https://cdn4.iconfinder.com/data/icons/miu/22/food-drink_cup_coffee_tea_drink-128.png'
  },{
    title : 'Десертик',
    iconCls : 'fa fa-birthday-cake'
  }],
  settingsItem : { title : 'Настройки' },
  versionItem : 'v3.14.15',
  autoclose : false,
  visible : undefined,
  progressive : true
}

module.exports = function(bh){
  bh.match('page__menu-config', function(ctx){
    ctx
      .tag('textarea')
      .content(JSON.stringify(config, null, 2));
  });
}