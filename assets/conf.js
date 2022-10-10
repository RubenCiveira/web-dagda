let host = '';
host = 'http://localhost:8080/';
host = 'https://bridgit-api.civeira.net/';

window.config = {
  production: false,
  api: {
    'net-civeira-ejemplos-agenda': {
      connector: 'rest',
      identity: 'main',
      url: {
        base: host + 'api/bridgit/compras/collecion',
        acl: host + 'api/bridgit/compras/me/acl',
        upload: host + 'api/bridgit/compras/upload/temp',
      },
    },
  },
  identity: {
    main: {
      url: {
        me: host + 'api/bridgit/compras/me/',
        token: host + 'oauth/token',
      },
      auth: 'U2FsdGVkX1+Yaw/VuFODRudrPqK6PwhjpgxEilvUjZGzj7MzfbIgPjKZ5GdxBk8G',
    },
  },
  crash: {
    url: host + 'api/bridgit/compras/crash/',
    type: 'rest',
    authentication: 'U2FsdGVkX1+d1NiEniYnNMxoUowWUJoDEvixZRDCeLI=',
  },
  contextName: 'testidentidades',
  locales: ['es', 'en', 'gl'],
  languages: {
    Español: {
      code: 'es-ES',
      flag: './assets/i18n/es.svg',
    },
    Gallego: {
      code: 'gl-GL',
      flag: './assets/i18n/gl.svg',
    },
    Ingles: {
      code: 'en-EN',
      flag: './assets/i18n/en.svg',
    },
  },
  style: {
    input: 'float',
    notify: 'toast',
    button: {
      action: 'raised',
      inline: '',
      toolbar: 'raised',
      'popup-action': 'stroked',
      'toolbar-icon': '',
    },
    toolbar: {
      withText: true,
    },
    list: {
      action: 'embbed',
      buttons: {
        'show-some-contextual': 0,
        'show-some-selection': 3,
      },
    },
  },
};
