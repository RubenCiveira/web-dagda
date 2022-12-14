locale = {
  name: 'gl',
  weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
  months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Septembro_Outubro_Novembro_Decembro'.split('_'),
  weekStart: 1,
  weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
  monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
  weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
  ordinal: (n) => n,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
  },
  relativeTime: {
    future: 'en %s',
    past: 'fai %s',
    s: 'uns segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'unha hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un ano',
    yy: '%d amos',
  },
};
