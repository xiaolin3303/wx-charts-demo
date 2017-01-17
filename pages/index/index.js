Page({
    data: {},
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: '../charts/' + page + '/' + page
        });
    },
    onLoad: function() {

    }
})