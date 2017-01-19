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
                disableGrid: false,
                type: 'calibration'
            },
            width: windowWidth,
            height: 200,
        });
    }
});