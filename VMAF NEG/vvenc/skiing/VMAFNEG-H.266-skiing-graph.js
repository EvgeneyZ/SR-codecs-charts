
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.1006584, 38.29570388793945], [0.2947897, 61.62351608276367], [0.5712837, 73.10730743408203], [0.9414039000000001, 78.53070831298828], [1.7368856000000001, 82.60418701171875], [3.7139043000000003, 84.84133911132812], [8.405327699999999, 85.83064270019531]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.1006584, 41.46572494506836], [0.2947897, 65.1493911743164], [0.5712837, 77.10550689697266], [0.9414039000000001, 82.88688659667969], [1.7368856000000001, 87.3703384399414], [3.7139043000000003, 89.9701919555664], [8.405327699999999, 91.08213806152344]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.1006584, 32.9005126953125], [0.2947897, 48.43846130371094], [0.5712837, 54.49726867675781], [0.9414039000000001, 56.85605239868164], [1.7368856000000001, 58.46059036254883], [3.7139043000000003, 59.259639739990234], [8.405327699999999, 59.58361053466797]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.1006584, 39.691383361816406], [0.2947897, 63.587154388427734], [0.5712837, 75.58070373535156], [0.9414039000000001, 81.38871765136719], [1.7368856000000001, 85.89425659179688], [3.7139043000000003, 88.50627899169922], [8.405327699999999, 89.70307159423828]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.1006584, 38.265743255615234], [0.2947897, 61.565879821777344], [0.5712837, 73.03917694091797], [0.9414039000000001, 78.4510498046875], [1.7368856000000001, 82.53032684326172], [3.7139043000000003, 84.799560546875], [8.405327699999999, 85.82257843017578]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1015766, 38.76356506347656], [0.2963697, 61.55436325073242], [0.5847762, 73.14815521240234], [0.9578987, 78.99833679199219], [1.9157856999999998, 83.39088439941406], [3.8059634, 85.68121337890625], [8.234, 86.30110168457031]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.0999054, 40.49650573730469], [0.29440570000000005, 61.09358596801758], [0.5805146999999999, 71.59627532958984], [0.9530773, 76.53311920166016], [1.8799514, 80.35263061523438], [4.2353495, 82.33443450927734], [10.0599194, 83.11065673828125]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.1006584, 38.52253341674805], [0.2947897, 61.70744705200195], [0.5712837, 72.5891342163086], [0.9414039000000001, 77.45511627197266], [1.7368856000000001, 80.91688537597656], [3.7139043000000003, 82.6689682006836], [8.405327699999999, 83.37847137451172]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.1006584, 33.48307418823242], [0.2947897, 49.17144012451172], [0.5712837, 55.334354400634766], [0.9414039000000001, 57.758209228515625], [1.7368856000000001, 59.398521423339844], [3.7139043000000003, 60.20933532714844], [8.405327699999999, 60.52778244018555]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.1006584, 38.274932861328125], [0.2947897, 61.57571029663086], [0.5712837, 73.08184814453125], [0.9414039000000001, 78.51831817626953], [1.7368856000000001, 82.59513092041016], [3.7139043000000003, 84.84294128417969], [8.405327699999999, 85.84910583496094]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.1006584, 44.00343322753906], [0.2947897, 65.57138061523438], [0.5712837, 75.67615509033203], [0.9414039000000001, 80.24075317382812], [1.7368856000000001, 83.73059844970703], [3.7139043000000003, 85.82987213134766], [8.405327699999999, 86.89372253417969]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.1006584, 44.63658142089844], [0.2947897, 65.87676239013672], [0.5712837, 75.96275329589844], [0.9414039000000001, 80.6380615234375], [1.7368856000000001, 84.21438598632812], [3.7139043000000003, 86.3099594116211], [8.405327699999999, 87.29521942138672]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.1006584, 43.2411003112793], [0.2947897, 64.85153198242188], [0.5712837, 75.37197875976562], [0.9414039000000001, 80.37701416015625], [1.7368856000000001, 84.39786529541016], [3.7139043000000003, 86.80623626708984], [8.405327699999999, 88.02823638916016]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.1006584, 39.40534210205078], [0.2947897, 63.2984504699707], [0.5712837, 75.19377899169922], [0.9414039000000001, 80.86292266845703], [1.7368856000000001, 85.11544799804688], [3.7139043000000003, 87.42618560791016], [8.405327699999999, 88.42340850830078]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.1006584, 39.4918212890625], [0.2947897, 63.295291900634766], [0.5712837, 75.1905517578125], [0.9414039000000001, 80.90261840820312], [1.7368856000000001, 85.21981811523438], [3.7139043000000003, 87.60335540771484], [8.405327699999999, 88.66456604003906]]});
                        
                        plot_options.title.text = 'VMAF NEG';
                        plot_options.subtitle.text = 'vvenc + skiing';
                        plot_options.yAxis.title.text = 'VMAF NEG';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFNEG-H.266-skiing-graph', plot_options);

                    });
                });

            
            