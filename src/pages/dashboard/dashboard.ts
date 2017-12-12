import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Chart} from 'chart.js';
import {Api} from '../../app/api';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class dashboardPage {
    @ViewChild('lineCanvasOne') lineCanvasOne;
    @ViewChild('doughnutCanvasOne') doughnutCanvasOne
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvasTwo') doughnutCanvasTwo;
    @ViewChild('lineCanvasTwo') lineCanvasTwo;
 
    lineChartOne: any;
    doughnutChartOne: any;
    barChart: any;
    doughnutChartTwo: any;
    lineChartTwo: any;

  constructor(public navCtrl: NavController,public api:Api) {
   

  }

ionViewDidLoad() {
        var json_objs= [];
        var cpg_count = [];
        var disk_count =[];
        var capacity_size = [];
        var bandwidth =[];
        var capacity_free =[];

        var global_labels =["System1","System2","System3","System4","System5","System6","System7","System8","System9","System10"];
        console.log(this)
        this.api.listSystems( (dataArg) => {
            //console.log(dataArg);
            var i = 0;
            for (i=0; i<dataArg.length; i++){
            json_objs.push(dataArg[i]);
            cpg_count.push(parseInt(dataArg[i].cpgCount));
            disk_count.push(parseInt(dataArg[i].disks_total_diskCount));
            capacity_size.push(parseInt(dataArg[i].capacity_total_sizeTiB));
            capacity_free.push(parseInt(dataArg[i].capacity_total_freeTiB));
            bandwidth.push(dataArg[i].performance_portBandwidthData_total_dataRateKBPSAvg);
            console.log(this)
            }
            this.lineChartOne = new Chart(this.lineCanvasOne.nativeElement, {
 
            type: 'line',
            data: {
                labels: global_labels ,
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: cpg_count,
                        spanGaps: true,
                    }
                ]
            }
 
        });
        this.lineChartOne.update();

        this.doughnutChartOne = new Chart(this.doughnutCanvasOne.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: global_labels,
                datasets: [{
                    label: 'disk_count',
                    data: disk_count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
        this.doughnutChartOne.update();
        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: global_labels,
                datasets: [{
                    label: 'capacity_size',
                    data: capacity_size,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
        this.barChart.update();

        this.doughnutChartTwo = new Chart(this.doughnutCanvasTwo.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: global_labels,
                datasets: [{
                    label: 'bandwidth',
                    data: bandwidth,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
        this.doughnutChartTwo.update();
        this.lineChartTwo = new Chart(this.lineCanvasTwo.nativeElement, {
 
            type: 'line',
            data: {
                labels: global_labels,
                datasets: [
                    {
                        label:'capacity free',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: capacity_free,
                        spanGaps: false,
                    }
                ]
            }
 
        });
       this.lineChartTwo.update();
            
        });

             
}
}