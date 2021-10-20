var OUT = {};
var env = ulink.getQueryString("ulenv");
OUT.site = {
    url: '//ulink.game.qq.com/app/5090/4d3f1863ed731612/index.php',
    htmlUrl:'https://pvp.qq.com/act/6531/a20210826skinzbj/index.html',
    iActId: '6531',//活动ID
    game: 'yxzj',
    sAppId: 'ULINK-TBRJ-729002'//腾讯优联APPID
};
//在之前先引入对应JS 初始化
var LoginManager = ulink.LoginManager;
LoginManager.init({
    openLinkUrl: ""
});

var shareOptions = {
    iActId: OUT.site.iActId, // 活动号
    title: '送你一个限定皮肤！快来拿！', // 分享标题
    desc: '全新皮肤猪悟能，周年文创限定皮肤，签到就送！',  // 分享内容简介
    link: window.location.href,  // 分享链接
    imgUrl: 'https://game.gtimg.cn/images/yxzj/act/6531/a20210826skinzbj/share.jpg', // 分享后朋友看到的图标，大小不能超过32K
    WXtrigger: function (res) { // 微信分享点击事件回调

    },
    WXsuccess: function (res) { // 微信分享后回调

    },
    QQcallback: function (res) { // qq成功、失败、或取消的回调
    },
};
ulink.share.init(shareOptions);

//用户登录
OUT.login = {
    isLogin: 0,//0未登录 1已登录
    doLogin: function () {
        if (ulink.isQQApp()) {
            LoginManager.login();
        } else if (ulink.isWxApp()) {
            LoginManager.loginByWx();
        }
    },
    qq: function() {
        LoginManager.openLink();
    },
    logout: function () {
        LoginManager.logout(function () {
            window.location.reload();
        });
    }
};


function alertTips(msg, func) {
    func = func || 'closeDialog();';
    $('#popComm .title').text(msg);
    $('#popComm a').attr('href', 'javascript:' + func);
    TGDialogS('popComm')
}

OUT.role = {
    channel:'',
    isBindRole: false,
    // 点击绑定大区按钮, 进行基础判断， 并请求角色sign值
    showBindRoleDialog: function () {
        if (OUT.login.isLogin === false) {
            return OUT.login.doLogin();
        }
        ulink.http.get({
            url: OUT.site.url + '?route=Role/getRoleSecretInfo',
            params: {
                'sAppId': OUT.site.sAppId,
                'game': OUT.site.game,
                'iActId': OUT.site.iActId
            },
            success: function (result) {
                if (result.iRet != 0) {
                    alertTips(result.sMsg);
                } else {
                    window.role = OUT.role.createRoleSelector(OUT.role.setOptions(result.jData));
                    console.log('roleselector========>' + JSON.stringify(window.role));
                    window.role.show();
                    TGDialogS('bindRole')
                }
            },
            error: function (e) {
            }
        });
    },
    // 设置options值
    setOptions: function (data) {
        console.log('=====>' + JSON.stringify(data));
        var obj =  {
            "sAppId": OUT.site.sAppId,  //腾讯优联APPID
            "iActId": OUT.site.iActId,   //活动ID
            "sSign": data.data.sSign,
            "game": OUT.site.game,
            "timestamp": data.data.timestamp,
            "sCode": data.data.sCode,
            "filterChannels":OUT.role.channel,
            custom: true,    // 自定义皮肤必须指定为true
            UISettings: {   // 以下属性必须指定，且不能为空
                dialog: ulink.$('#bindRole'), // RoleSelector弹框
                channelSelect: ulink.$('#plat'), // 渠道下拉框
                systemSelect: ulink.$('#system'),  // 系统下拉框
                areaSelect: ulink.$('#server'),    // 大区下拉框
                serverSelect: ulink.$('#ulinkServerSelect'),    // 服务器下拉框
                roleSelect: ulink.$('#role'),    // 角色下拉框
                roleSelectParent: ulink.$('#ulinkRoleSelectParent'), // 角色下拉框父节点
                errorMsgPanel: ulink.$('#ulinkErrorMessage'), // 错误信息展示面板
                confirmButton: ulink.$('#ulinkConfirmBtn'), // 确定按钮
                cancelButton: ulink.$('#btnCloseBind2'), // 取消按钮
                closeButton: ulink.$('#btnCloseButton'), // 关闭按钮
            }
        };

        return obj;
    },
    // 调起角色选择器
    createRoleSelector: function (options) {
        var roleselector = new ulink.RoleSelector(options);
        //角色查询数据返回监听事件绑定
        roleselector.on("getRoleData", function (data) {
            OUT.role.data = data;
            TGDialogS('bindTip');
        });

        if(OUT.role.isBindRole){
            console.log('roleInfo===============' + OUT.user.roleInfo);
            roleselector.on("renderAreaSuccess",function(data){
                // 角色选择赋值
                roleselector.roleSelectChange(OUT.user.roleInfo.area, OUT.user.roleInfo.platId, OUT.user.roleInfo.partition, OUT.user.roleInfo.roleId);
            });
        }
        return roleselector;
    },
    // 请求后台接口， 绑定角色信息
    bindRole: function () {
        ulink.http.get({
            url: OUT.site.url + '?route=Role/bindUserInfo',
            params: {
                'iActId': OUT.site.iActId,
                'area': OUT.role.data.area,
                'platId': OUT.role.data.platId,
                'partition': OUT.role.data.partition,
                'roleId': OUT.role.data.roleId,
                'game': OUT.site.game
            },
            success: function (result) {
                console.log('bindRole=========>' + JSON.stringify(result));
                if(result.iRet != 0){
                    alertTips(result.sMsg);
                    return;
                }
                OUT.role.isBindRole = true;
                alertTips(result.sMsg, 'closeDialog();OUT.user.indexInitStatus();');
            },
            error: function (e) {
            }
        });
    }
};



OUT.user = {
    roleInfo: [],
    dataInfo: [],
    shareOpenid: false,
    sharePartitionId: false,
    // 首页初始化
    indexInitStatus: function () { //index状态初始化

        var shareUsername = ulink.getQueryString('shareUsername');
        ulink.http.get({
            url: OUT.site.url + '?route=User/indexInitStatus',
            params: {
                'sAppId': OUT.site.sAppId,
                'iActId': OUT.site.iActId,
                'game': OUT.site.game,
                'shareOpenid' : OUT.user.shareOpenid,
                'sharePartitionId' : OUT.user.sharePartitionId
            },
            success: function (result) {
                console.log('indexInitStatus=============' + JSON.stringify(result))
                if (result.iRet == 4001) {
                    alertTips(result.sMsg,'OUT.role.showBindRoleDialog();');
                    return;
                } else if (result.iRet == -1 && result.jData.code == -111) {
                    alertTips(result.sMsg, 'OUT.login.logout();');
                    return;
                } else if (result.iRet != 0) {
                    alertTips(result.sMsg);
                    return;
                }
                var data = result.jData;
                OUT.user.roleInfo = data.roleInfo;
                OUT.role.isBindRole = true;
                OUT.user.dataInfo = data;
                $('#userinfo').text(data.roleInfo.roleName);
                $('#logined a').eq(0).text('更改绑定');

                if(data.isGetKey != 0){
                    // 非0代表已经领取过钥匙了
                    $('.keytip span').eq(0).text(1);
                }

                if(data.keyStatus == 0){
                    $('.status').text('不可领取');
                }else if(data.keyStatus == 1){
                    $('.status').text('可领取');
                }else if(data.keyStatus == 2){
                    $('.status').text('已被' + data.getName + '领取');
                }
            }

        });
    },

    // 领取钥匙
    getKey: function () {
        if(OUT.login.isLogin === false){
            return OUT.login.doLogin();
        }

        if(OUT.role.isBindRole === false){
            return OUT.role.showBindRoleDialog();
        }

        if(OUT.user.dataInfo['isGetKey'] != 0){
            TGDialogS('fail');
            return;
        }else if(OUT.user.dataInfo['isSelf'] != 0){
            alertTips('同一账号下的角色不能互相领取');
            return;
        }else if(OUT.user.dataInfo['isOpenBox'] != 0){
            TGDialogS('fail3');
            return;
        }else if(OUT.user.dataInfo['keyStatus'] == 2){
            TGDialogS('fail2');
            return;
        }else if(OUT.user.dataInfo['keyStatus'] != 1){
            alertTips('领取失败, 当前分享的钥匙不可领取');
            return;
        }

        ulink.http.get({
            url: OUT.site.url + '?route=User/getKey',
            params: {
                'sAppId': OUT.site.sAppId,
                'iActId': OUT.site.iActId,
                'game': OUT.site.game,
                'shareOpenid' : OUT.user.shareOpenid,
                'sharePartitionId' : OUT.user.sharePartitionId
            },
            success: function (result) {
                console.log('getKey=============' + JSON.stringify(result))
                if (result.iRet == 4001) {
                    alertTips(result.sMsg,'OUT.role.showBindRoleDialog();');
                    return;
                } else if (result.iRet == -1 && result.jData.code == -111) {
                    alertTips(result.sMsg, 'OUT.login.logout();');
                    return;
                }

                if(result.iRet == 111){
                    TGDialogS('fail2');
                }else if(result.iRet == 444){
                    alertTips('领取失败, 当前分享的钥匙不可领取');
                }else if(result.iRet == 222){
                    alertTips('同一账号下的角色不能互相领取');
                }else if(result.iRet == 333){
                    TGDialogS('fail');
                }else if(result.iRet == 777){
                    TGDialogS('fail3');
                }else if(result.iRet == 0){
                    TGDialogS('getReward');
                    OUT.user.indexInitStatus();
                }else {
                    alertTips('系统繁忙, 请稍候再试~')
                }
            }

        });
    }
};

function init(){
    LoginManager.checkLogin(function (userInfo) { //检查登录态

        OUT.user.shareOpenid = ulink.getQueryString('shareOpenid');
        OUT.user.sharePartitionId = ulink.getQueryString('sharePartitionId');

        if(!OUT.user.shareOpenid || !OUT.user.shareOpenid){
            alertTips('非法请求', 'window.location.reload()');
            return;
        }


        if (ulink.isWxApp()) {
            OUT.role.channel = ['手Q-安卓(android)', '手Q-苹果(iOS)', '手Q-安卓抢先服'];
        } else if (ulink.isQQApp()) {
            OUT.role.channel = ['微信-安卓(android)', '微信-苹果(iOS)', '微信-安卓抢先服'];
        }



        if ((ulink.isWxApp() || ulink.isQQApp()) && ulink.getQueryString("msdkEncodeParam")) {
            window.location.href = OUT.site.htmlUrl;
            return;
        }



        OUT.login.isLogin = 1;
        $("#unlogin").hide();
        $("#logined").show();
        var shareName = ulink.getQueryString('shareUsername');
        console.log('走到这里了，昵称是' + shareName);
        if(shareName.length > 6){
            shareName = shareName.substring(0,6) + '...';
        }

        $('.guest-title span').text(shareName);
        OUT.user.indexInitStatus();
    }, function () {
        OUT.login.doLogin();
        console.log('checkLogin ==========> 未登录');
    });
}

window.onload = function () {
    init();
};
