
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.115, 17.92730712890625], [0.331, 54.2706298828125], [0.648, 76.72425842285156], [1.07, 88.49435424804688], [2.105, 98.2897720336914], [4.103, 103.1581039428711], [6.074, 104.88211822509766]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.115, 19.17357635498047], [0.331, 57.56391906738281], [0.648, 81.91000366210938], [1.07, 96.14530944824219], [2.105, 108.63518524169922], [4.103, 115.50775909423828], [6.074, 118.37499237060547]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.115, 17.09162139892578], [0.331, 48.532344818115234], [0.648, 64.41870880126953], [1.07, 71.76648712158203], [2.105, 77.09803771972656], [4.103, 79.44573211669922], [6.074, 80.25003814697266]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.115, 18.39846420288086], [0.331, 55.81026077270508], [0.648, 78.65570068359375], [1.07, 91.23922729492188], [2.105, 108.46536254882812], [4.103, 107.3304672241211], [6.074, 109.38382720947266]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.115, 17.91152000427246], [0.331, 54.26055908203125], [0.648, 76.68531036376953], [1.07, 88.47760009765625], [2.105, 98.27828979492188], [4.103, 103.19294738769531], [6.074, 104.97360229492188]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.115, 7.449592113494873], [0.354, 45.45244216918945], [0.681, 74.04335021972656], [1.114, 92.9497299194336], [2.181, 110.86325073242188], [4.264, 121.23494720458984], [6.303, 124.9867935180664]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.115, 20.110227584838867], [0.33, 59.86222839355469], [0.645, 83.08685302734375], [1.066, 95.72533416748047], [2.103, 105.61324310302734], [4.103, 110.0286636352539], [6.072, 111.22928619384766]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.115, 17.25733184814453], [0.331, 53.846920013427734], [0.648, 75.24940490722656], [1.07, 86.08049011230469], [2.105, 93.96387481689453], [4.103, 97.5204849243164], [6.074, 98.71881866455078]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.115, 17.72483253479004], [0.331, 49.12236404418945], [0.648, 65.31201934814453], [1.07, 72.7060317993164], [2.105, 78.30851745605469], [4.103, 80.83269500732422], [6.074, 81.67849731445312]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.115, 17.855438232421875], [0.331, 54.21103286743164], [0.648, 76.64761352539062], [1.07, 88.4310531616211], [2.105, 98.21241760253906], [4.103, 103.07647705078125], [6.074, 104.80271911621094]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.115, 22.988304138183594], [0.331, 66.7254867553711], [0.648, 90.53069305419922], [1.07, 102.77445220947266], [2.105, 113.33761596679688], [4.103, 119.59956359863281], [6.074, 121.9724349975586]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.115, 30.778764724731445], [0.331, 71.25233459472656], [0.648, 92.15409088134766], [1.07, 103.55987548828125], [2.105, 114.02975463867188], [4.103, 120.15252685546875], [6.074, 122.30810546875]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.115, 30.753982543945312], [0.331, 70.51993560791016], [0.648, 91.60635375976562], [1.07, 102.91820526123047], [2.105, 112.88555145263672], [4.103, 118.55024719238281], [6.074, 120.65425872802734]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.115, 17.793710708618164], [0.331, 55.25041580200195], [0.648, 77.86883544921875], [1.07, 90.01919555664062], [2.105, 100.06588745117188], [4.103, 105.10836791992188], [6.074, 106.89271545410156]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.115, 17.956974029541016], [0.331, 55.55352020263672], [0.648, 78.32678985595703], [1.07, 90.65801239013672], [2.105, 100.85379791259766], [4.103, 106.04782104492188], [6.074, 107.90264892578125]]});
                        
                        plot_options.title.text = 'VMAF';
                        plot_options.subtitle.text = 'x264 + street_show';
                        plot_options.yAxis.title.text = 'VMAF';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('VMAFCLIPPED-x264-street_show-graph', plot_options);

                    });
                });

            
            