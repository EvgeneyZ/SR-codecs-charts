
                $(function () {
                    $(document).ready(function() {
                        plot_options = {
                        chart: {
                            zoomType: 'xy'
                        },
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        yAxis: {
                            title: {
                                text: ''
                            }
                        },
                        xAxis: {
                            title: {
                                    text: ''
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'bottom',
                            floating: true,
                            itemStyle: {
                                "fontSize" : "10px",
                            },
                            width: 340,
                            layout: 'horizontal',
                            y: -50,
                        },
                        colors: [
                            '#5FADF5',
                            '#5FF5D2',
                            '#E6845E',
                            '#E3E645',
                            '#000000',
                            '#E66ADB',
                            '#AB9EE6',
                            '#407A5B'
                        ],
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                            }
                        },
                        navigation: {
                            buttonOptions: {
                                align: 'right',
                                verticalAlign: 'top',
                                y: 0
                            }
                        },
                        series: [],
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    }
                                }
                            }]
                        },
                        credits: {
                            text: 'videoprocessing.ai',
                            href: 'https://videoprocessing.ai/'
                            },
                        };
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.107, 0.7194964899999999], [0.25, 0.81419732], [0.488, 0.8658615899999998], [0.827, 0.8953475199999998], [1.743, 0.9219689999999998], [3.653, 0.93629801], [5.657, 0.9402825700000002]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.107, 0.72350288], [0.25, 0.81774236], [0.488, 0.8690126699999997], [0.827, 0.8962689699999999], [1.743, 0.91969842], [3.653, 0.9318608099999999], [5.657, 0.93547997]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.107, 0.73809823], [0.25, 0.8288252000000002], [0.488, 0.8783801800000001], [0.827, 0.9059296999999998], [1.743, 0.9301132099999998], [3.653, 0.9426371], [5.657, 0.94610661]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.107, 0.7272407200000002], [0.25, 0.820613], [0.488, 0.87448072], [0.827, 0.90531219], [1.743, 0.9342927], [3.653, 0.9497691700000002], [5.657, 0.9542422200000001]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.107, 0.7236029699999998], [0.25, 0.81771739], [0.488, 0.8696011500000002], [0.827, 0.8992785000000002], [1.743, 0.9260747700000002], [3.653, 0.94021445], [5.657, 0.9441350500000002]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.178, 0.67310934], [0.351, 0.8292258499999999], [0.574, 0.9082219500000001], [0.889, 0.9447651400000001], [1.854, 0.97309341], [3.898, 0.9920757100000002], [6.033, 0.9967702799999999]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.108, 0.72055128], [0.256, 0.8286267700000001], [0.504, 0.8854043699999999], [0.86, 0.9109892199999997], [1.804, 0.9303898599999999], [3.762, 0.9390343500000001], [5.797, 0.9409362200000001]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.107, 0.7456800700000003], [0.25, 0.8423625100000001], [0.488, 0.90239767], [0.827, 0.9323792999999999], [1.743, 0.95369528], [3.653, 0.9606941300000001], [5.657, 0.96202956]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.107, 0.71843989], [0.25, 0.81356775], [0.488, 0.86611531], [0.827, 0.8963155400000001], [1.743, 0.92365853], [3.653, 0.93812918], [5.657, 0.9421126299999999]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.107, 0.71301327], [0.25, 0.8060466899999998], [0.488, 0.85753472], [0.827, 0.8871900599999999], [1.743, 0.9142206900000001], [3.653, 0.9286185900000002], [5.657, 0.9325598499999999]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.107, 0.7688577199999999], [0.25, 0.8914642900000002], [0.488, 0.9432932799999999], [0.827, 0.9619115300000003], [1.743, 0.9721566099999999], [3.653, 0.97524763], [5.657, 0.9761450799999999]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.107, 0.80801943], [0.25, 0.9198132699999999], [0.488, 0.9555475099999999], [0.827, 0.9668045699999999], [1.743, 0.9733414499999999], [3.653, 0.97565211], [5.657, 0.9762858099999998]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.107, 0.79162112], [0.25, 0.9111733799999999], [0.488, 0.94916991], [0.827, 0.96236063], [1.743, 0.9711671199999999], [3.653, 0.9749132999999999], [5.657, 0.9760201099999999]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.107, 0.72063438], [0.25, 0.8205285600000001], [0.488, 0.8747606600000001], [0.827, 0.9040315600000001], [1.743, 0.9276634500000001], [3.653, 0.93852859], [5.657, 0.9417523100000001]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.107, 0.71766439], [0.25, 0.8175432100000001], [0.488, 0.8745812799999999], [0.827, 0.90672021], [1.743, 0.9307008999999999], [3.653, 0.9408828700000003], [5.657, 0.9442732100000001]]});
                        
                        plot_options.title.text = 'LPIPS';
                        plot_options.subtitle.text = 'x264 + animation_clip';
                        plot_options.yAxis.title.text = 'LPIPS';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('LPIPS-x264-animation_clip-graph', plot_options);

                    });
                });

            
            