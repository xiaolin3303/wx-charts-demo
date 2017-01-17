var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
Page({
    data: {
    },

    onReady: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }

        var categories = [];
        var data = [];
        for (var i = 0; i < 12; i++) {
            categories.push('2016-' + (i + 1));
            data.push(Math.random() * (20-10) + 10);
        }
        new wxCharts({
            canvasId: 'columnCanvas',
            type: 'column',
            animation: true,
            categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
            series: [{
                name: '成交量1',
                data: [15, 20, 45, 37, 4, 80],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '成交量2',
                data: [70, 40, 65, 100, 34, 18],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }],
            yAxis: {
                format: function (val) {
                    return val + '万';
                },
                title: 'hello'
            },
            xAxis: {
                disableGrid: true
            },
            width: windowWidth,
            height: 200,
        });
    }
});