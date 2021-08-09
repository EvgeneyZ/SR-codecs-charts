
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.09, 27.323806762695312], [0.228, 60.53252410888672], [0.487, 71.52483367919922], [0.86, 75.89938354492188], [1.828, 78.68438720703125], [3.793, 79.88589477539062], [5.751, 80.2821044921875]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.09, 27.304386138916016], [0.228, 60.33802795410156], [0.487, 70.96351623535156], [0.86, 75.25393676757812], [1.828, 78.07963562011719], [3.793, 79.32545471191406], [5.751, 79.5956039428711]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.09, 24.994487762451172], [0.228, 47.75199890136719], [0.487, 52.44316101074219], [0.86, 54.07398986816406], [1.828, 54.943397521972656], [3.793, 55.2784309387207], [5.751, 55.40804672241211]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.09, 28.051883697509766], [0.228, 62.22098159790039], [0.487, 73.76151275634766], [0.86, 78.39224243164062], [1.828, 81.39424133300781], [3.793, 82.65289306640625], [5.751, 83.05960083007812]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.09, 27.26971435546875], [0.228, 60.236141204833984], [0.487, 71.07579803466797], [0.86, 75.37873077392578], [1.828, 78.14555358886719], [3.793, 79.3394775390625], [5.751, 79.73486328125]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.199, 5.921003818511963], [0.235, 59.9774055480957], [0.457, 76.1969223022461], [0.809, 82.52269744873047], [1.747, 86.75341796875], [3.721, 88.53533935546875], [5.715, 89.07886505126953]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.088, 26.749879837036133], [0.231, 61.84499740600586], [0.491, 72.67670440673828], [0.86, 76.44557189941406], [1.807, 78.68862915039062], [3.726, 79.59648895263672], [5.622, 79.87373352050781]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.09, 29.56591033935547], [0.228, 63.72686004638672], [0.487, 74.12452697753906], [0.86, 78.00483703613281], [1.828, 80.31784057617188], [3.793, 81.29446411132812], [5.751, 81.62252044677734]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.09, 25.122026443481445], [0.228, 48.62678909301758], [0.487, 54.13174819946289], [0.86, 56.11798858642578], [1.828, 57.16927719116211], [3.793, 57.598602294921875], [5.751, 57.749427795410156]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.09, 27.021642684936523], [0.228, 59.988155364990234], [0.487, 70.82556915283203], [0.86, 75.0831298828125], [1.828, 77.75160217285156], [3.793, 78.86779022216797], [5.751, 79.23982238769531]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.09, 33.488948822021484], [0.228, 68.63528442382812], [0.487, 78.9361343383789], [0.86, 82.47915649414062], [1.828, 84.56941223144531], [3.793, 85.39115905761719], [5.751, 85.61612701416016]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.09, 36.435855865478516], [0.228, 68.9202880859375], [0.487, 78.08878326416016], [0.86, 81.29502868652344], [1.828, 83.22940063476562], [3.793, 84.00309753417969], [5.751, 84.2509536743164]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.09, 34.178192138671875], [0.228, 68.77853393554688], [0.487, 78.93120574951172], [0.86, 82.49280548095703], [1.828, 84.64619445800781], [3.793, 85.52964782714844], [5.751, 85.79887390136719]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.09, 29.281047821044922], [0.228, 63.61890411376953], [0.487, 74.5159683227539], [0.86, 78.73038482666016], [1.828, 81.36498260498047], [3.793, 82.50077819824219], [5.751, 82.8853759765625]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.09, 29.324304580688477], [0.228, 63.74313735961914], [0.487, 74.83118438720703], [0.86, 79.06752014160156], [1.828, 81.68567657470703], [3.793, 82.72711944580078], [5.751, 83.03814697265625]]});
                        
                        plot_options.title.text = 'VMAF NEG';
                        plot_options.subtitle.text = 'x265 + animation_clip';
                        plot_options.yAxis.title.text = 'VMAF NEG';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFNEG-x265-animation_clip-graph', plot_options);

                    });
                });

            
            