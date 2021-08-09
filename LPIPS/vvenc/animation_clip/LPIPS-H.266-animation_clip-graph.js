
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.1003512, 0.7898313434343435], [0.2674224, 0.91554381], [0.6559872, 0.92633074], [1.010964, 0.92916373], [2.2296696000000003, 0.9341234500000002], [4.7845104, 0.93698275], [5.0729088, 0.93711482]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.1003512, 0.8846597799999999], [0.2674224, 0.92217077], [0.6559872, 0.9339524400000001], [1.010964, 0.9369886699999997], [2.2296696000000003, 0.94092138], [4.7845104, 0.9425346699999999], [5.0729088, 0.9425431400000002]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.1003512, 0.8872301200000001], [0.2674224, 0.92348067], [0.6559872, 0.93331542], [1.010964, 0.9363749700000001], [2.2296696000000003, 0.9414977599999999], [4.7845104, 0.94443866], [5.0729088, 0.94455734]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.1003512, 0.8832647000000001], [0.2674224, 0.9252286999999998], [0.6559872, 0.9372439999999997], [1.010964, 0.9403639199999999], [2.2296696000000003, 0.9462063], [4.7845104, 0.9495825400000001], [5.0729088, 0.9497413]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.1003512, 0.8790959700000001], [0.2674224, 0.9172452000000001], [0.6559872, 0.9281042800000001], [1.010964, 0.93103364], [2.2296696000000003, 0.9362300300000003], [4.7845104, 0.9390695499999999], [5.0729088, 0.93918437]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.11080079999999999, 0.9237453499999999], [0.27880560000000004, 0.9738008099999999], [0.573612, 0.98120057], [0.9531936, 0.9838739400000001], [1.7083944, 0.9885848000000002], [3.356748, 0.9932180599999999], [4.66, 0.9947720800000002]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.09985680000000001, 0.8901876700000001], [0.2682408, 0.92782174], [0.7050599999999999, 0.93592876], [1.1569079999999998, 0.93935858], [2.4439632000000002, 0.9431172999999999], [5.412132, 0.94609974], [5.7511128, 0.9462596699999999]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.1003512, 0.9140126900000002], [0.2674224, 0.9493676999999999], [0.6559872, 0.95639171], [1.010964, 0.9579603900000002], [2.2296696000000003, 0.9595044300000001], [4.7845104, 0.9603577], [5.0729088, 0.9604063199999999]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.1003512, 0.8801590300000002], [0.2674224, 0.91904173], [0.6559872, 0.9296690699999999], [1.010964, 0.9325818799999999], [2.2296696000000003, 0.9379417999999999], [4.7845104, 0.9408601199999999], [5.0729088, 0.94098241]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.1003512, 0.8736233899999999], [0.2674224, 0.9112063300000002], [0.6559872, 0.92120981], [1.010964, 0.92366437], [2.2296696000000003, 0.92803824], [4.7845104, 0.93053217], [5.0729088, 0.9306463399999998]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.1003512, 0.9385428900000001], [0.2674224, 0.96775886], [0.6559872, 0.9735326400000001], [1.010964, 0.9747070000000001], [2.2296696000000003, 0.97591794], [4.7845104, 0.9767106400000002], [5.0729088, 0.9767544099999997]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.1003512, 0.9469323300000001], [0.2674224, 0.9689964799999999], [0.6559872, 0.97324405], [1.010964, 0.9742580200000001], [2.2296696000000003, 0.9755945899999999], [4.7845104, 0.9763952199999999], [5.0729088, 0.9764312199999999]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.1003512, 0.9392867399999999], [0.2674224, 0.9668475099999998], [0.6559872, 0.9722313399999999], [1.010964, 0.97349357], [2.2296696000000003, 0.9750928700000001], [4.7845104, 0.97607421], [5.0729088, 0.97613001]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.1003512, 0.8928353000000001], [0.2674224, 0.93088893], [0.6559872, 0.93961888], [1.010964, 0.9410037600000001], [2.2296696000000003, 0.9428603399999999], [4.7845104, 0.9443167100000003], [5.0729088, 0.94440848]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.1003512, 0.89036093], [0.2674224, 0.92955809], [0.6559872, 0.9387458], [1.010964, 0.9403611400000002], [2.2296696000000003, 0.9429331000000001], [4.7845104, 0.9446777300000001], [5.0729088, 0.94476321]]});
                        
                        plot_options.title.text = 'LPIPS';
                        plot_options.subtitle.text = 'vvenc + animation_clip';
                        plot_options.yAxis.title.text = 'LPIPS';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('LPIPS-H.266-animation_clip-graph', plot_options);

                    });
                });

            
            