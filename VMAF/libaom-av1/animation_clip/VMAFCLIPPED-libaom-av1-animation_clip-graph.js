
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.137, 93.48792266845703], [0.355, 101.21000671386719], [0.668, 102.48470306396484], [1.126, 103.08926391601562], [2.399, 104.11396789550781], [4.65, 104.93548583984375], [6.605, 105.25093078613281]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.137, 95.18639373779297], [0.355, 103.20753479003906], [0.668, 104.74624633789062], [1.126, 105.17874145507812], [2.399, 105.9596176147461], [4.65, 106.34208679199219], [6.605, 106.44849395751953]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.137, 71.43033599853516], [0.355, 75.06637573242188], [0.668, 75.6361083984375], [1.126, 75.9284439086914], [2.399, 76.4364242553711], [4.65, 76.96520233154297], [6.605, 77.17642974853516]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.137, 96.96646118164062], [0.355, 105.49337005615234], [0.668, 106.89716339111328], [1.126, 107.61091613769531], [2.399, 108.7699966430664], [4.65, 109.71952056884766], [6.605, 110.09417724609375]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.137, 93.15745544433594], [0.355, 100.7798080444336], [0.668, 102.01934051513672], [1.126, 102.55329132080078], [2.399, 103.54005432128906], [4.65, 104.36061096191406], [6.605, 104.6607666015625]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.174, 121.20951080322266], [0.457, 132.48919677734375], [0.851, 135.0422821044922], [1.353, 136.3725128173828], [2.751, 137.84886169433594], [5.387, 139.66502380371094], [7.097, 140.6171875]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.144, 102.51861572265625], [0.377, 111.2021713256836], [0.714, 112.71237182617188], [1.139, 113.49388122558594], [2.432, 114.4228744506836], [4.865, 114.81353759765625], [6.642, 114.99925994873047]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.137, 98.79259490966797], [0.355, 106.41156005859375], [0.668, 107.62894439697266], [1.126, 108.11643981933594], [2.399, 108.87339782714844], [4.65, 109.4534683227539], [6.605, 109.6752700805664]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.137, 74.96041870117188], [0.355, 79.01197814941406], [0.668, 79.6230697631836], [1.126, 80.00287628173828], [2.399, 80.56663513183594], [4.65, 81.0479965209961], [6.605, 81.25633239746094]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.137, 92.95478057861328], [0.355, 100.55560302734375], [0.668, 101.78633117675781], [1.126, 102.31484985351562], [2.399, 103.26510620117188], [4.65, 104.00929260253906], [6.605, 104.29804229736328]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.137, 110.43383026123047], [0.355, 118.8326416015625], [0.668, 120.10818481445312], [1.126, 120.53453063964844], [2.399, 121.47908782958984], [4.65, 122.18234252929688], [6.605, 122.4531021118164]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.137, 110.89021301269531], [0.355, 117.98258972167969], [0.668, 118.96949005126953], [1.126, 119.3109359741211], [2.399, 120.20712280273438], [4.65, 120.80535888671875], [6.605, 121.07772064208984]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.137, 107.90978240966797], [0.355, 116.12628173828125], [0.668, 117.50373840332031], [1.126, 117.9820785522461], [2.399, 118.98946380615234], [4.65, 119.68168640136719], [6.605, 120.0163345336914]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.137, 97.39399719238281], [0.355, 105.79855346679688], [0.668, 107.20262908935547], [1.126, 107.77127075195312], [2.399, 108.9422607421875], [4.65, 109.8214111328125], [6.605, 110.20124816894531]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.137, 98.22188568115234], [0.355, 106.66597747802734], [0.668, 108.0831298828125], [1.126, 108.63807678222656], [2.399, 109.6185531616211], [4.65, 110.43595886230469], [6.605, 110.7851791381836]]});
                        
                        plot_options.title.text = 'VMAF';
                        plot_options.subtitle.text = 'libaom-av1 + animation_clip';
                        plot_options.yAxis.title.text = 'VMAF';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFCLIPPED-libaom-av1-animation_clip-graph', plot_options);

                    });
                });

            
            