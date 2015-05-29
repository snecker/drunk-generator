//入口

/**
 * 使用时请修改 moduleName 为自己的名字
 * 最好加上namespace方便其他module引用
 * @author: wangpeng
 *
 */

esun.use([
    "drunk",
    "drunk.app",
    "esun.util.platform",
    "esun.util.share",
    "module.config",
    "module.view.homepage",
    "module.view.subpage",
], function (drunk, App, platform, shareUtil, config) {
    "use strict";

    platform.ready(function () {
        if (platform.isWeixin) {
            // 如果在微信里并且没有登录，自动跳转登录
            if (!platform.isLogin()) {
                //return platform.login();
            }
            // 设置通用分享
            shareUtil.share(config.share.common, {withoutMask: true});
        }
        else if (platform.isApp) {
            EsApp.invoke("sharebtn", {isShow: '1'});
            EsApp.invoke("titlebar", {isShow: 0});
            EsApp.on("sharebtnclicked", function () {
                shareUtil.share(config.share.common);
            });
        }
        //router
        var app = new App({
            index: "/",
            route: {
                "/subpage": "module-view-subpage",
                "/": "module-view-homepage",
            }
        });

        app.run();
    });

})
