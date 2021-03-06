
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.084, 0.5722842458100559], [0.254, 0.6963082737430167], [0.506, 0.7682583910614524], [0.84, 0.8222909329608937], [1.704, 0.8847620167597764], [3.526, 0.9186463407821228], [5.435, 0.9294592067039106]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.084, 0.5795220223463687], [0.254, 0.7047679832402235], [0.506, 0.7768967318435752], [0.84, 0.8315806089385476], [1.704, 0.8920315139664803], [3.526, 0.924238530726257], [5.435, 0.934056061452514]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.084, 0.5724958715083798], [0.254, 0.7059189441340782], [0.506, 0.7787338770949722], [0.84, 0.8329276648044694], [1.704, 0.8937803296089386], [3.526, 0.9257936480446927], [5.435, 0.9356842737430168]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.084, 0.5770892402234636], [0.254, 0.703640748603352], [0.506, 0.7763534581005588], [0.84, 0.8319566648044691], [1.704, 0.8967631508379887], [3.526, 0.9324246592178769], [5.435, 0.9438088715083799]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.084, 0.5735333519553073], [0.254, 0.698002033519553], [0.506, 0.7697166871508381], [0.84, 0.823584033519553], [1.704, 0.8860325418994414], [3.526, 0.9200896592178772], [5.435, 0.9311197486033519]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.099, 0.512124905027933], [0.257, 0.6484164748603352], [0.52, 0.7549132905027933], [0.879, 0.8191562290502793], [1.744, 0.8923703910614524], [3.493, 0.94269743575419], [5.346, 0.9614740111731845]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.085, 0.5780249497206704], [0.257, 0.7114843463687152], [0.512, 0.7876060502793296], [0.853, 0.840259033519553], [1.732, 0.8946660000000001], [3.567, 0.9220803128491619], [5.482, 0.9287999162011172]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.084, 0.5746132458100559], [0.254, 0.7056789553072627], [0.506, 0.781767251396648], [0.84, 0.8350934469273742], [1.704, 0.8864306480446927], [3.526, 0.9075293798882683], [5.435, 0.9124633296089386]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.084, 0.5799809553072627], [0.254, 0.7055031284916202], [0.506, 0.778555279329609], [0.84, 0.8330768826815643], [1.704, 0.8952674469273743], [3.526, 0.927300150837989], [5.435, 0.9373230000000001]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.084, 0.573132346368715], [0.254, 0.696918407821229], [0.506, 0.7689464189944135], [0.84, 0.8229267374301676], [1.704, 0.884848843575419], [3.526, 0.9182543519553072], [5.435, 0.9290414022346368]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.084, 0.5892282122905027], [0.254, 0.7379559217877095], [0.506, 0.8184587094972066], [0.84, 0.8639053128491619], [1.704, 0.8990047318435755], [3.526, 0.9137731508379889], [5.435, 0.9183565363128491]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.084, 0.6070207094972068], [0.254, 0.7275085754189945], [0.506, 0.804671782122905], [0.84, 0.8496815139664804], [1.704, 0.8906781564245809], [3.526, 0.9112015977653631], [5.435, 0.917557061452514]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.084, 0.6063841229050279], [0.254, 0.7396296648044692], [0.506, 0.8085437262569833], [0.84, 0.8472758603351954], [1.704, 0.8856212625698324], [3.526, 0.9081843575418994], [5.435, 0.9156609776536314]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.084, 0.5590267541899442], [0.254, 0.6855500223463687], [0.506, 0.7603393351955309], [0.84, 0.8169490782122905], [1.704, 0.8790141620111733], [3.526, 0.9111937932960893], [5.435, 0.9207043631284917]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.084, 0.5561347877094972], [0.254, 0.6838663910614525], [0.506, 0.757779279329609], [0.84, 0.8149052402234638], [1.704, 0.8809964581005586], [3.526, 0.9177490837988826], [5.435, 0.929501877094972]]});
                        
                        plot_options.title.text = 'LPIPS';
                        plot_options.subtitle.text = 'x264 + skiing';
                        plot_options.yAxis.title.text = 'LPIPS';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('LPIPS-x264-skiing-graph', plot_options);

                    });
                });

            
            