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
        for (var i = 0; i < 6; i++) {
            categories.push('2016-' + (i + 1));
            data.push(Math.random()*(20-10)+10);
        }
        new wxCharts({
            canvasId: 'areaCanvas',
            type: 'area',
            categories: categories,
            animation: true,
            series: [{
                name: '成交量1',
                data: data,
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }],
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0,
                fontColor: '#8085e9',
                gridColor: '#8085e9',
                titleFontColor: '#f7a35c'
            },
            xAxis: {
                fontColor: '#7cb5ec',
                gridColor: '#7cb5ec'
            },            
            width: windowWidth,
            height: 300,
            dataPointShape: false
        });
    }
});