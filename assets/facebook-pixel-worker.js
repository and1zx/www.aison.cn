var otButtonCheckoutWorker='.bettercart_checkout,[name^="checkout"],[name^="checkout"] .loader-button__text,.shopify-payment-button__button,.btn-checkout,a.fbq-checkout,.checkout_btn,.OTCheckout,.OTCheckout span,#cart .action_button.right';function otDetectPixels(t){console.log("%c Omega Facebook pixels: Event tracking using the Web worker codebase","color: black; background: #EFDCCC;padding: 5px; border-radius: 5px");let e={...OT_DATA_CUSTOMER__TRACK_FB};""!=ot_ip&&(e={...e,client_ip_address:ot_ip}),t.forEach(t=>{fbq("init",t,e)})}function otHandleCheckWorkingPage(){return"undefined"!=typeof omegaFBSettings&&void 0!==omegaFBSettings.settings.is_enable_web_pixel&&"0"!=omegaFBSettings.settings.is_enable_web_pixel&&"1"==omegaFBSettings.settings.enable}otHandleCheckWorkingPage()&&otMultiFacebookPixelWorker({},omegaFBSettings.settings);var debounceTimeout=null;function checkAddToCartEvent(){var r={};getItemOnCartPageFB(function(t){var e=localStorage.getItem("item_count");localStorage.setItem("OTPXADDED",1),e!=t.item_count&&window.localStorage.setItem("item_count",t.item_count);let c="1"==omegaFBSettings.settings.content_type_event?"product":"product_group";if(e<t.item_count){let o=t.items[0],n=(localStorage.setItem("OTPXADDED",0),localStorage.setItem("item_count",t.item_count),o.variant_id),a=("product_group"==c&&(n=o.product_id),generateEventID(36));"1"==omegaFBSettings.settings.capi_track_addtocart&&(arrayFBPixelTrack.forEach(function(t,e){otfbq(""+t,"AddToCart",{content_ids:n,content_type:c,value:parseInt(o.price)/100,content_name:o.product_title,currency:Shopify.currency.active},a)}),e=detectLastInfoATCByProductId(o.product_id,t.items),trackEventFBConversionAPI(r,{action:"AddToCart",event_id:a,event_source_url:fb_pageURL,content_ids:n,content_type:c,value:parseInt(o.price)/100,content_name:o.product_title,currency:Shopify.currency.active,pixels:arrayFBPixelTrack,shop:Shopify.shop,products:e,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign}))}})}async function otMultiFacebookPixelWorker(n,a){let c="1"==a.content_type_event?"product":"product_group";if("undefined"!=typeof arrayFBPixelTrack&&0<arrayFBPixelTrack.length){if(otDetectPixels(arrayFBPixelTrack),"1"==a.capi_track_pageview&&-1==fb_pageURL.indexOf("/products/")&&"1"!=a.is_enable_trigger&&(r=generateEventID(36),fbq("track","PageView",{},{eventID:r}),trackEventFBConversionAPI(n,{action:"PageView",event_id:r,event_source_url:fb_pageURL,pixels:arrayFBPixelTrack,shop:Shopify.shop,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign})),-1<fb_pageURL.indexOf("/products/")){i=-1<fb_pageURL.indexOf("?")?(i=fb_pageURL.split("?"))[0]+".json":fb_pageURL+".json";var r=await otGetInfoProductByLink(i),i=(-1<r.title.indexOf("'")&&(r.title=r.title.replace(/'/g,"")),generateEventID(36));let e=ot_getUrlParam("variant"),t=e??meta.product.variants[0].id,o=("product_group"==c&&(t=(void 0!==r.id?r:meta.product).id),r.variants[0].price);null!=e&&meta.product.variants.forEach(t=>{t.id==e&&(o=parseInt(t.price)/100)}),"1"==a.capi_track_pageview&&fbq("track","PageView",{},{eventID:i}),"1"==a.capi_track_viewcontent&&(fbq("track","ViewContent",{content_ids:[t],content_type:c,value:o,content_name:r.title,currency:Shopify.currency.active},{eventID:i}),trackEventFBConversionAPI(n,{action:"ViewContent",event_id:i,event_source_url:fb_pageURL,content_ids:[t],content_type:c,value:o,content_name:r.title,currency:Shopify.currency.active,pixels:arrayFBPixelTrack,shop:Shopify.shop,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign}))}-1<fb_pageURL.indexOf("/search")&&"1"==a.capi_track_search&&(i=generateEventID(36),fbq("track","Search",{search_string:ot_getUrlParam("q")||""},{eventID:i}),trackEventFBConversionAPI(n,{action:"Search",event_id:i,search_string:ot_getUrlParam("q")||"",event_source_url:fb_pageURL,pixels:arrayFBPixelTrack,shop:Shopify.shop,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign})),"1"!=a.is_enable_trigger&&document.addEventListener("click",function(t){otEventClickIsMatchesDom(t,2==a.is_enable_web_pixel?"ot_pixel_detect-sample":otButtonCheckoutWorker,otListAllCustomCheckout)&&getItemOnCartPageFB(function(t){otTrackICWorker(arrayFBPixelTrack,a,t,c)})})}}function otTrackICWorker(t,n,a,c){var r={};if("1"==n.capi_track_checkout){n=a;if(0<n.items.length){let e=[],o=[];n.items.forEach(function(t){e.push("product_group"==c?t.product_id:t.variant_id),o.push(t.product_title)});a=generateEventID(36);fbq("track","InitiateCheckout",{content_type:c,content_ids:e,currency:Shopify.currency.active,value:parseFloat(n.total_price)/100,num_items:n.item_count,content_name:o},{eventID:a}),trackEventFBConversionAPI(r,{action:"InitiateCheckout",event_id:a,event_source_url:fb_pageURL,content_ids:e,content_type:c,num_items:n.item_count,value:parseFloat(n.total_price)/100,content_name:o,currency:Shopify.currency.active,pixels:t,shop:Shopify.shop,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign})}else if(void 0!==meta.product){let o=generateEventID(36);t.forEach(function(t,e){otfbq(""+t,"InitiateCheckout",{content_type:c,content_ids:("product_group"==c?meta.product:meta.product.variants[0]).id,currency:Shopify.currency.active,value:meta.product.variants[0].price,num_items:1,content_name:meta.product.variants[0].name},o)}),trackEventFBConversionAPI(r,{action:"InitiateCheckout",event_id:o,event_source_url:fb_pageURL,content_ids:("product_group"==c?meta.product:meta.product.variants[0]).id,content_type:c,num_items:1,value:meta.product.variants[0].price,content_name:meta.product.variants[0].name,currency:Shopify.currency.active,pixels:t,shop:Shopify.shop,obj_fbp_fbc:otGetAttributeFBCAndFBP(),...OT_DATA_CUSTOMER,...ot_information_campaign})}}}setTimeout(()=>{new MutationObserver(function(t){t.forEach(function(t){debounceTimeout&&clearTimeout(debounceTimeout),debounceTimeout=setTimeout(()=>{var t;null!=localStorage.getItem("OT_DATA_TRIGGER_ATC_NEW_TRIGGER")?otHandleCheckWorkingPage()?(t=JSON.parse(localStorage.getItem("OT_DATA_TRIGGER_ATC_NEW_TRIGGER")),omegaCallBackAddToCartTrigger(t)):localStorage.removeItem("OT_DATA_TRIGGER_ATC_NEW_TRIGGER"):otHandleCheckWorkingPage()&&checkAddToCartEvent(),debounceTimeout=null},1e3)})}).observe(document.documentElement,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0})},2e3);