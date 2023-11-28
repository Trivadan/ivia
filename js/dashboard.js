$(function () {
    "use strict";
    // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            TotalLeads: 0,
            ConvertedLeads: 0,
        },
        {
            period: '2011',
            TotalLeads: 130,
            ConvertedLeads: 100,
        },
        {
            period: '2012',
            TotalLeads: 80,
            ConvertedLeads: 60,
        },
        {
            period: '2013',
            TotalLeads: 70,
            ConvertedLeads: 200,
        },
        {
            period: '2014',
            TotalLeads: 180,
            ConvertedLeads: 150,
        },
        {
            period: '2015',
            TotalLeads: 105,
            ConvertedLeads: 100,
        },
        {
            period: '2016',
            TotalLeads: 250,
            ConvertedLeads: 150,
        }],
        xkey: 'period',
        ykeys: ['TotalLeads', 'ConvertedLeads'],
        labels: ['Total Leads', 'Converted Leads'],
        pointSize: 0,
        fillOpacity: 0,
        pointStrokeColors: ['#f62d51', '#2586DB', '#FF3A29'],
        behaveLikeLine: true,
        gridLineColor: '#f6f6f6',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#FF3A29', '#2586DB', '#FF3A29'],
        resize: true
    });

});