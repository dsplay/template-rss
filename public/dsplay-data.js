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
  itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // RSS item description
  itemContent: 'Content', // RSS item content
  itemTitle: 'Celebridades', // RSS item title
  imageTitle: 'Image Title', // Title of RSS item image (if available)
  source: 'CNN', // An internal control field indicating the source of RSS.
  // You define the value of source when create a RSS Channel.
  title: 'Últimas notícias' // The media title
};

var dsplay_template = {
  // hasQrCode: 'true',
  logo: '../test-assets/uol.png'
};
