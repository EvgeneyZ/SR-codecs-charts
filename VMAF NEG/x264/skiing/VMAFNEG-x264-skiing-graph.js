
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.084, 6.448845386505127], [0.254, 34.67182540893555], [0.506, 53.34187698364258], [0.84, 65.7784194946289], [1.704, 76.68229675292969], [3.526, 81.99461364746094], [5.435, 83.61493682861328]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.084, 6.8894267082214355], [0.254, 36.476436614990234], [0.506, 55.24828338623047], [0.84, 67.9779052734375], [1.704, 79.21659851074219], [3.526, 84.77314758300781], [5.435, 86.45096588134766]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.084, 5.517452716827393], [0.254, 30.799999237060547], [0.506, 43.64607620239258], [0.84, 50.851707458496094], [1.704, 56.116371154785156], [3.526, 58.18844985961914], [5.435, 58.75479507446289]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.084, 6.65142297744751], [0.254, 35.8912353515625], [0.506, 54.716148376464844], [0.84, 67.72318267822266], [1.704, 79.36257934570312], [3.526, 85.20926666259766], [5.435, 87.03404235839844]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.084, 6.441280841827393], [0.254, 34.6180419921875], [0.506, 53.271026611328125], [0.84, 65.68133544921875], [1.704, 76.58096313476562], [3.526, 81.91315460205078], [5.435, 83.55562591552734]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.099, 5.817349910736084], [0.257, 27.98856544494629], [0.52, 47.672054290771484], [0.879, 61.49649429321289], [1.744, 77.99790954589844], [3.493, 86.70716857910156], [5.346, 88.95616912841797]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.085, 8.883773803710938], [0.257, 39.68838882446289], [0.512, 57.498321533203125], [0.853, 69.19606018066406], [1.732, 79.24073791503906], [3.567, 83.69746398925781], [5.482, 84.812255859375]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.084, 5.619505882263184], [0.254, 34.79018020629883], [0.506, 53.40694046020508], [0.84, 65.54800415039062], [1.704, 75.72042083740234], [3.526, 80.2201919555664], [5.435, 81.49011993408203]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.084, 6.315023899078369], [0.254, 31.04123306274414], [0.506, 44.329036712646484], [0.84, 51.66986846923828], [1.704, 57.01141357421875], [3.526, 59.1710205078125], [5.435, 59.766746520996094]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.084, 6.444032192230225], [0.254, 34.623531341552734], [0.506, 53.27292251586914], [0.84, 65.70226287841797], [1.704, 76.61480712890625], [3.526, 81.9443588256836], [5.435, 83.57757568359375]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.084, 9.296295166015625], [0.254, 41.98169708251953], [0.506, 60.04685592651367], [0.84, 71.21794891357422], [1.704, 80.4068603515625], [3.526, 84.6700210571289], [5.435, 85.89421844482422]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.084, 13.550102233886719], [0.254, 44.41143798828125], [0.506, 60.449405670166016], [0.84, 70.6774673461914], [1.704, 79.82964324951172], [3.526, 84.45550537109375], [5.435, 85.78650665283203]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.084, 13.521796226501465], [0.254, 43.31031036376953], [0.506, 60.01063919067383], [0.84, 70.83686065673828], [1.704, 80.51741027832031], [3.526, 85.40718078613281], [5.435, 86.86418914794922]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.084, 6.225209712982178], [0.254, 35.78359603881836], [0.506, 54.7003288269043], [0.84, 67.50479125976562], [1.704, 78.88147735595703], [3.526, 84.37760162353516], [5.435, 85.99967193603516]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.084, 6.296985626220703], [0.254, 35.89284896850586], [0.506, 54.8192253112793], [0.84, 67.64924621582031], [1.704, 79.04894256591797], [3.526, 84.5557632446289], [5.435, 86.1925277709961]]});
                        
                        plot_options.title.text = 'VMAF NEG';
                        plot_options.subtitle.text = 'x264 + skiing';
                        plot_options.yAxis.title.text = 'VMAF NEG';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFNEG-x264-skiing-graph', plot_options);

                    });
                });

            
            