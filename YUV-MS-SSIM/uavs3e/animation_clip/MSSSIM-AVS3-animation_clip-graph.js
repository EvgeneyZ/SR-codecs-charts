
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.1015896, 0.9790619115034739], [0.3621168, 0.9847975571950277], [0.6300168, 0.9855778415997823], [1.1079695999999999, 0.9861687421798706], [1.9565039999999998, 0.9865865906079611], [3.5264256, 0.9869365096092224], [6.0417528, 0.9872644046942393]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.1015896, 0.9776475628217062], [0.3621168, 0.9829811950524648], [0.6300168, 0.9842522939046224], [1.1079695999999999, 0.9851395885149637], [1.9565039999999998, 0.9855987330277761], [3.5264256, 0.9859800338745117], [6.0417528, 0.9863441387812296]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.1015896, 0.9756526450316111], [0.3621168, 0.9803776144981384], [0.6300168, 0.9809572696685791], [1.1079695999999999, 0.9813977380593618], [1.9565039999999998, 0.9816761910915375], [3.5264256, 0.9818942447503408], [6.0417528, 0.9820680518945059]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.1015896, 0.979012926419576], [0.3621168, 0.984912226597468], [0.6300168, 0.9857194622357687], [1.1079695999999999, 0.9863179822762808], [1.9565039999999998, 0.9867344001928965], [3.5264256, 0.9870753387610117], [6.0417528, 0.9873930613199869]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.1015896, 0.97909348209699], [0.3621168, 0.9848153094450632], [0.6300168, 0.985572874546051], [1.1079695999999999, 0.9861480494340261], [1.9565039999999998, 0.9865567783514658], [3.5264256, 0.9868946472803751], [6.0417528, 0.987216571966807]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1317432, 0.9839440882205963], [0.289476, 0.9883504013220469], [0.47692559999999995, 0.9891803562641144], [0.8285352, 0.9897010326385498], [1.5236904, 0.9900972147782644], [2.7989664, 0.9904221097628275], [5.1483936, 0.9907384117444357]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.11699280000000001, 0.9809061487515768], [0.4599048, 0.9864510993162791], [0.8167848, 0.9871071974436442], [1.4662896, 0.9875582853953043], [2.6201832, 0.9878947933514913], [4.6633128, 0.9881948033968607], [8.1139896, 0.9885056217511495]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.1015896, 0.9827036460240682], [0.3621168, 0.9875255425771078], [0.6300168, 0.9880147775014242], [1.1079695999999999, 0.9882918298244476], [1.9565039999999998, 0.9883757829666138], [3.5264256, 0.9883215328057607], [6.0417528, 0.988223006327947]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.1015896, 0.9762321015199026], [0.3621168, 0.9813564221064249], [0.6300168, 0.9819946686426798], [1.1079695999999999, 0.9824731945991516], [1.9565039999999998, 0.9827994108200073], [3.5264256, 0.9830512603123983], [6.0417528, 0.9832741320133209]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.1015896, 0.9799127181371053], [0.3621168, 0.9856916268666586], [0.6300168, 0.986463208993276], [1.1079695999999999, 0.9870450794696808], [1.9565039999999998, 0.9874676565329233], [3.5264256, 0.9878236055374146], [6.0417528, 0.9881565769513448]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.1015896, 0.983008881409963], [0.3621168, 0.9876730938752493], [0.6300168, 0.9881510337193807], [1.1079695999999999, 0.9884376327196757], [1.9565039999999998, 0.9885712663332621], [3.5264256, 0.9886147975921631], [6.0417528, 0.9886312385400137]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.1015896, 0.9826152622699738], [0.3621168, 0.9867462913195292], [0.6300168, 0.9871685604254404], [1.1079695999999999, 0.9874719182650248], [1.9565039999999998, 0.9876613616943359], [3.5264256, 0.9878294070561727], [6.0417528, 0.9879818061987559]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.1015896, 0.9828247129917145], [0.3621168, 0.9872958163420359], [0.6300168, 0.9877908726533254], [1.1079695999999999, 0.9881529609362284], [1.9565039999999998, 0.9883845945199331], [3.5264256, 0.9885638356208801], [6.0417528, 0.9887142479419708]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.1015896, 0.9818210899829865], [0.3621168, 0.9875936905543009], [0.6300168, 0.9883319834868113], [1.1079695999999999, 0.9888687431812286], [1.9565039999999998, 0.9892566899458567], [3.5264256, 0.9895754754543304], [6.0417528, 0.9898285468419393]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.1015896, 0.9820180038611094], [0.3621168, 0.9877922137578329], [0.6300168, 0.9885052641232809], [1.1079695999999999, 0.9890354772408804], [1.9565039999999998, 0.9894592960675558], [3.5264256, 0.9898116091887156], [6.0417528, 0.9899990359942118]]});
                        
                        plot_options.title.text = 'YUV-MS-SSIM';
                        plot_options.subtitle.text = 'uavs3e + animation_clip';
                        plot_options.yAxis.title.text = 'YUV-MS-SSIM';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('MSSSIM-AVS3-animation_clip-graph', plot_options);

                    });
                });

            
            