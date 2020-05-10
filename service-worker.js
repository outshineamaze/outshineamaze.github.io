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

var precacheConfig = [["/2015/07/01/coding/Python实例一个类发生了什么/Python实例一个类背后1.png","795192a058a5b8d470b2a76be4612f43"],["/2015/07/01/coding/Python实例一个类发生了什么/Python实例一个类背后2.png","944c8d812c9f0dd71891279476af01dc"],["/2015/07/01/coding/Python实例一个类发生了什么/index.html","4205d2248e488f28baac36a96ed3124a"],["/2016/03/01/daily_think/我的编程之路-2016-3/index.html","0bffed35d0b2ecb8aefad6de5948429b"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/001.png","8419110df5a611ee28edb449e7073398"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/002.png","df454bf4f471a8198defabefe42a9161"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/003.png","62b1f17e1809228e40016c664622a4c3"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/004.png","8a8b8bbe143899d71eca7f832812bef7"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/005.png","e0dba43fe54b6facfdfd88e6c3b3aba6"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/006.png","16e4fa3b6417a57dd292c4981f5f327d"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/007.png","63555ff766817daf20b800b380d616de"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/008.png","c430d7c2d5ee040b9a9d74a1da2cd3f4"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/009.png","4fcf4e4292aed14d2c9dc2c603a73811"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/010.png","c9e3bee957f0d5eb7d26f23acb8495d4"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/011.png","e7780fd87da58a9272e596aa642421f6"],["/2016/04/01/blog_tanslation/高性能网络浏览器_TSL/index.html","b9f7266491c8553b143adf458ba83f4d"],["/2016/04/01/daily_think/面经/index.html","3edd053f5a96cfdc6e610fc13ce15fb9"],["/2016/06/01/daily_think/学习记录/index.html","5d07eaa2f89d847ba6372848b9d82f18"],["/2016/07/01/coding/self-executing/index.html","eb6443bf8dfcd0d6f7ead1a8fc653147"],["/2016/08/01/daily_think/2016下半年规划/index.html","e9f273b11b49b40f4157377f1bd768ba"],["/2016/08/01/daily_think/php-array_push/index.html","8806fce37b8e1cd1a3cd6cd67b0fcfde"],["/2016/08/01/daily_think/学习记录201608/index.html","224098e2ad041dafdeeb103ff8601c22"],["/2016/09/01/coding/js异步那些事/index.html","e3f11715e6a497c70ed6b7c533770ad7"],["/2016/10/01/daily_think/实习自评/index.html","ee90462e8f5a0e95b9af8ef3a5e6843d"],["/2016/10/01/daily_think/工作周报161008-1017/index.html","006575f20c3314aaa4020b70a8af1f86"],["/2016/11/01/daily_think/读书之总结/index.html","4032334365ec7e0883422f27c6433bab"],["/2016/11/06/daily_think/20161106-实习周报/index.html","34162df2efd00554ce58b06c86bfb91d"],["/2017/07/23/tech/Web前端Server框架学习与探索(承上)/index.html","372d19d63d88c825389bbab6859c1a50"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/1501247526_13_w478_h435.png","2972bdca4b0af6e6e9522bd4f5c5c72f"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/1501247580_47_w594_h700.gif","5fabc0c7e4a4cd892593583fd19c414a"],["/2017/07/28/tech/浅谈Web前端中间件两种模型与实现/index.html","aa3c0fb753d9ab0f4ddbda65471a09ea"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501589836_61_w1880_h806.png","438a9b174cb9ac99dd31917deca6ea35"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501589941_34_w1900_h868.png","5b37c7edda47afaf605c2a89870ade9d"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590001_50_w1508_h816.png","75453673faf8d91bc1b59d749462b899"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590331_94_w1854_h912.png","17c4750b379aa23564dbfaf560f22a4f"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590378_16_w1892_h1048.png","4831311668bde01d97e97aabb991afba"],["/2017/08/01/tech/NodeServer技术运维调研与探索/1501590404_58_w1918_h1068.png","36dd643cff1ebf7027bbc87391cbb6bf"],["/2017/08/01/tech/NodeServer技术运维调研与探索/index.html","0728417d9a47af7f3042258697e3af2f"],["/2017/08/01/tech/探究HTTP2/index.html","d757bc008b62d0ad535ac0b80e71afcb"],["/2017/08/13/tech/一个NodeJS多进程共享内存,高性能,文件存储,轻量KV数据库/index.html","f5255ae5ccb529a4559cc6c3ca6c072c"],["/2017/12/02/tech/React16-Fiber 源码阅读笔记/index.html","292a306cd873e0a71fc35b053727dd66"],["/2018/01/07/tech/Node异步解决方案-co与async:await/index.html","6de3d76f429f273c3e5d4462d302a7ab"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/1516278898_10_w2536_h1172.png","bf53d4f2c08cf3eb92e2cf2de2410a5f"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/1516278922_90_w2346_h1126.png","351b1b9c5c2add490fa5615910e52c91"],["/2018/01/18/tech/ReactUI组件设计理念与重构Tree组件实践/index.html","169b76420d9cbe7ebb5fb7349cd3bb62"],["/2018/01/25/tech/浅谈React事件系统-事件绑定/index.html","13f0a7473f7c2a247dc89bc998ed85b7"],["/2018/01/25/tech/浅谈React事件系统-源码解读/index.html","e4af724970640f931e854647ff65f49d"],["/2018/09/04/tech/https改造总结/1536054571_65.png","c0bc32975220ccc10350facda2f7f962"],["/2018/09/04/tech/https改造总结/1536054679_7.png","6c9414ab8d6b30a2c5ea04b2142ffee9"],["/2018/09/04/tech/https改造总结/1536074678_5.png","56b3fc8e663639904c8703de88db5c03"],["/2018/09/04/tech/https改造总结/1536074823_57.png","5c99db9a38ad7a0c7ebf1c4691b095df"],["/2018/09/04/tech/https改造总结/1536075062_36.png","6c9414ab8d6b30a2c5ea04b2142ffee9"],["/2018/09/04/tech/https改造总结/index.html","6728e7a549bd45bf4926ba38cb51aa75"],["/2019/01/26/daily_think/使用hexo重新整理过去的文章/banner.png","59f7b9e6dddc1ddeede3c5610a92c456"],["/2019/01/26/daily_think/使用hexo重新整理过去的文章/index.html","e19d0f26b0fb4dfb55f1cbd6a04f1b51"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(一):背景/index.html","55ccd120d3b148b15e6c3c70abbc37cc"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(三):数据驱动渲染/index.html","7dbb2ddc3f72d6ef49a396d13356e88f"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(二):原生的方式/index.html","7e8ff2f9a5f5d60f3952e6c1e3167ad3"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(五):响应式状态管理/index.html","bdf7ce121aea75ea11a04d21e7f6701e"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(六):React Hook/index.html","fe39625231482d0402dbfc6fab01382c"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(四):Redux与Immutable/immer.png","2cb379df94261c2f107ab157c4037cea"],["/2019/02/19/tech/浅析组件化时代的前端状态管理(四):Redux与Immutable/index.html","1dec6ddc4e49b42dea94602ec43bc676"],["/2020/05/07/tech/golang源码工程是如何提交代码的/6-step-commit.png","95c3e28f48b32e6d310f110394a7bf83"],["/2020/05/07/tech/golang源码工程是如何提交代码的/gerrit-cr.png","75d1bba5bd586ec3e06d2ec186e9c9d8"],["/2020/05/07/tech/golang源码工程是如何提交代码的/golang-cla.png","45351f5425e858d2c685489794f24c84"],["/2020/05/07/tech/golang源码工程是如何提交代码的/golang-goherbot.png","09411a266899e4a3e2d395a32ab129ba"],["/2020/05/07/tech/golang源码工程是如何提交代码的/index.html","15f1f08ab7f0fb43b4b0f04334333625"],["/2020/05/09/daily_think/学会使用纯键盘工作/alfred.gif","396a55c7371198420f0b0fcf7c7a1dfd"],["/2020/05/09/daily_think/学会使用纯键盘工作/app时间分布.png","4062efc271281e5591050cc804d1252d"],["/2020/05/09/daily_think/学会使用纯键盘工作/index.html","ca66b2d2d9c48bd5640171c8dcf81be6"],["/2020/05/09/daily_think/学会使用纯键盘工作/karabinor_elements.png","0036fa63cd1a2b716712c6863e1b9ea8"],["/2020/05/09/daily_think/学会使用纯键盘工作/terminal_vscode.png","836c09937a74433b53878bac2f5ce1f5"],["/2020/05/09/daily_think/学会使用纯键盘工作/vim_motion.gif","fc882a027c985319b870d84be0b40855"],["/2020/05/09/daily_think/学会使用纯键盘工作/vimium.gif","a743f06c91923ae430d8099dfc2aa9d9"],["/archives/2015/07/index.html","04ce54123dd410625e39514e279bd68d"],["/archives/2015/index.html","9334b099d9efa4df89e13bfbad744c64"],["/archives/2016/03/index.html","f4a62a0c6657b394a8d117730390579e"],["/archives/2016/04/index.html","4534e1a7a82f219d7bb0e2b32c3c2849"],["/archives/2016/06/index.html","78c6af54d8899e0c5392826a631a8d51"],["/archives/2016/07/index.html","e00f6ded8d0fa7505a638107e1635cbf"],["/archives/2016/08/index.html","0d215256107679dc3d06fa9f57edcb89"],["/archives/2016/09/index.html","b4a6c13dd43b7a4cd4e9a6653ea0f5f3"],["/archives/2016/10/index.html","53ce78ad31a6558c9ee080955244b8e6"],["/archives/2016/11/index.html","3e85db4454041bafce607d812ca5433d"],["/archives/2016/index.html","54a43f59fdeb8b067ebaaea9632f4cd6"],["/archives/2016/page/2/index.html","3cfdcd766206831d379177a05b5e7c1a"],["/archives/2017/07/index.html","bc791fade033a681ef306f54575b9258"],["/archives/2017/08/index.html","ce6c671963b8554404e549ee2d34cf18"],["/archives/2017/12/index.html","b7ed86151e38ea02d6c819447a9e8c3b"],["/archives/2017/index.html","bb6d5b8d626a4c3e1017273f582f570d"],["/archives/2018/01/index.html","55f62754c076d374cabe124cd8d4fb9e"],["/archives/2018/09/index.html","5727bbad0a87f22fca0ae1eed60353b5"],["/archives/2018/index.html","b1223229c8c985568d5c5a9b36707bb5"],["/archives/2019/01/index.html","f36eec996cba51227ada239b349c7adb"],["/archives/2019/02/index.html","72c997038026ca695c936e65eb09bc6c"],["/archives/2019/index.html","a8bf24a7557175a62ab4a58f5a10663d"],["/archives/2020/05/index.html","c519e45ba33d0f193cd4578d4892babf"],["/archives/2020/index.html","800760b4fb4a9b34d42cd354857cf766"],["/archives/index.html","3a0f6d6caefedbabbdd5fa240358ebdb"],["/archives/page/2/index.html","409ce4c48549cfd3817b1ddc27c9d18c"],["/archives/page/3/index.html","c16799e3a02e31b26ca6d02c530f5241"],["/archives/page/4/index.html","2112d85c15fb6fddb6212cea881105f4"],["/categories/Nodejs/index.html","d2cd08c3df4e44a314300452e6f76be6"],["/categories/React/index.html","81dbf89d18ae3f02e991e58149a3c493"],["/categories/index.html","37e45a838e53712f4df38046a0beef9e"],["/categories/前端状态管理/index.html","b1f5f496fce2f62ff45f0dfa16ffd3ee"],["/categories/实习总结/index.html","9c5fbada291aa3f34406f311c06c3d24"],["/categories/持续交付/index.html","c7b15d640f90243bea769eb1f1ce983a"],["/categories/日常/index.html","b58ac9b0cd2149e080c08d802f3a14f7"],["/categories/编程语言/index.html","37744e906f0d3363d2452e7a70ea1ed3"],["/categories/网络协议/index.html","9fe1696e7b75bc961433ee5db10f26b9"],["/css/main.css","617fa00f83c2dd9519eb26e5111a8542"],["/images/avatars.png","8023f36c48392a01765684efd58f24f6"],["/images/favicon-16x16-next.ico","5a4dfbc3084a10e02ab249e281bd9052"],["/images/favicon-32x32-next.ico","69ae8a9f0c6f77f62186c554611f4db9"],["/images/icons/icon-128x128.png","4f09b60826f4834976bdd30905e84f7a"],["/images/icons/icon-144x144.png","12642ba183872853414c48e203c6c3cb"],["/images/icons/icon-152x152.png","aa60ba6194ed6971a63fe89a75f49f71"],["/images/icons/icon-192x192.png","f0e06b51e4987d27ad30f3c1663b0ce5"],["/images/icons/icon-384x384.png","0b15d78192bcce8fef7523b1f483baec"],["/images/icons/icon-512x512.png","0b15d78192bcce8fef7523b1f483baec"],["/images/icons/icon-72x72.png","33c7d93e30c9cce4afd60faca256e7e1"],["/images/icons/icon-96x96.png","e5e1302266a8b329b1854261cf92dd20"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","5c266aecdf6d4c27de49c580a98194de"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","375c573017a835b98f89773d82b65e66"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/bower.json","50ebebf43ccc629c814281e60fd049f0"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/bower.json","5f8449c87f33671904615bb63d8283cf"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/bower.json","76d1e61a2f857128f671328183bcc9aa"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","8359ac751e371d3ccd34dd3e1afd1cd0"],["/page/2/index.html","8ce9bb6c82e94578f0298c71f1241f27"],["/page/3/index.html","18d3aa2da8c8f202a9b427677a2d1ec5"],["/page/4/index.html","bf14e5b92eba4d3c253e416be5a1699e"],["/page/5/index.html","1a1030401c21ed5346625fe531e470f4"],["/page/6/index.html","9cd1f3ad5fe167ff9883d8b082ab0172"],["/page/7/index.html","3487157e43350e2564cf5c3efd667bf2"],["/search.json","1d9cd423df98c2fc3769b239bc45cbf0"],["/sitemap.xml","7baaa397198ebd9a648d42fd1325bdf6"],["/tags/B-tree/index.html","e5db9e81f308133f7c0eb6140cae6600"],["/tags/HHKB/index.html","0e300d1755884e2a7ce65fc12db9210c"],["/tags/Immer/index.html","6344e8d060ddca3f50bd9caaa406d119"],["/tags/Immutable/index.html","087cfd288a567ac9cbc5e45105ac881d"],["/tags/JS/index.html","ba6134120a281b262b3b7fa86473918b"],["/tags/JS异步编程/index.html","4add5e9ceabddc72f6c7828ab9ec21a6"],["/tags/Mobx/index.html","43d1a15f603c79144d077aa14d3454a9"],["/tags/Mysql/index.html","5eb6c72d0576abd379700a657d7f547e"],["/tags/React-Hook/index.html","ce634d2c1d70916c9cfc22badb4da2f1"],["/tags/Redux/index.html","60b24d93596f2b2b7c660ca5ad0465a5"],["/tags/TSL/index.html","e26f7bf0eccc1f35c0da2e16fdca206e"],["/tags/VIM/index.html","1842b9fdb5f707efca886df6bcc319f1"],["/tags/Vue/index.html","f1e6f7f487bbd2b7c0372cf1f297edc2"],["/tags/coding/index.html","8c3dd452b820d11366dedfcef232b8fe"],["/tags/daily-think/index.html","d9f253f5c93a975741e548b2ec40dd11"],["/tags/golang/index.html","e2e58bb7b12f3fe80ee8e3805e4ce04b"],["/tags/hexo/index.html","a25a2695dd3e8b0be50f921bfca64682"],["/tags/http/index.html","b11486333ea87dd3a113a4c07e5e91af"],["/tags/http2/index.html","ec6f99d2b87dc4ac7e45a30f9670c2a1"],["/tags/https/index.html","ec57246444cd3c55a7d7ac64f350fafb"],["/tags/index.html","fabe766360b96dd353d18d390394d01f"],["/tags/kv/index.html","f97450bffccb2eff7b6e7f70869df628"],["/tags/kv缓存数据库/index.html","d86fba9642da2ca05627e91581a0a011"],["/tags/nodejs/index.html","7b11a61ed88cf100a89cdd344fa99c83"],["/tags/node框架/index.html","252e7cf2d70dd3707ad918020feb15c1"],["/tags/php/index.html","ac7c3dc6636d4040808214f2e8a3c96a"],["/tags/python/index.html","54418c941c448b867f299d85e80d2a5f"],["/tags/react/index.html","3a455ea60e8db918ecf683a814fe1939"],["/tags/share-mem/index.html","c68fd1ef1a2d4891a023d8aa32119540"],["/tags/translation/index.html","514c8055f5f94b420f4b19d6d1b78add"],["/tags/tsw/index.html","12615a94fe57222e5c1233411b816707"],["/tags/六步提交法/index.html","545f6e3dc268e022fd6fcba9ffa4ccbb"],["/tags/响应式状态管理/index.html","68746d155880a9631e5d53e4dfdb7f35"],["/tags/持续交付/index.html","a9e70aacb885cfec3fd4a9671dd6e175"],["/tags/数据驱动渲染/index.html","2fc8f3c80cc531e7d82f55202004ca42"],["/tags/纯键盘工作/index.html","e2ed2ee03d1b1c11186417bc005001bb"],["/tags/运维/index.html","1fc079a0e9d83d7b1b020a9c81b5baec"],["/tags/进程管理/index.html","79887a6547e5862306955f2454b2d5c1"]];
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







