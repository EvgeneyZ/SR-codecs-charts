
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.115, 0.2424558305746608], [0.331, 0.4474813412705731], [0.648, 0.5374286665771537], [1.07, 0.5846753941104378], [2.105, 0.6283361350194548], [4.103, 0.6582770013148881], [6.074, 0.6714036703302567]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.115, 0.25948651133561784], [0.331, 0.4754265495413976], [0.648, 0.5804741103429054], [1.07, 0.6363704536834256], [2.105, 0.6880864564342923], [4.103, 0.7207044596883663], [6.074, 0.7354680132286064]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.115, 0.05401697832867362], [0.331, 0.08399021532104224], [0.648, 0.09667214678126988], [1.07, 0.10228057684867024], [2.105, 0.10772133873785152], [4.103, 0.11115059669263412], [6.074, 0.11256914438376306]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.115, 0.25818484419875914], [0.331, 0.4631252311918341], [0.648, 0.5604806672512692], [1.07, 0.6126962706133234], [2.105, 0.7090481148874898], [4.103, 0.6984890825412875], [6.074, 0.7153070932144767]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.115, 0.24749283416105666], [0.331, 0.4494030055284231], [0.648, 0.5374141912357131], [1.07, 0.584912180459983], [2.105, 0.6279829909304213], [4.103, 0.6578675570033564], [6.074, 0.6714226030214059]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.115, 0.20550951873328946], [0.354, 0.47243806012412454], [0.681, 0.6438955205471005], [1.114, 0.7353920703446226], [2.181, 0.8206787641472816], [4.264, 0.8710407207956614], [6.303, 0.8900139603519278]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.115, 0.26319867118915147], [0.33, 0.5123654504741002], [0.645, 0.6125886226454146], [1.066, 0.6606701628243912], [2.103, 0.6964755182116601], [4.103, 0.7099867199822343], [6.072, 0.7143061107116302]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.115, 0.23061016960938663], [0.331, 0.4539706463687421], [0.648, 0.5575731910140317], [1.07, 0.6156960720438637], [2.105, 0.6687807029431547], [4.103, 0.696229858520291], [6.074, 0.7057150283520082]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.115, 0.24700689128508152], [0.331, 0.4412536288289764], [0.648, 0.5227299212143993], [1.07, 0.5639256058010232], [2.105, 0.598038555524721], [4.103, 0.6167358484265588], [6.074, 0.624864070680446]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.115, 0.23614824620187982], [0.331, 0.4417523708373447], [0.648, 0.5313422617950215], [1.07, 0.5775114734612974], [2.105, 0.6212905958735271], [4.103, 0.6505617830160856], [6.074, 0.6630406857421042]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.115, 0.31219152786320475], [0.331, 0.6014214011896283], [0.648, 0.6954477364978782], [1.07, 0.729102514489347], [2.105, 0.75543731592252], [4.103, 0.7709308409994822], [6.074, 0.7759278949526563]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.115, 0.3856538603055972], [0.331, 0.6206340654407051], [0.648, 0.6917343058044145], [1.07, 0.7244237982808543], [2.105, 0.7550664308509236], [4.103, 0.7729247440206944], [6.074, 0.7789250033060258]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.115, 0.39464279093328464], [0.331, 0.6138607019267193], [0.648, 0.6790515706969796], [1.07, 0.7138314742361989], [2.105, 0.7522153867704251], [4.103, 0.7738842689610627], [6.074, 0.7810793952883958]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.115, 0.23562592803235907], [0.331, 0.44852966142440465], [0.648, 0.5455174366971154], [1.07, 0.5956521237768121], [2.105, 0.6426324913407314], [4.103, 0.6727922455332261], [6.074, 0.6860133189253167]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.115, 0.23964986996671114], [0.331, 0.4536631389297804], [0.648, 0.5504534498882924], [1.07, 0.601338040411625], [2.105, 0.6495692492649854], [4.103, 0.680284765912268], [6.074, 0.6932468567217897]]});
                        
                        plot_options.title.text = 'ERQAv1.0';
                        plot_options.subtitle.text = 'x264 + street_show';
                        plot_options.yAxis.title.text = 'ERQAv1.0';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('ERQA-x264-street_show-graph', plot_options);

                    });
                });

            
            