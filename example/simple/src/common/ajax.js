/**
 * ajax请求
 */
esun.def("module.ajax", [
    "drunk.util",
    "esun.util.platform"
], function (util, platform) {
    "use strict";

    //本地环境，上线注释掉
    platform.initEnv({
        wx500: 'wx.500boss.com',
        ews: 'm.500boss.com/ews'
    });

    var HOST = platform.protocol + platform.domain.ews + '/guess';

    return {
        /**
         * 请求比赛数据和用户投注数据
         */
        info: function (matchid) {
            return util.ajax({
                url: HOST + "/info" + (matchid ? '?match_id=' + matchid : ''),
                type: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                }
            });
        },
        /**
         * 更新选择内容
         */
        updateBet: function (data) {
            return util.ajax({
                url: HOST + "/submit",
                type: "POST",
                dataType: "json",
                data: data,
                contentType: "application/json;charset=UTF-8",
                xhrFields: {
                    withCredentials: true
                }
            });
        }

    };
});
