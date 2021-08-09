
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.0998141, 27.59842872619629], [0.29106529999999997, 28.415607452392578], [0.5677574, 28.637210845947266], [0.9279696000000001, 28.73884391784668], [1.4570016000000001, 28.797697067260742], [2.8555584, 28.857574462890625], [6.486673, 28.8978328704834]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.0998141, 27.418258666992188], [0.29106529999999997, 28.208602905273438], [0.5677574, 28.41676902770996], [0.9279696000000001, 28.512292861938477], [1.4570016000000001, 28.568710327148438], [2.8555584, 28.631126403808594], [6.486673, 28.67965316772461]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.0998141, 27.268115997314453], [0.29106529999999997, 27.911087036132812], [0.5677574, 28.060617446899414], [0.9279696000000001, 28.116416931152344], [1.4570016000000001, 28.14313316345215], [2.8555584, 28.164697647094727], [6.486673, 28.176776885986328]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.0998141, 27.5999813079834], [0.29106529999999997, 28.430652618408203], [0.5677574, 28.660411834716797], [0.9279696000000001, 28.768325805664062], [1.4570016000000001, 28.831623077392578], [2.8555584, 28.897991180419922], [6.486673, 28.944961547851562]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.0998141, 27.599525451660156], [0.29106529999999997, 28.417829513549805], [0.5677574, 28.64049530029297], [0.9279696000000001, 28.742523193359375], [1.4570016000000001, 28.801603317260742], [2.8555584, 28.862537384033203], [6.486673, 28.90619468688965]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.1048675, 27.13067626953125], [0.2945664, 27.893524169921875], [0.5838317, 28.153017044067383], [0.9487277000000001, 28.23887062072754], [1.8371578, 28.29749870300293], [3.9111811, 28.324155807495117], [6.009, 28.332956314086914]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.10131359999999999, 27.212533950805664], [0.2946691, 27.901796340942383], [0.5957279999999999, 28.09161376953125], [0.9678566, 28.15799331665039], [1.613903, 28.19741439819336], [3.3093936, 28.228527069091797], [7.5971578, 28.24458885192871]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.0998141, 27.305917739868164], [0.29106529999999997, 28.081539154052734], [0.5677574, 28.28855323791504], [0.9279696000000001, 28.385597229003906], [1.4570016000000001, 28.44708251953125], [2.8555584, 28.49514389038086], [6.486673, 28.521127700805664]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.0998141, 27.29863739013672], [0.29106529999999997, 27.9464111328125], [0.5677574, 28.097482681274414], [0.9279696000000001, 28.154499053955078], [1.4570016000000001, 28.182912826538086], [2.8555584, 28.205612182617188], [6.486673, 28.218399047851562]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.0998141, 27.598724365234375], [0.29106529999999997, 28.4156494140625], [0.5677574, 28.63724136352539], [0.9279696000000001, 28.7385196685791], [1.4570016000000001, 28.796098709106445], [2.8555584, 28.85272789001465], [6.486673, 28.889711380004883]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.0998141, 27.337379455566406], [0.29106529999999997, 28.0018253326416], [0.5677574, 28.20250701904297], [0.9279696000000001, 28.33413314819336], [1.4570016000000001, 28.43577003479004], [2.8555584, 28.5255126953125], [6.486673, 28.577909469604492]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.0998141, 27.26702880859375], [0.29106529999999997, 28.04129981994629], [0.5677574, 28.251605987548828], [0.9279696000000001, 28.3681640625], [1.4570016000000001, 28.463821411132812], [2.8555584, 28.54416847229004], [6.486673, 28.595645904541016]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.0998141, 27.316328048706055], [0.29106529999999997, 28.127033233642578], [0.5677574, 28.350292205810547], [0.9279696000000001, 28.482452392578125], [1.4570016000000001, 28.581764221191406], [2.8555584, 28.666038513183594], [6.486673, 28.72054100036621]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.0998141, 28.195966720581055], [0.29106529999999997, 29.153236389160156], [0.5677574, 29.419145584106445], [0.9279696000000001, 29.53751564025879], [1.4570016000000001, 29.602739334106445], [2.8555584, 29.66162109375], [6.486673, 29.69599723815918]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.0998141, 27.978349685668945], [0.29106529999999997, 28.882404327392578], [0.5677574, 29.133710861206055], [0.9279696000000001, 29.249141693115234], [1.4570016000000001, 29.313676834106445], [2.8555584, 29.37308692932129], [6.486673, 29.408641815185547]]});
                        
                        plot_options.title.text = 'Y-PSNR';
                        plot_options.subtitle.text = 'vvenc + street_show';
                        plot_options.yAxis.title.text = 'Y-PSNR';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('PSNR-H.266-street_show-graph', plot_options);

                    });
                });

            
            