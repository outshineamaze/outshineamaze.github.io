/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2015/07/01/coding/Python实例一个类发生了什么/Python实例一个类背后1.png","795192a058a5b8d470b2a76be4612f43"],["/2015/07/01/coding/Python实例一个类发生了什么/Python实例一个类背后2.png","944c8d812c9f0dd71891279476af01dc"],["/2015/07/01/coding/Python实例一个类发生了什么/index.html","d6b65e35686a1f47cc2aae9215e4f342"],["/2016/03/01/daily_think/我的编程之路-2016-3/index.html","33154579633c4ed76063a82a9eaac231"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/001.png","8419110df5a611ee28edb449e7073398"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/002.png","df454bf4f471a8198defabefe42a9161"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/003.png","62b1f17e1809228e40016c664622a4c3"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/004.png","8a8b8bbe143899d71eca7f832812bef7"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/005.png","e0dba43fe54b6facfdfd88e6c3b3aba6"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/006.png","16e4fa3b6417a57dd292c4981f5f327d"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/007.png","63555ff766817daf20b800b380d616de"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/008.png","c430d7c2d5ee040b9a9d74a1da2cd3f4"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/009.png","4fcf4e4292aed14d2c9dc2c603a73811"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/010.png","c9e3bee957f0d5eb7d26f23acb8495d4"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/011.png","e7780fd87da58a9272e596aa642421f6"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/index.html","b4f6896b35efebcee2945259059bfdff"],["/2016/04/01/daily_think/面经/index.html","2c985e11b9b475419d913fecb945783b"],["/2016/06/01/daily_think/学习记录/index.html","8868c64fa55f8a44d8eecdd1534f4281"],["/2016/07/01/coding/self-executing/index.html","cdfcccd28ce3d1629b0993630544170b"],["/2016/08/01/daily_think/2016下半年规划/index.html","ab4fedb172ed05bbe7c0f98551b6e855"],["/2016/08/01/daily_think/php-array_push/index.html","dd9f7190339c149c89b96306e9c9f52a"],["/2016/08/01/daily_think/学习记录201608/index.html","5e170a90214de3473e97b1453672bcc0"],["/2016/09/01/coding/js异步那些事/index.html","92b985f610268983494415bcad139e1b"],["/2016/10/01/daily_think/实习自评/index.html","6053451e122e68cdf10cd47e71e6abab"],["/2016/10/01/daily_think/工作周报161008-1017/index.html","24c14518c9a3048527f1aefeb30c8328"],["/2016/11/01/daily_think/读书之总结/index.html","f80dd446262f0fb8399e942dc369e135"],["/2016/11/06/daily_think/20161106-实习周报/index.html","33d42fd9f1727615f01006ddbfda6d4d"],["/2017/07/23/tech/Web前端Server框架学习与探索(承上)/index.html","e03af82f0c36b41f6053ea32191c59f5"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/1501247526_13_w478_h435.png","2972bdca4b0af6e6e9522bd4f5c5c72f"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/1501247580_47_w594_h700.gif","5fabc0c7e4a4cd892593583fd19c414a"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/index.html","f84e20fbcbbd74d9e5cc117d5647ad8c"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501589836_61_w1880_h806.png","438a9b174cb9ac99dd31917deca6ea35"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501589941_34_w1900_h868.png","5b37c7edda47afaf605c2a89870ade9d"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590001_50_w1508_h816.png","75453673faf8d91bc1b59d749462b899"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590331_94_w1854_h912.png","17c4750b379aa23564dbfaf560f22a4f"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590378_16_w1892_h1048.png","4831311668bde01d97e97aabb991afba"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590404_58_w1918_h1068.png","36dd643cff1ebf7027bbc87391cbb6bf"],["/2017/08/01/tech/NodeServer技术运维调研与探索/index.html","bddeb825e15ec029573ee7b3f1e5cc92"],["/2017/08/01/tech/探究HTTP2/index.html","dd368867933f5049a9488151091aaf3b"],["/2017/08/01/tech/探究HTTP2/探究http2.0.docx","911c8ac0e64bd6afd82e2d86a02c3791"],["/2017/08/13/tech/一个NodeJS多进程共享内存,高性能,文件存储,轻量KV数据库/index.html","9f3bfa8af97c8f81f9c2c4e94d3ee4e8"],["/2017/12/02/tech/React16-Fiber 源码阅读笔记/index.html","7d4274c35c9ea0ab3be0240f7c844f0c"],["/2018/01/07/tech/Node异步解决方案-co与async:await/index.html","c93eeffe9554482dfb8edb9d652540bb"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/1516278898_10_w2536_h1172.png","bf53d4f2c08cf3eb92e2cf2de2410a5f"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/1516278922_90_w2346_h1126.png","351b1b9c5c2add490fa5615910e52c91"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/index.html","89a57e441f9351a0c8a8bdecb58cb872"],["/2018/01/25/tech/浅谈React事件系统-事件绑定/index.html","c005315f048545871216193952ff6e85"],["/2018/01/25/tech/浅谈React事件系统-源码解读/index.html","16eb04ccc7a76fa3576a5be85b3e8d3f"],["/2018/09/04/tech/https改造总结/1536054571_65.png","c0bc32975220ccc10350facda2f7f962"],["/2018/09/04/tech/https改造总结/1536054679_7.png","6c9414ab8d6b30a2c5ea04b2142ffee9"],["/2018/09/04/tech/https改造总结/1536074678_5.png","56b3fc8e663639904c8703de88db5c03"],["/2018/09/04/tech/https改造总结/1536074823_57.png","5c99db9a38ad7a0c7ebf1c4691b095df"],["/2018/09/04/tech/https改造总结/1536075062_36.png","6c9414ab8d6b30a2c5ea04b2142ffee9"],["/2018/09/04/tech/https改造总结/index.html","cda08523a65a41e0eda119b33fe91a86"],["/2019/01/26/daily_think/使用hexo重新整理过去的文章/banner.png","59f7b9e6dddc1ddeede3c5610a92c456"],["/2019/01/26/daily_think/使用hexo重新整理过去的文章/index.html","b07da57062d3e3cd9c3b9af0cd7ed19d"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(一):背景/index.html","3105b8c1d5a3900b245fff0acf4bce38"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(三):数据驱动渲染/index.html","5fbc6026f81dc72782ae8d76f6f0d4d0"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(二):原生的方式/index.html","b93858ef1fb8a1c0e3ef7e8ce7cc9536"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(五):响应式状态管理/index.html","72b370aede2535d47c52c6292c4e9706"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(六):React Hook/index.html","c0a69e728791d050c28eb9e8ad555f45"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(四):Redux与Immutable/immer.png","2cb379df94261c2f107ab157c4037cea"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(四):Redux与Immutable/index.html","8aedfb00373a9dcd4bbdbd681d7a535a"],["/2020/05/07/tech/golang源码工程是如何提交代码的/6-step-commit.png","95c3e28f48b32e6d310f110394a7bf83"],["/2020/05/07/tech/golang源码工程是如何提交代码的/gerrit-cr.png","75d1bba5bd586ec3e06d2ec186e9c9d8"],["/2020/05/07/tech/golang源码工程是如何提交代码的/golang-cla.png","45351f5425e858d2c685489794f24c84"],["/2020/05/07/tech/golang源码工程是如何提交代码的/golang-goherbot.png","09411a266899e4a3e2d395a32ab129ba"],["/2020/05/07/tech/golang源码工程是如何提交代码的/index.html","982d5990f8783aef47b3b2cbc4cd364c"],["/archives/2015/07/index.html","bdc5b70782510012969f2f98f4f56846"],["/archives/2015/index.html","b3d482695722614e1b3012c9028a8d01"],["/archives/2016/03/index.html","21c28d7b2f6ef47ab9a786def920ee86"],["/archives/2016/04/index.html","fce443edbe2fb79990bf07bb3a88cebd"],["/archives/2016/06/index.html","a34c9ee70429fc043e4f2df23957d16f"],["/archives/2016/07/index.html","eecfceb5e905cfb8654c2d7cb3c00eb1"],["/archives/2016/08/index.html","0e3d69b95b7a939706da3c078c1f8f32"],["/archives/2016/09/index.html","75e18084590572bca37df516ce482137"],["/archives/2016/10/index.html","22bf629dbf0c659ed17390417cf15f29"],["/archives/2016/11/index.html","0c56ebf17690cf2e33c549c95222a83b"],["/archives/2016/index.html","6ab29cc915f5308e1f82a853a728f25c"],["/archives/2016/page/2/index.html","945a0443e0252e2a42b1b9b477c31d52"],["/archives/2017/07/index.html","1ddf07581cd38e085d1eb86a709d1227"],["/archives/2017/08/index.html","926aa208a0f4ea613a83a8315df95732"],["/archives/2017/12/index.html","3f8d4d03faf86b5197418864719119fa"],["/archives/2017/index.html","52e4399a936f34fc1ab63bb4a1c0f167"],["/archives/2018/01/index.html","cddf7dd131d7d60e77dd053526b70047"],["/archives/2018/09/index.html","6cdc986a2309e4e1e0df3b6d4d61d48e"],["/archives/2018/index.html","932b97b3b0eaf66ead16868c7ec42ce1"],["/archives/2019/01/index.html","5be8c32c1e12f4d3fb2c19d0abbd5265"],["/archives/2019/02/index.html","b93dd628243af58312bac4e7808c21e6"],["/archives/2019/index.html","1371b65595cf4ef50147a614fb2a6a2d"],["/archives/2020/05/index.html","2625259e1b3a6b99c6d51561f2e4bc1e"],["/archives/2020/index.html","83d51a127c6bf12b67b6ce9e917414e7"],["/archives/index.html","e67ac0595b8f11c2705bbddcef9e0a00"],["/archives/page/2/index.html","5ce1ae9827bdcffb1ef928df0a3c0a1b"],["/archives/page/3/index.html","c3145eb2ddb747e0d6f7a020dfec6a7d"],["/archives/page/4/index.html","dc333cf95fa951fc1cb9c8ca1a9b1fc9"],["/categories/Nodejs/index.html","2d63d77f3bdb3f185f147c3773283c58"],["/categories/React/index.html","983ea8a215150c4b13d7ec5721df1930"],["/categories/index.html","d796c508a3cd6bac24f1ec84fb847469"],["/categories/前端状态管理/index.html","18f53f1c2de6bfba25fadab837c484cc"],["/categories/实习总结/index.html","4cc0a926aec575fafa82902226a56440"],["/categories/持续交付/index.html","b0e948c282d9b0ab16f18360a3506f43"],["/css/main.css","dfe9bebf6f6e7368f4b664aa4133be8a"],["/images/avatars.png","8023f36c48392a01765684efd58f24f6"],["/images/favicon-16x16-next.ico","5a4dfbc3084a10e02ab249e281bd9052"],["/images/favicon-32x32-next.ico","69ae8a9f0c6f77f62186c554611f4db9"],["/images/icons/icon-128x128.png","4f09b60826f4834976bdd30905e84f7a"],["/images/icons/icon-144x144.png","12642ba183872853414c48e203c6c3cb"],["/images/icons/icon-152x152.png","aa60ba6194ed6971a63fe89a75f49f71"],["/images/icons/icon-192x192.png","f0e06b51e4987d27ad30f3c1663b0ce5"],["/images/icons/icon-384x384.png","0b15d78192bcce8fef7523b1f483baec"],["/images/icons/icon-512x512.png","0b15d78192bcce8fef7523b1f483baec"],["/images/icons/icon-72x72.png","33c7d93e30c9cce4afd60faca256e7e1"],["/images/icons/icon-96x96.png","e5e1302266a8b329b1854261cf92dd20"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","5c266aecdf6d4c27de49c580a98194de"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8c71f594862c8e01b166756837edd7c9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.otf","8f92c7f4c46a03326518a4fbad5d1b3d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.otf","202673272279abf200bd0e6ef6a96935"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/LICENSE","ce98bb429677db396a9a2969dc726350"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/bower.json","50ebebf43ccc629c814281e60fd049f0"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/HELP-US-OUT.txt","a1e5be58e81e919ba2e579cd1c65283e"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.css.map","8d57a9642cf62d824132266202eac56a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/bower.json","5f8449c87f33671904615bb63d8283cf"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/bower.json","76d1e61a2f857128f671328183bcc9aa"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","8359ac751e371d3ccd34dd3e1afd1cd0"],["/page/2/index.html","94f1bed8fd15274e30ab110a3e6c6a7b"],["/page/3/index.html","04b476839e510cda7da7b7f1d3cefd77"],["/page/4/index.html","b1e7a1d297915ea785379d951384a120"],["/page/5/index.html","e0af0dbb0bb1921b94d7b655f9d00781"],["/page/6/index.html","9a262e9f9e75f84eda2c21fbb07e7a93"],["/page/7/index.html","70a9df5b91e92fd8ea6a2299d34e3346"],["/search.json","13984c41ca0587506c493bf84efaab9c"],["/sitemap.xml","a30c7820ab9ef906bba4cdc13e7d41b9"],["/tags/Immer/index.html","680770b7346cccfb920894d08397df74"],["/tags/Immutable/index.html","6c48060f2edf1eb20d4dd1cb1786b703"],["/tags/Mobx/index.html","070ce1275a2a863edb5c384f6d3be908"],["/tags/React-Hook/index.html","b9b66862450a81143e603965dd765d13"],["/tags/Redux/index.html","213c90a4bf6c9e1146204be2f80fc6b5"],["/tags/Vue/index.html","56a3f01447d2b18019f92c8eeb9ff574"],["/tags/coding/index.html","8c3dd452b820d11366dedfcef232b8fe"],["/tags/daily-think/index.html","53a4358e2c904fb2d5ce7f9f4705dcc3"],["/tags/hexo/index.html","3bb69b49a3e13573a8ecfcaf5499cd5b"],["/tags/http/index.html","a7931c99517436460e080ccae1fc051c"],["/tags/http2/index.html","b4ac11a8f30be28e9a9ed05e6a2b5aa0"],["/tags/https/index.html","62ff69156628a3dd85b662a53dafb200"],["/tags/index.html","472a26d80df6bfb5082deb47a9c77c33"],["/tags/kv/index.html","f97450bffccb2eff7b6e7f70869df628"],["/tags/nodejs/index.html","bd8501be28008820e73eff1e6c0bced7"],["/tags/react/index.html","f4677ab0b85e02487d7e5aa875a58387"],["/tags/share-mem/index.html","fa7dd3f2833d1b0c07c9d16a5597eecb"],["/tags/translation/index.html","514c8055f5f94b420f4b19d6d1b78add"],["/tags/响应式状态管理/index.html","213f551aabb950fb32f4b5dfee591038"],["/tags/持续交付/index.html","7a0a0a93719006a702989c4255ce791f"],["/tags/数据驱动渲染/index.html","3d18d4c5481f87c14cfbc3814629897b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







