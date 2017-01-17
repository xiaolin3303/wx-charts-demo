var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
Page({
    data: {
    },
    onLoad: function (e) {
        let windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        let categories = [];
        let data = [];
        for (var i = 0; i < 50; i++) {
            categories.push('2016-' + (i + 1));
            data.push(Math.random()*(20-10)+10);
        }

        new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: categories,
            animation: false,
            background: '#f5f5f5',
            series: [{
                name: '成交量1',
                data: data,
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 300,
            dataLabel: false,
            dataPointShape: false
        });
    }
});