
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.10539839999999999, 0.9587532877922058], [0.2615846, 0.9760623276233673], [0.707303, 0.9859263300895691], [1.1483242, 0.9887332518895467], [1.8585648000000001, 0.9906513094902039], [3.1864079999999997, 0.992031087478002], [5.7588643, 0.9930005967617035]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.10539839999999999, 0.958759993314743], [0.2615846, 0.9760729273160299], [0.707303, 0.9860852559407552], [1.1483242, 0.9889153142770132], [1.8585648000000001, 0.990863710641861], [3.1864079999999997, 0.9922787646452585], [5.7588643, 0.9932908316453298]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.10539839999999999, 0.9564695854981741], [0.2615846, 0.9724034468332926], [0.707303, 0.9810493091742197], [1.1483242, 0.9833017885684967], [1.8585648000000001, 0.9847575624783834], [3.1864079999999997, 0.985737939675649], [5.7588643, 0.9864135086536407]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.10539839999999999, 0.9586499730745951], [0.2615846, 0.9760818183422089], [0.707303, 0.9860679805278778], [1.1483242, 0.9889118373394012], [1.8585648000000001, 0.9908629457155863], [3.1864079999999997, 0.9922771553198496], [5.7588643, 0.9932839473088583]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.10539839999999999, 0.9588572084903717], [0.2615846, 0.9760261674722036], [0.707303, 0.9859103957811991], [1.1483242, 0.9887229800224304], [1.8585648000000001, 0.9906527996063232], [3.1864079999999997, 0.9920527935028076], [5.7588643, 0.9930481910705566]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1334515, 0.958589086929957], [0.2684429, 0.9760382970174154], [0.4295568, 0.9826071262359619], [0.7019789, 0.9872508843739828], [2.0429827, 0.9922450383504232], [3.5858045, 0.9934409856796265], [6.6179818, 0.9942492047945658]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.10588030000000001, 0.9592833717664083], [0.28256349999999997, 0.9776436984539032], [0.7880256000000001, 0.9871582190195719], [1.3086096, 0.9897253215312958], [2.1826656, 0.9913874467213949], [3.7432147, 0.9924696683883667], [6.8244029, 0.9932384292284647]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.10539839999999999, 0.9592752456665039], [0.2615846, 0.9762086868286133], [0.707303, 0.9852792421976725], [1.1483242, 0.9874477585156759], [1.8585648000000001, 0.9886244932810465], [3.1864079999999997, 0.9892248113950094], [5.7588643, 0.9895261327425638]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.10539839999999999, 0.9567980170249939], [0.2615846, 0.9728377858797709], [0.707303, 0.9814941386381785], [1.1483242, 0.9837504128615061], [1.8585648000000001, 0.9852109650770823], [3.1864079999999997, 0.9861943026383718], [5.7588643, 0.9868740439414978]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.10539839999999999, 0.9588087598482767], [0.2615846, 0.9761248032251993], [0.707303, 0.9859998822212219], [1.1483242, 0.9888052145640055], [1.8585648000000001, 0.9907184739907583], [3.1864079999999997, 0.9920902649561564], [5.7588643, 0.9930519262949625]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.10539839999999999, 0.9576432605584463], [0.2615846, 0.974113384882609], [0.707303, 0.982396125793457], [1.1483242, 0.9850836594899496], [1.8585648000000001, 0.9871851702531179], [3.1864079999999997, 0.9888333181540171], [5.7588643, 0.9899464348951975]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.10539839999999999, 0.957974890867869], [0.2615846, 0.97371173898379], [0.707303, 0.9825381735960642], [1.1483242, 0.9855063756306967], [1.8585648000000001, 0.9876471062501272], [3.1864079999999997, 0.9892305334409078], [5.7588643, 0.9903055528799692]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.10539839999999999, 0.957363506158193], [0.2615846, 0.9735942383607229], [0.707303, 0.9829041759173075], [1.1483242, 0.9859957297643026], [1.8585648000000001, 0.9882443249225616], [3.1864079999999997, 0.9899019201596578], [5.7588643, 0.9910296003023783]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.10539839999999999, 0.9596827427546183], [0.2615846, 0.9770046770572662], [0.707303, 0.9868184228738149], [1.1483242, 0.989543487628301], [1.8585648000000001, 0.9913444916407267], [3.1864079999999997, 0.992578943570455], [5.7588643, 0.9933979908625284]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.10539839999999999, 0.9595779677232107], [0.2615846, 0.9768965840339661], [0.707303, 0.9867686033248901], [1.1483242, 0.9895311196645101], [1.8585648000000001, 0.9913780391216278], [3.1864079999999997, 0.9926661252975464], [5.7588643, 0.9935534298419952]]});
                        
                        plot_options.title.text = 'YUV-MS-SSIM';
                        plot_options.subtitle.text = 'uavs3e + street_show';
                        plot_options.yAxis.title.text = 'YUV-MS-SSIM';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('MSSSIM-AVS3-street_show-graph', plot_options);

                    });
                });

            
            