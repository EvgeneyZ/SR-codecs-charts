
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.10539839999999999, 27.829734802246094], [0.2615846, 28.46954345703125], [0.707303, 28.82003402709961], [1.1483242, 28.90962028503418], [1.8585648000000001, 28.972566604614258], [3.1864079999999997, 29.022363662719727], [5.7588643, 29.05584144592285]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.10539839999999999, 27.810728073120117], [0.2615846, 28.455455780029297], [0.707303, 28.817781448364258], [1.1483242, 28.912166595458984], [1.8585648000000001, 28.97989273071289], [3.1864079999999997, 29.03423500061035], [5.7588643, 29.07090950012207]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.10539839999999999, 27.499696731567383], [0.2615846, 27.987274169921875], [0.707303, 28.219358444213867], [1.1483242, 28.26129913330078], [1.8585648000000001, 28.284561157226562], [3.1864079999999997, 28.299312591552734], [5.7588643, 28.309314727783203]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.10539839999999999, 27.829124450683594], [0.2615846, 28.479888916015625], [0.707303, 28.844593048095703], [1.1483242, 28.940237045288086], [1.8585648000000001, 29.00921630859375], [3.1864079999999997, 29.064208984375], [5.7588643, 29.10209083557129]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.10539839999999999, 27.830795288085938], [0.2615846, 28.470521926879883], [0.707303, 28.822582244873047], [1.1483242, 28.91276741027832], [1.8585648000000001, 28.977693557739258], [3.1864079999999997, 29.030193328857422], [5.7588643, 29.066944122314453]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1334515, 27.874420166015625], [0.2684429, 28.492679595947266], [0.4295568, 28.727081298828125], [0.7019789, 28.87816619873047], [2.0429827, 29.034639358520508], [3.5858045, 29.064329147338867], [6.6179818, 29.081758499145508]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.10588030000000001, 27.923049926757812], [0.28256349999999997, 28.665122985839844], [0.7880256000000001, 28.984586715698242], [1.3086096, 29.055400848388672], [2.1826656, 29.097183227539062], [3.7432147, 29.125614166259766], [6.8244029, 29.14116859436035]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.10539839999999999, 27.539112091064453], [0.2615846, 28.142606735229492], [0.707303, 28.4833927154541], [1.1483242, 28.56810188293457], [1.8585648000000001, 28.61839485168457], [3.1864079999999997, 28.65025520324707], [5.7588643, 28.667680740356445]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.10539839999999999, 27.53467559814453], [0.2615846, 28.024396896362305], [0.707303, 28.256772994995117], [1.1483242, 28.299591064453125], [1.8585648000000001, 28.324254989624023], [3.1864079999999997, 28.3398494720459], [5.7588643, 28.349925994873047]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.10539839999999999, 27.833133697509766], [0.2615846, 28.473098754882812], [0.707303, 28.824310302734375], [1.1483242, 28.912952423095703], [1.8585648000000001, 28.97418785095215], [3.1864079999999997, 29.02094078063965], [5.7588643, 29.051782608032227]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.10539839999999999, 27.590961456298828], [0.2615846, 28.058298110961914], [0.707303, 28.321990966796875], [1.1483242, 28.429546356201172], [1.8585648000000001, 28.509862899780273], [3.1864079999999997, 28.579099655151367], [5.7588643, 28.62076187133789]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.10539839999999999, 27.423351287841797], [0.2615846, 27.938472747802734], [0.707303, 28.253007888793945], [1.1483242, 28.378263473510742], [1.8585648000000001, 28.467575073242188], [3.1864079999999997, 28.54170799255371], [5.7588643, 28.5914249420166]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.10539839999999999, 27.49281120300293], [0.2615846, 28.029151916503906], [0.707303, 28.374998092651367], [1.1483242, 28.501117706298828], [1.8585648000000001, 28.594079971313477], [3.1864079999999997, 28.67023277282715], [5.7588643, 28.720539093017578]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.10539839999999999, 28.40791130065918], [0.2615846, 29.146949768066406], [0.707303, 29.55622673034668], [1.1483242, 29.659093856811523], [1.8585648000000001, 29.726396560668945], [3.1864079999999997, 29.772329330444336], [5.7588643, 29.80011558532715]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.10539839999999999, 28.202510833740234], [0.2615846, 28.902658462524414], [0.707303, 29.291059494018555], [1.1483242, 29.390735626220703], [1.8585648000000001, 29.457538604736328], [3.1864079999999997, 29.504045486450195], [5.7588643, 29.5334415435791]]});
                        
                        plot_options.title.text = 'Y-PSNR';
                        plot_options.subtitle.text = 'uavs3e + street_show';
                        plot_options.yAxis.title.text = 'Y-PSNR';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('PSNR-AVS3-street_show-graph', plot_options);

                    });
                });

            
            