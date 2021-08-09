
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
                    bar_options.series.push({name: '', data: [1.0, 1.44, 1.476, 1.508, 1.607, 1.616, 1.623, 1.631, 1.654, 2.006, 2.008, 2.019, 2.124, 10.55, 13.788]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'DynaVSR-R (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'iSeeBetter (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'only compressed (50%)', 'topaz-amq-12 (50%, x2)', 'waifu2x_anime (50%, x2)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-AVS3-skiing-chart', bar_options);
                });
            });
            
            