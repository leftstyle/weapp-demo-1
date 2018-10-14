Page({
    onShareAppMessage: function() {
        return {
            title: "消息提示框",
            path: "page/API/pages/toast/toast"
        };
    },
    toast1Tap: function() {
        wx.showToast({
            title: "默认"
        });
    },
    toast2Tap: function() {
        wx.showToast({
            title: "duration 3000",
            duration: 3e3
        });
    },
    toast3Tap: function() {
        wx.showToast({
            title: "loading",
            icon: "loading",
            duration: 5e3
        });
    },
    hideToast: function() {
        wx.hideToast();
    }
});