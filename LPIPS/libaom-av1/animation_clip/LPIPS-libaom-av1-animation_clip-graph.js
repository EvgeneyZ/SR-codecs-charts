
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.137, 0.89934493], [0.355, 0.92185966], [0.668, 0.9273085499999998], [1.126, 0.9337809900000003], [2.399, 0.9391970200000002], [4.65, 0.9421197199999999], [6.605, 0.94297752]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.137, 0.8973759999999998], [0.355, 0.9196683400000001], [0.668, 0.9259942200000001], [1.126, 0.9339162799999998], [2.399, 0.9383299800000002], [4.65, 0.9397104000000001], [6.605, 0.93997332]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.137, 0.90746899], [0.355, 0.9283561899999999], [0.668, 0.93389598], [1.126, 0.9406699399999998], [2.399, 0.9454078699999999], [4.65, 0.9479445600000002], [6.605, 0.9486426900000001]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.137, 0.90980066], [0.355, 0.9332921800000001], [0.668, 0.9393282700000001], [1.126, 0.9463922499999999], [2.399, 0.95204762], [4.65, 0.9552399000000001], [6.605, 0.9561597399999998]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.137, 0.9033170299999997], [0.355, 0.9256006000000001], [0.668, 0.93120822], [1.126, 0.9381157099999998], [2.399, 0.94335599], [4.65, 0.9461035299999999], [6.605, 0.94686002]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.174, 0.95657877], [0.457, 0.9788982], [0.851, 0.9831769199999999], [1.353, 0.9877479699999999], [2.751, 0.99619415], [5.387, 0.9979354600000001], [7.097, 0.9985665800000001]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.144, 0.90128908], [0.377, 0.92417058], [0.714, 0.9289715099999999], [1.139, 0.93316762], [2.432, 0.9387117899999998], [4.865, 0.94121723], [6.642, 0.94214172]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.137, 0.9247945899999999], [0.355, 0.9498607200000001], [0.668, 0.95590102], [1.126, 0.95960761], [2.399, 0.9614558599999999], [4.65, 0.9622938199999999], [6.605, 0.96260007]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.137, 0.9009930300000002], [0.355, 0.9232758500000001], [0.668, 0.9286178899999998], [1.126, 0.9357330300000001], [2.399, 0.9411877700000001], [4.65, 0.9439967599999999], [6.605, 0.94478473]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.137, 0.89206077], [0.355, 0.9144543500000001], [0.668, 0.91982894], [1.126, 0.9264682599999999], [2.399, 0.9316912900000002], [4.65, 0.9344710399999998], [6.605, 0.9352752700000001]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.137, 0.9515791], [0.355, 0.9700828200000001], [0.668, 0.9733693599999999], [1.126, 0.97445784], [2.399, 0.97559146], [4.65, 0.9763396299999999], [6.605, 0.97665641]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.137, 0.9561144400000002], [0.355, 0.9703493499999999], [0.668, 0.97307344], [1.126, 0.9745136600000001], [2.399, 0.9756870200000001], [4.65, 0.97634416], [6.605, 0.9765952199999997]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.137, 0.95221161], [0.355, 0.9689673199999999], [0.668, 0.97204481], [1.126, 0.97382354], [2.399, 0.9754210100000001], [4.65, 0.9763839400000001], [6.605, 0.9767232800000001]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.137, 0.9077974600000001], [0.355, 0.93140938], [0.668, 0.9361499400000001], [1.126, 0.93912584], [2.399, 0.9419610100000001], [4.65, 0.94378997], [6.605, 0.94444788]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.137, 0.90948738], [0.355, 0.9334043700000001], [0.668, 0.9381826700000001], [1.126, 0.94103261], [2.399, 0.94482367], [4.65, 0.94700812], [6.605, 0.94766374]]});
                        
                        plot_options.title.text = 'LPIPS';
                        plot_options.subtitle.text = 'libaom-av1 + animation_clip';
                        plot_options.yAxis.title.text = 'LPIPS';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('LPIPS-libaom-av1-animation_clip-graph', plot_options);

                    });
                });

            
            