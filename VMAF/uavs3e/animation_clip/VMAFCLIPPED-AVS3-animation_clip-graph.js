
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.1015896, 84.69195556640625], [0.3621168, 98.55577087402344], [0.6300168, 100.38644409179688], [1.1079695999999999, 101.8565673828125], [1.9565039999999998, 103.2595443725586], [3.5264256, 104.3329849243164], [6.0417528, 105.13907623291016]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.1015896, 85.79723358154297], [0.3621168, 99.78609466552734], [0.6300168, 101.85432434082031], [1.1079695999999999, 103.4605941772461], [1.9565039999999998, 104.85736846923828], [3.5264256, 105.58756256103516], [6.0417528, 105.75418853759766]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.1015896, 67.1749496459961], [0.3621168, 74.01256561279297], [0.6300168, 74.74172973632812], [1.1079695999999999, 75.35247039794922], [1.9565039999999998, 76.14286804199219], [3.5264256, 76.77830505371094], [6.0417528, 77.15497589111328]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.1015896, 87.33045196533203], [0.3621168, 102.71691131591797], [0.6300168, 104.83380126953125], [1.1079695999999999, 106.45280456542969], [1.9565039999999998, 108.02252960205078], [3.5264256, 109.24286651611328], [6.0417528, 110.04920959472656]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.1015896, 84.41150665283203], [0.3621168, 98.0878677368164], [0.6300168, 99.85047912597656], [1.1079695999999999, 101.27796936035156], [1.9565039999999998, 102.69108581542969], [3.5264256, 103.76765441894531], [6.0417528, 104.54906463623047]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1317432, 108.7879409790039], [0.289476, 125.44496154785156], [0.47692559999999995, 129.86819458007812], [0.8285352, 132.7102508544922], [1.5236904, 135.1726837158203], [2.7989664, 137.26473999023438], [5.1483936, 139.15216064453125]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.11699280000000001, 96.66869354248047], [0.4599048, 113.43846130371094], [0.8167848, 115.75729370117188], [1.4662896, 117.5460205078125], [2.6201832, 119.45809936523438], [4.6633128, 121.05709075927734], [8.1139896, 121.96532440185547]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.1015896, 89.7118911743164], [0.3621168, 103.55020904541016], [0.6300168, 105.2523193359375], [1.1079695999999999, 106.54670715332031], [1.9565039999999998, 107.84957885742188], [3.5264256, 108.80777740478516], [6.0417528, 109.47492218017578]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.1015896, 70.1652603149414], [0.3621168, 77.7589111328125], [0.6300168, 78.57929992675781], [1.1079695999999999, 79.27630615234375], [1.9565039999999998, 80.11981201171875], [3.5264256, 80.72434997558594], [6.0417528, 81.1884994506836]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.1015896, 84.07555389404297], [0.3621168, 97.80887603759766], [0.6300168, 99.53965759277344], [1.1079695999999999, 100.9511489868164], [1.9565039999999998, 102.33653259277344], [3.5264256, 103.37629699707031], [6.0417528, 104.1358871459961]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.1015896, 101.73310089111328], [0.3621168, 116.52930450439453], [0.6300168, 118.5125961303711], [1.1079695999999999, 120.08052825927734], [1.9565039999999998, 121.21565246582031], [3.5264256, 121.84136199951172], [6.0417528, 122.14765167236328]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.1015896, 103.95933532714844], [0.3621168, 116.21829986572266], [0.6300168, 117.83950805664062], [1.1079695999999999, 118.90335083007812], [1.9565039999999998, 119.84085083007812], [3.5264256, 120.46062469482422], [6.0417528, 120.9505386352539]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.1015896, 99.63823699951172], [0.3621168, 114.0409927368164], [0.6300168, 116.07473754882812], [1.1079695999999999, 117.51715850830078], [1.9565039999999998, 118.60946655273438], [3.5264256, 119.35428619384766], [6.0417528, 119.83697509765625]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.1015896, 87.690185546875], [0.3621168, 102.76087951660156], [0.6300168, 104.83845520019531], [1.1079695999999999, 106.3785400390625], [1.9565039999999998, 107.96175384521484], [3.5264256, 109.18120574951172], [6.0417528, 110.00923156738281]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.1015896, 88.73590850830078], [0.3621168, 103.96971893310547], [0.6300168, 105.93547058105469], [1.1079695999999999, 107.41011047363281], [1.9565039999999998, 109.0149917602539], [3.5264256, 110.20812225341797], [6.0417528, 110.80535125732422]]});
                        
                        plot_options.title.text = 'VMAF';
                        plot_options.subtitle.text = 'uavs3e + animation_clip';
                        plot_options.yAxis.title.text = 'VMAF';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFCLIPPED-AVS3-animation_clip-graph', plot_options);

                    });
                });

            
            