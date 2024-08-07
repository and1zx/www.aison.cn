
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.c1bcb7261747791a187b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3294.latest.en.505731505c8cd53cfba6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5362.latest.en.b0f0331c261276f5cfc2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7623.latest.en.16df4ae6665efdfa22ef.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.35a61ccb8cf841568018.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9033.latest.en.255b8a9d0304673e30f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3639.latest.en.09446188c829691a7789.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1519.latest.en.31d9fdc0eefc437489a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4028.latest.en.62dd5a7a2ae8b57b38b7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4760.latest.en.7751a7cb7404aa2e3d4f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8733.latest.en.46a96e8c3d26a53169c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4253.latest.en.b2f2c0194e74c8f5a7e6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3337.latest.en.d8b95532c673f7c8f8ce.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.5d5b5edc84cf1700bbb8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/3294.latest.en.39e037bce4997f545a3a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5da3f52c706a09a6da39.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.24776bc55f29002e680f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0797/9588/0247/files/IKARAO_03-10_x320.png?v=1690106049"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  