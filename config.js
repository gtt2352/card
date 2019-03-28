/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名

var host = 'https://www.gtt2352.xyz/';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    video: host + '',
    lunbo: host + 'index/index/lunbo',
    single:host + 'index/index/single',
    useradd:host + 'index/index/useradd',
    like: host + 'index/index/like',
    collection: host + 'index/index/collection',
    changeCollection: host + 'index/index/changeCollection',
    changeLike: host + 'index/index/changeLike',
    comment: host + 'index/index/comment',
    addComment: host + 'index/index/addComment',
    upload: host + 'index/index/upload',
    search: host + 'index/index/search'
  }
};

module.exports = config;