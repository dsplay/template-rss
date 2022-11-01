var dsplay_config = {
  // config parameters
  locale: 'pt_br',
  orientation:
    window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
  // Android SDK version
  osVersion: 16,
  // DSPLAY App version code
  appVersion: 99
};

var dsplay_media = {
  id: 1,
  name: 'RSS CNN',
  count: 1,
  iteration: 4,
  duration: 15000,
  imageUrl: '../test-assets/Nighthawksreference.png',
  // hasImage: true,
  // qrCode: '../test-assets/qrcode.png',
  link: 'https://dsplay.tv',
  imageTitle: 'Image Title', // Title of RSS item image (if available)
  title: 'Breaking News', // The media title
  // title: 'Últimas Notícias', // The media title
  
  itemContent: 'Content', // RSS item content
  itemDescription: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item description
  // itemTitle: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item title
  itemTitle: '\'Se morre sua mãe, é 100%. Perda é absoluta\'. Diz médica paliativista sobre ameaça do corona', // RSS item title
  // itemTitle: 'Jogo criano na UFPU, em Uberada é registrado no INPI como programa de computador', // RSS item title
  source: 'UOLIndoors', // An internal control field indicating the source of RSS.


  // UOL
  // itemContent: 'Conteúdo da notícia',
  // itemDescription: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item description
  // itemTitle: 'Celebridades', // RSS item title
  // source: 'UOLIndoor', // An internal control field indicating the source of RSS.
};

var dsplay_template = {
  show_qr_code: 'true',
  // bg_color: 'yellow',
  // logo: '../test-assets/uol.png',
  // logo_bg_color: 'red',
  // title_color: 'green',
  // title_bg_color: '#A00',
  // text_color: 'yellow',
  // text_bg_color: 'blue',
};
