var menu_items = [
  {
    title: 'Справочники МКС',
    content: [
      'Модули Международной Космической Станции',
      { title: 'Экспедиции', url: '#Экспедиции'},
      'Космонавты',
    ]
  },
  {
    title: 'Параметры НПИ',
    content: [
      'Программы НПИ',
      'Версии программ НПИ',
    ]
  },
  {
    title: 'Справочники НПИ',
    content: [
      'Категории НА',
      'Типы этапов подготовки',
      'Типы интерфейсов',
      'Секции КНТС',
      'Направление исследований',
      'Категории НА',
      'Типы этапов подготовки',
      'Типы интерфейсов',
      'Секции КНТС',
      'Направление исследований',
      'Категории НА',
      'Типы этапов подготовки',
      'Типы интерфейсов',
      'Секции КНТС',
      'Направление исследований',
      'Категории НА',
      'Типы этапов подготовки',
      'Типы интерфейсов',
      'Секции КНТС',
      'Направление исследований',
      'Категории НА',
      'Типы этапов подготовки',
      'Типы интерфейсов',
      'Секции КНТС',
      'Направление исследований',
    ]
  },
  {
    title: 'Участники',
    iconUrl: '//merit.kg.ru/images/merit/empls.svg',
    content: [
      'Сотрудники',
      'Организации',
      'Роли участников',
    ]
  },
  {
    title: 'Журнал НА',
    iconUrl: '//cdn4.iconfinder.com/data/icons/general11/png/48/phone.png'
  },
  {
    title: 'Журнал КЭ',
    url: "#Журнал КЭ"
  },
  {
    title: 'Планирование',
    iconCls: 'fa fa-calendar'
  }
];

modules.require( ['jquery'], function($){                   // ваш код для получения jQuery из AMD, CommonJS или просто window
    $('head').append($('<link href="http://proto.localtunnel.me/desktop.bundles/kg-menu-build/_kg-menu-build.css" rel="stylesheet">'));
    $("body").append($('<div class="kg-menu-button"></div>'));
    $("body").append($('<div class="kg-menu-placeholder"></div>'));
    var config = {
      items: menu_items,                                    // JSON для формирования меню
      button: $('.kg-menu-button'),                           // DOM-элемент для кнопки меню. class и дочерние DOM ноды будут сохранены
      type: 'progressive',                                  // Тип раскрытия меню `full` - сразу, `progressive` - только первый уровень
      autoclose: false,                                     // Автоскрытие при выборе пункта меню
      versionItem: 'v3.14.15',                               // Текст для элемента `version`
      settingsItem: { title: 'Настройки' }
    };
    $('.kg-menu-placeholder').kgMenu(config)                         // DOM-элемент для размещения меню. class будет сохранён, дочерние DOM ноды заменены
    $('.kg-menu-button').css({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '64px',
      height: '64px',
      'z-index': 65500
    });
    $('.kg-menu-placeholder').css({
      position: 'absolute',
      top: '64px',
      right: 0,
      bottom: 0,
      'z-index': 65500
    });
   /*   .on('item-click', function(e, data){                  // Обработчик клика по пунктам меню, не обязателен если в JSON для меню используются url
        $('.demo__header').text(data.item.getVal().title || data.item.getVal());
      })*/
});