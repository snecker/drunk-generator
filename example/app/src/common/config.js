/**
 * Created by wangpeng on 2015/5/29.
 */
esun.def('module.config', function () {
    'use strict';

    var exports = {};

    //分享
    exports.share = {
        //通用分享
        common: {
            content: "大家在玩小羊快跑！",
            icon: "http://img.500.com/upimages/wap/img/20150213153208147.png",
            title: "【500彩票网】小羊快跑，抢金币赢红包",
            url: location.href
        }
    }
    //文案
    exports.text = {
        alert: {
            SUC: '成功'
        }
    }

    return exports;
})