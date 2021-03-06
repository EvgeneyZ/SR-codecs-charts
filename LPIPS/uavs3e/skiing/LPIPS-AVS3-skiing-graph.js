
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.11947870000000001, 0.690531061452514], [0.31808179999999997, 0.7835508882681563], [0.5314871000000001, 0.8272234692737429], [0.893642, 0.8650168603351954], [1.8572966, 0.897532558659218], [3.9125127, 0.9236728435754189], [6.7043932999999996, 0.9332550893854749]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.11947870000000001, 0.6973469888268156], [0.31808179999999997, 0.7931639441340781], [0.5314871000000001, 0.8379601787709496], [0.893642, 0.8770373407821229], [1.8572966, 0.9097986312849161], [3.9125127, 0.9344530837988828], [6.7043932999999996, 0.9424270726256981]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.11947870000000001, 0.7019895474860336], [0.31808179999999997, 0.7963745698324022], [0.5314871000000001, 0.8399948938547486], [0.893642, 0.8771358491620111], [1.8572966, 0.908628815642458], [3.9125127, 0.9329230893854747], [6.7043932999999996, 0.9416502458100557]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.11947870000000001, 0.697539407821229], [0.31808179999999997, 0.7932695083798882], [0.5314871000000001, 0.838260810055866], [0.893642, 0.8774002122905028], [1.8572966, 0.9111453966480448], [3.9125127, 0.9383076201117317], [6.7043932999999996, 0.9483692737430168]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.11947870000000001, 0.6915240726256984], [0.31808179999999997, 0.7847890670391061], [0.5314871000000001, 0.8285499329608939], [0.893642, 0.8664058547486032], [1.8572966, 0.8989305642458101], [3.9125127, 0.925315620111732], [6.7043932999999996, 0.9350196480446927]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.21127289999999999, 0.7638374469273742], [0.3313598, 0.8174614301675978], [0.5557799, 0.8717672067039107], [0.9067066, 0.9115566145251397], [1.5425162000000001, 0.9384080279329609], [2.7872168, 0.9563840391061453], [5.102946, 0.9679169720670391]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.1249405, 0.7044461340782122], [0.3534441, 0.8071630837988827], [0.5974257000000001, 0.8561677988826815], [1.0176408000000001, 0.8935149329608938], [2.8529355, 0.9345010837988826], [4.7861674, 0.9454079497206704], [8.3007349, 0.9531245418994412]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.11947870000000001, 0.7037575754189944], [0.31808179999999997, 0.8004891173184356], [0.5314871000000001, 0.8418203519553071], [0.893642, 0.8745120391061451], [1.8572966, 0.898020720670391], [3.9125127, 0.9117152793296089], [6.7043932999999996, 0.9153405474860336]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.11947870000000001, 0.6978858882681563], [0.31808179999999997, 0.7930374972067039], [0.5314871000000001, 0.8375095027932961], [0.893642, 0.8754623687150838], [1.8572966, 0.9072843184357543], [3.9125127, 0.9318739720670389], [6.7043932999999996, 0.9406677821229049]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.11947870000000001, 0.6907934022346368], [0.31808179999999997, 0.784095162011173], [0.5314871000000001, 0.8278535754189944], [0.893642, 0.8656342625698323], [1.8572966, 0.897870284916201], [3.9125127, 0.9236921284916201], [6.7043932999999996, 0.9331672122905027]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.11947870000000001, 0.727130094972067], [0.31808179999999997, 0.8250212458100558], [0.5314871000000001, 0.863573340782123], [0.893642, 0.8896177039106146], [1.8572966, 0.9044297653631284], [3.9125127, 0.9147020111731844], [6.7043932999999996, 0.9182199553072626]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.11947870000000001, 0.7229329608938547], [0.31808179999999997, 0.8143697150837989], [0.5314871000000001, 0.8520267541899441], [0.893642, 0.880388089385475], [1.8572966, 0.9000127094972068], [3.9125127, 0.9137318212290503], [6.7043932999999996, 0.9184992849162011]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.11947870000000001, 0.7254097206703911], [0.31808179999999997, 0.8166403351955308], [0.5314871000000001, 0.8527319999999999], [0.893642, 0.8792840558659218], [1.8572966, 0.8987107094972067], [3.9125127, 0.9129066033519553], [6.7043932999999996, 0.9180162681564245]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.11947870000000001, 0.686988843575419], [0.31808179999999997, 0.7809934804469275], [0.5314871000000001, 0.8251075418994414], [0.893642, 0.8630852513966479], [1.8572966, 0.8941704469273744], [3.9125127, 0.9174593854748603], [6.7043932999999996, 0.9254084692737431]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.11947870000000001, 0.6853058938547486], [0.31808179999999997, 0.7795291620111732], [0.5314871000000001, 0.8249973351955306], [0.893642, 0.8646838826815643], [1.8572966, 0.8978618491620111], [3.9125127, 0.9241590446927376], [6.7043932999999996, 0.9340035865921789]]});
                        
                        plot_options.title.text = 'LPIPS';
                        plot_options.subtitle.text = 'uavs3e + skiing';
                        plot_options.yAxis.title.text = 'LPIPS';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('LPIPS-AVS3-skiing-graph', plot_options);

                    });
                });

            
            