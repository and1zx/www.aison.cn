
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.b51eb474d575e071b4ca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/898.latest.en.e2056ab0532551c6d8b2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6276.latest.en.a91148d59ab9163c723b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7623.latest.en.16df4ae6665efdfa22ef.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.77d490266b002aae945f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9033.latest.en.255b8a9d0304673e30f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3502.latest.en.9ed854e0783852147f46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1519.latest.en.31d9fdc0eefc437489a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4028.latest.en.6f1084847f02fe5521cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4760.latest.en.ab12414459c92abe7738.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/737.latest.en.0afa78b864e662edb91a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4253.latest.en.b2f2c0194e74c8f5a7e6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3337.latest.en.640b48a106dd2e36b0a6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.c7860e85243fb9110500.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/898.latest.en.bf98f2a828ce392d598d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5da3f52c706a09a6da39.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.c793d5ab74b8a64f0ebd.css"];
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
  