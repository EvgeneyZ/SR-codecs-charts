
            $(function () {
                $(document).ready(function() {
                    var bar_options = {
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        chart: {
                            type: 'bar',
                            zoomType: 'xy'
                        },
                        legend: {
                            enabled: false
                        },
                        xAxis: {
                            title: {
                                text: ''
                            }
                        },
                        yAxis: {min: 0, title: {text: ''}},
                        plotOptions: {bar: {dataLabels: {enabled: true}}},
                        series: [],
                        credits: {
                            text: 'videoprocessing.ai',
                            href: 'https://videoprocessing.ai/'
                            },
                    };
                    bar_options.series.push({name: '', data: [1.0, 1.175, 1.354, 1.356, 1.371, 1.406, 1.428, 1.484, 1.495, 1.502, 1.58, 1.603, 1.605, 1.656, 1.74]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'iSeeBetter (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'RealSR (50%, x4)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-x265-skiing-chart', bar_options);
                });
            });
            
            