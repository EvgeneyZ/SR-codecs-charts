
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
                    bar_options.series.push({name: '', data: [0.897, 0.911, 0.974, 1.0, 1.631, 1.637, 1.718, 1.746, 1.773, 1.908, 1.929, 2.034, 2.082, 2.268, 2.596]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'only compressed (100%)', 'iSeeBetter (50%, x2)', 'EGVSR (50%, x2)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'only compressed (50%)', 'RealSR (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-x265-street_show-chart', bar_options);
                });
            });
            
            