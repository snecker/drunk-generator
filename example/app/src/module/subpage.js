/**
 * Created by wangpeng on 2015/5/29.
 */
esun.def('module.view.subpage', [
    'drunk',
    'module.config',
    'module.ajax',
], function (drunk, config, ajax) {
    'use strict';
    return drunk.Component.extend({
        name:'module-view-subpage',
        templateUrl: 'tpl/module/sub-page.html',
        //初始化
        init: function () {
            console.log('this is init in subpage..');
        },
        //监听
        watch: {},
        //事件处理
        handlers: {},
        //过滤器
        filters: {}
    })
})