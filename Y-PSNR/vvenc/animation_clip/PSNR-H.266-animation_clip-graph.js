
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.1003512, 17.41497230529785], [0.2674224, 21.648012161254883], [0.6559872, 21.67418670654297], [1.010964, 21.68222999572754], [2.2296696000000003, 21.690223693847656], [4.7845104, 21.697153091430664], [5.0729088, 21.697519302368164]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.1003512, 21.285911560058594], [0.2674224, 21.382902145385742], [0.6559872, 21.393753051757812], [1.010964, 21.40095329284668], [2.2296696000000003, 21.413223266601562], [4.7845104, 21.41961669921875], [5.0729088, 21.41973304748535]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.1003512, 21.302173614501953], [0.2674224, 21.337743759155273], [0.6559872, 21.33382797241211], [1.010964, 21.334758758544922], [2.2296696000000003, 21.336301803588867], [4.7845104, 21.338729858398438], [5.0729088, 21.33892059326172]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.1003512, 21.537572860717773], [0.2674224, 21.6580810546875], [0.6559872, 21.685832977294922], [1.010964, 21.692689895629883], [2.2296696000000003, 21.698801040649414], [4.7845104, 21.70515251159668], [5.0729088, 21.705463409423828]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.1003512, 21.528100967407227], [0.2674224, 21.633420944213867], [0.6559872, 21.656936645507812], [1.010964, 21.66248893737793], [2.2296696000000003, 21.666168212890625], [4.7845104, 21.67045021057129], [5.0729088, 21.67072296142578]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.11080079999999999, 27.178089141845703], [0.27880560000000004, 27.63982582092285], [0.573612, 27.680038452148438], [0.9531936, 27.69114875793457], [1.7083944, 27.695579528808594], [3.356748, 27.706127166748047], [4.66, 27.709484100341797]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.09985680000000001, 26.949974060058594], [0.2682408, 27.141006469726562], [0.7050599999999999, 27.180683135986328], [1.1569079999999998, 27.190887451171875], [2.4439632000000002, 27.20036506652832], [5.412132, 27.211538314819336], [5.7511128, 27.211584091186523]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.1003512, 21.56057357788086], [0.2674224, 21.677881240844727], [0.6559872, 21.698999404907227], [1.010964, 21.712242126464844], [2.2296696000000003, 21.730623245239258], [4.7845104, 21.74098777770996], [5.0729088, 21.74140167236328]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.1003512, 21.227684020996094], [0.2674224, 21.27113151550293], [0.6559872, 21.275114059448242], [1.010964, 21.27665901184082], [2.2296696000000003, 21.27705955505371], [4.7845104, 21.278942108154297], [5.0729088, 21.279083251953125]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.1003512, 21.532440185546875], [0.2674224, 21.638790130615234], [0.6559872, 21.658721923828125], [1.010964, 21.662782669067383], [2.2296696000000003, 21.665193557739258], [4.7845104, 21.669248580932617], [5.0729088, 21.66950225830078]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.1003512, 21.72384262084961], [0.2674224, 21.828046798706055], [0.6559872, 21.843826293945312], [1.010964, 21.84812355041504], [2.2296696000000003, 21.85228729248047], [4.7845104, 21.855392456054688], [5.0729088, 21.855567932128906]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.1003512, 21.716718673706055], [0.2674224, 21.813392639160156], [0.6559872, 21.82875633239746], [1.010964, 21.833112716674805], [2.2296696000000003, 21.83783531188965], [4.7845104, 21.841440200805664], [5.0729088, 21.841663360595703]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.1003512, 21.74358558654785], [0.2674224, 21.838050842285156], [0.6559872, 21.85176658630371], [1.010964, 21.856197357177734], [2.2296696000000003, 21.861305236816406], [4.7845104, 21.865190505981445], [5.0729088, 21.865375518798828]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.1003512, 22.245634078979492], [0.2674224, 22.386749267578125], [0.6559872, 22.414037704467773], [1.010964, 22.4226131439209], [2.2296696000000003, 22.432415008544922], [4.7845104, 22.44060707092285], [5.0729088, 22.44097328186035]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.1003512, 22.117353439331055], [0.2674224, 22.25031280517578], [0.6559872, 22.268068313598633], [1.010964, 22.272802352905273], [2.2296696000000003, 22.278514862060547], [4.7845104, 22.28342056274414], [5.0729088, 22.283714294433594]]});
                        
                        plot_options.title.text = 'Y-PSNR';
                        plot_options.subtitle.text = 'vvenc + animation_clip';
                        plot_options.yAxis.title.text = 'Y-PSNR';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('PSNR-H.266-animation_clip-graph', plot_options);

                    });
                });

            
            