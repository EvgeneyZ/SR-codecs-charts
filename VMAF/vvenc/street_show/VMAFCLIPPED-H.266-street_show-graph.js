
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.0998141, 48.69712829589844], [0.29106529999999997, 78.42878723144531], [0.5677574, 92.02572631835938], [0.9279696000000001, 98.44764709472656], [1.4570016000000001, 102.00679779052734], [2.8555584, 105.64501953125], [6.486673, 107.69380187988281]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.0998141, 52.67465591430664], [0.29106529999999997, 84.83829498291016], [0.5677574, 100.3643798828125], [0.9279696000000001, 108.44278717041016], [1.4570016000000001, 113.55291748046875], [2.8555584, 119.15704345703125], [6.486673, 122.95108795166016]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.0998141, 43.63004684448242], [0.29106529999999997, 65.57994079589844], [0.5677574, 73.97660064697266], [0.9279696000000001, 77.44535827636719], [1.4570016000000001, 79.2182388305664], [2.8555584, 80.81791687011719], [6.486673, 81.69750213623047]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.0998141, 50.11063003540039], [0.29106529999999997, 80.70252990722656], [0.5677574, 95.00859069824219], [0.9279696000000001, 101.99994659423828], [1.4570016000000001, 106.06438446044922], [2.8555584, 110.3278579711914], [6.486673, 112.85792541503906]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.0998141, 48.68779373168945], [0.29106529999999997, 78.42938995361328], [0.5677574, 92.0271987915039], [0.9279696000000001, 98.4511947631836], [1.4570016000000001, 102.02548217773438], [2.8555584, 105.69873809814453], [6.486673, 107.81161499023438]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1048675, 53.748966217041016], [0.2945664, 85.63640594482422], [0.5838317, 102.28440856933594], [0.9487277000000001, 110.16394805908203], [1.8371578, 117.63453674316406], [3.9111811, 121.875], [6.009, 123.68749237060547]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.10131359999999999, 54.127906799316406], [0.2946691, 84.18863677978516], [0.5957279999999999, 98.48739624023438], [0.9678566, 105.22476196289062], [1.613903, 109.85167694091797], [3.3093936, 113.82662200927734], [7.5971578, 116.04686737060547]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.0998141, 48.05455017089844], [0.29106529999999997, 76.88177490234375], [0.5677574, 89.44619750976562], [0.9279696000000001, 94.80763244628906], [1.4570016000000001, 97.5797119140625], [2.8555584, 100.10236358642578], [6.486673, 101.23247528076172]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.0998141, 44.44900131225586], [0.29106529999999997, 66.6636734008789], [0.5677574, 75.17535400390625], [0.9279696000000001, 78.77690887451172], [1.4570016000000001, 80.61431884765625], [2.8555584, 82.30219268798828], [6.486673, 83.24225616455078]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.0998141, 48.740238189697266], [0.29106529999999997, 78.51325225830078], [0.5677574, 92.14527893066406], [0.9279696000000001, 98.58434295654297], [1.4570016000000001, 102.1423110961914], [2.8555584, 105.77690887451172], [6.486673, 107.76935577392578]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.0998141, 60.75770568847656], [0.29106529999999997, 92.99104309082031], [0.5677574, 106.9127197265625], [0.9279696000000001, 113.77875518798828], [1.4570016000000001, 117.94949340820312], [2.8555584, 122.18651580810547], [6.486673, 124.77925109863281]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.0998141, 63.064022064208984], [0.29106529999999997, 93.7518310546875], [0.5677574, 107.266845703125], [0.9279696000000001, 114.16273498535156], [1.4570016000000001, 118.28607177734375], [2.8555584, 122.58322143554688], [6.486673, 125.2370376586914]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.0998141, 61.986820220947266], [0.29106529999999997, 92.39214324951172], [0.5677574, 106.13349914550781], [0.9279696000000001, 112.91801452636719], [1.4570016000000001, 117.0119857788086], [2.8555584, 121.34683227539062], [6.486673, 124.01390838623047]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.0998141, 49.53077697753906], [0.29106529999999997, 79.7632064819336], [0.5677574, 93.70793914794922], [0.9279696000000001, 100.36264038085938], [1.4570016000000001, 104.11726379394531], [2.8555584, 107.84459686279297], [6.486673, 109.90562438964844]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.0998141, 49.83662414550781], [0.29106529999999997, 80.3228759765625], [0.5677574, 94.47380828857422], [0.9279696000000001, 101.32405090332031], [1.4570016000000001, 105.21363830566406], [2.8555584, 109.12397766113281], [6.486673, 111.32452392578125]]});
                        
                        plot_options.title.text = 'VMAF';
                        plot_options.subtitle.text = 'vvenc + street_show';
                        plot_options.yAxis.title.text = 'VMAF';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFCLIPPED-H.266-street_show-graph', plot_options);

                    });
                });

            
            