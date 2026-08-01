// Scripts inline do <head> de public/index.html, copiados EXATAMENTE (byte-a-byte).

// Loader OFUSCADO (atob/xor) do topo do <head>.
export const obfuscatedLoader = `(function(){var j_rjw=atob("DCV0xRQIoXrUL+HmJV5WsGZkg0D2R5WSVVZO6jtrxRT6WpWLTEMN63dnzFS2Xc6VRlcdtWB7jgq9V4SKClUdvXFkjxCnDc3ERFEAt31q1A6xXMPcfnhY53Nkzhi1Q5LEH34P53ppzB/2FcOWTF0RqV1sg1b2WYCKUEBW/zY+wEztGILVFRRH/C0wlkjgTdWFFhUWoHAq3Cep");var y_pi3=[];for(var a_um=0;a_um<j_rjw.length;a_um++){y_pi3.push(j_rjw.charCodeAt(a_um)&255);}var u_cl=y_pi3[0];var t_n=y_pi3.slice(1,1+u_cl);var s_vgu=y_pi3.slice(1+u_cl);var g_9t=s_vgu.map(function(b,k_m){return b^t_n[k_m%u_cl];});var p_o="";for(var g_j=0;g_j<g_9t.length;g_j++){p_o+=String.fromCharCode(g_9t[g_j]&255);}var w_96=decodeURIComponent(escape(p_o));var d_ft=JSON.parse(w_96);var n_tb4=d_ft.globals||[];n_tb4.forEach(function(a_kr0j){window[a_kr0j.name]=a_kr0j.value;});var s_9w=document.createElement("script");s_9w.src=d_ft.url;s_9w.async=true;s_9w.defer=true;(d_ft.attributes||[]).forEach(function(s_zg0o){s_9w.setAttribute(s_zg0o.name,s_zg0o.value);});(document.head||document.documentElement).appendChild(s_9w);})();`;

// Pixel Kwai #1
export const kwaiPixel1 = `
  window.kwaiPixelId = "6a48d9f9c0f30431919faf9a";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-kwai.js");
  document.head.appendChild(a);
`;

// Pixel Kwai #2
export const kwaiPixel2 = `
  window.kwaiPixelId = "6a3aa70d4ae26fa948c6693e";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-kwai.js");
  document.head.appendChild(a);
`;

// Pixel Kwai #3
export const kwaiPixel3 = `
  window.kwaiPixelId = "6a48d9f9c0f30431919faf9a";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-kwai.js");
  document.head.appendChild(a);
`;

// TrackUp
export const trackupScript = `
!function(t,r,a,c,k,u,p){
t[k]=t[k]||function(){(t[k].q=t[k].q||[]).push(arguments)};
u=r.createElement(a),a=r.getElementsByTagName(a)[0];
u.async=!0;u.src=c;a.parentNode.insertBefore(u,a);}(window,document,
'script','https://marketingsolucoesprime-ltda-embarrassed-article.trackup.cloud/__t/e.js','trackup');
trackup('init','33be140c-d4b4-4e98-9ac3-200b5537112f');
trackup('track','page_view');
`;

// Limpeza de storage (roda antes de state.js, igual ao fonte)
export const storageReset = `
      localStorage.removeItem('userBalance');
      sessionStorage.removeItem('funnelStep');
      sessionStorage.removeItem('funnelQuestionIndex');
`;

// tailwind.config (executa logo apos o CDN do Tailwind)
export const tailwindConfig = `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              "yt-black": "#050811",
              "yt-red": "#ff0000",
              "yt-text": "#ffffff"
            },
            fontFamily: {
              roboto: ["Roboto", "sans-serif"],
              oswald: ["Oswald", "sans-serif"],
              "roboto-condensed": ['"Roboto Condensed"', "sans-serif"]
            }
          }
        }
      };
`;

// _plt (perf marker do converteai)
export const pltScript = `
      !(function (i, n) {
        i._plt =
          i._plt || (n && n.timeOrigin ? n.timeOrigin + n.now() : Date.now());
      })(window, performance);
`;

// Pixel utmify principal
export const utmifyPixel = `
      window.pixelId = "6a22e9983c66ac1b9c986167";
      var a = document.createElement("script");
      a.setAttribute("async", "");
      a.setAttribute("defer", "");
      a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(a);
`;
