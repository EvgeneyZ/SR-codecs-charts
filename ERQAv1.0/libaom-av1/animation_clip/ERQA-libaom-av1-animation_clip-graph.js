
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.137, 0.5971165243389656], [0.355, 0.637930329201684], [0.668, 0.6486874515360176], [1.126, 0.6541197447371488], [2.399, 0.6617170002608614], [4.65, 0.6679250184451477], [6.605, 0.670660748776979]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.137, 0.6053315408864277], [0.355, 0.6546094711337427], [0.668, 0.6667575508411674], [1.126, 0.6732283307814833], [2.399, 0.6831751157915189], [4.65, 0.6872054281030776], [6.605, 0.689738846838791]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.137, 0.5268888232355856], [0.355, 0.5601477753991668], [0.668, 0.5698736105646204], [1.126, 0.574716583703038], [2.399, 0.5817782128070051], [4.65, 0.5878440807412062], [6.605, 0.5914107497993043]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.137, 0.587687193622874], [0.355, 0.6349697722378692], [0.668, 0.6473843898151405], [1.126, 0.6529604521813115], [2.399, 0.6618537584288738], [4.65, 0.6688938296832209], [6.605, 0.6732748444692794]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.137, 0.6031450598421283], [0.355, 0.6441250652300252], [0.668, 0.6540780331605407], [1.126, 0.6597945854155458], [2.399, 0.6669862366939434], [4.65, 0.6733265150155476], [6.605, 0.6762280818633342]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.174, 0.7949721460324055], [0.457, 0.912576864367855], [0.851, 0.9437170944645086], [1.353, 0.9551583652431371], [2.751, 0.9660821072813904], [5.387, 0.9732352699338598], [7.097, 0.976538667304387]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.144, 0.6961355832824817], [0.377, 0.7511649273795179], [0.714, 0.7622593502929037], [1.139, 0.7727310194015394], [2.432, 0.7754406828649945], [4.865, 0.7811780383580674], [6.642, 0.7841116459254773]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.137, 0.7277774474438917], [0.355, 0.8323079771535745], [0.668, 0.8593237295659454], [1.126, 0.8703384321712111], [2.399, 0.8777269294641957], [4.65, 0.8815349181705846], [6.605, 0.8830470024088707]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.137, 0.573345209633927], [0.355, 0.6115338581410956], [0.668, 0.6200674461763747], [1.126, 0.6246696479172554], [2.399, 0.6290509525158507], [4.65, 0.6309377442902394], [6.605, 0.6321887716173666]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.137, 0.649210907332245], [0.355, 0.6980155921884521], [0.668, 0.7113815053834589], [1.126, 0.718148306263037], [2.399, 0.7263442811162405], [4.65, 0.7311955822385888], [6.605, 0.7328505142435865]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.137, 0.7902353723302329], [0.355, 0.8777576832425513], [0.668, 0.8947063792415995], [1.126, 0.9009921463490171], [2.399, 0.9061867222688177], [4.65, 0.9092023648876361], [6.605, 0.9104673472088356]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.137, 0.8037200619362721], [0.355, 0.8738518075948868], [0.668, 0.8865307329687232], [1.126, 0.8921273215149871], [2.399, 0.8964536171522807], [4.65, 0.8993040466026725], [6.605, 0.9004849806374325]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.137, 0.7831928928012015], [0.355, 0.8651772447859161], [0.668, 0.8820037669847871], [1.126, 0.8885795320170834], [2.399, 0.8929078232127763], [4.65, 0.8955511464378169], [6.605, 0.8970295597209824]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.137, 0.6691711289310497], [0.355, 0.7398859137668439], [0.668, 0.7563918221479723], [1.126, 0.7672108992765673], [2.399, 0.7771170087029758], [4.65, 0.7829324373845531], [6.605, 0.7859305336525813]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.137, 0.673489615025364], [0.355, 0.7447894252479013], [0.668, 0.7634662279199366], [1.126, 0.7699060527397771], [2.399, 0.7738197602995557], [4.65, 0.7787047865302413], [6.605, 0.7827749619986066]]});
                        
                        plot_options.title.text = 'ERQAv1.0';
                        plot_options.subtitle.text = 'libaom-av1 + animation_clip';
                        plot_options.yAxis.title.text = 'ERQAv1.0';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('ERQA-libaom-av1-animation_clip-graph', plot_options);

                    });
                });

            
            