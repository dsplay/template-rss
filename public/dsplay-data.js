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
  hasImage: true,
  qrCode: '../test-assets/qrcode.png',
  itemContent: 'Conteúdo da notícia',
  itemDescription: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item description
  itemContent: 'Content', // RSS item content
  itemTitle: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item title
  imageTitle: 'Image Title', // Title of RSS item image (if available)
  source: 'UOLIndoors', // An internal control field indicating the source of RSS.
  // You define the value of source when create a RSS Channel.
  // title: 'Breaking News', // The media title
  title: 'Últimas Notícias', // The media title

  // UOL
  // itemContent: 'Conteúdo da notícia',
  // itemDescription: 'Lorem ipsum dolor sit amet, &#36; consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item description
  // itemTitle: 'Celebridades', // RSS item title
};

var dsplay_template = {
  show_qr_code: 'true',
  // bg_color: 'yellow',
  logo: '../test-assets/uol.png',
  // logo_bg_color: 'pink',
  // title_color: 'green',
  title_bg_color: '#A00',
  // text_color: 'yellow',
  // text_bg_color: 'blue',
};
