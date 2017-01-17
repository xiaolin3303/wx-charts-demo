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
            animation: true,
            canvasId: 'ringCanvas',
            type: 'ring',
            title: {
                name: '70%',
                color: '#7cb5ec',
                fontSize: 40
            },
            subtitle: {
                name: '收益率',
                color: '#666666',
                fontSize: 20
            },
            series: [{
                name: '成交量1',
                data: 15,
                stroke: false
            }, {
                name: '成交量2',
                data: 35,
                 stroke: false
            }, {
                name: '成交量3',
                data: 78,
                stroke: false
            }, {
                name: '成交量4',
                data: 63,
                 stroke: false
            }],
            width: windowWidth,
            height: 300,
            dataLabel: false,
            legend: false,
            padding: 0
        });
    }
});