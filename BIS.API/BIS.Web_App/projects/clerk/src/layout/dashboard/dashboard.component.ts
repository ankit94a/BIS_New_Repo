import { Component, OnInit } from '@angular/core';
import { SharedLibraryModule } from '../../../../sharedlibrary/src/shared-library.module';
import { ApiService } from '../../../../sharedlibrary/src/services/api.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { DashboardFmnAspect } from 'projects/sharedlibrary/src/model/dashboard-fmn-aspect';
import { FilterModel } from 'projects/sharedlibrary/src/model/dashboard.model';

@Component({
  selector: 'app-dashboard',
  imports: [SharedLibraryModule,BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
    totalRecords: number = 0;
    totalRecordsToday: number = 0;
    totalRecordsOneWeek: number = 0;
    fmnList: string[] = ["33 Corps", "27 Mtn Div", "17 Mtn Div", "111 Sub Area", "20 Mtn Div", "3 Corps", "2 Mtn Div", "56 Mtn Div", "57 Mtn Div", "4 Corps", "5 Mtn Div", "21 Mtn Div", "71 Mtn Div", "17 Corps", "59 Mtn Div", "23 Mtn Div"];
    sectorList: any = [];
    filterModel:FilterModel=new FilterModel()
    constructor(private apiService:ApiService){

    }
    ngOnInit(): void {
      this.getTodayCount();
      this.getTotalCount();
      this.getWeekCount();
    }
    onFilterChange(value){  
      debugger;
      this.filterModel     
        switch (value) {
          case '4 Corps':
            this.sectorList = ['Zimthang', 'Lungro La', 'Bum La','Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
            break;
            case '5 Mtn Div':
            this.sectorList = ['Zimthang', 'Lungro La', 'Bum La'];
            break;
            case '71 Mtn Div':
            this.sectorList = ['Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
            break;
            case '21 Mtn Div':
            this.sectorList = ['Zimthang', 'Lungro La', 'Bum La','Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
            break;
    
          case '17 Mtn Div':
            this.sectorList = ['Semi Held', 'Chola', 'NatuLa', 'DokaLa'];
            break;
          case '27 Mtn Div':
            this.sectorList = ['MSS', 'PSS', 'NESS'];
            break;       
            case '3 Corps':
            this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley','Subansiri Valley', 'Siyom Valley', 'Siang Valley','Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
            break;
          case '2 Mtn Div':
            this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley'];
            break;
          case '56 Mtn Div':
            this.sectorList = ['Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
            break;
          case '57 Mtn Div':
            this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
            break;           
            // case 'Option 3':
            //   this.childItems = ['Suboption X', 'Suboption Y', 'Suboption Z'];
            // break;
          default:
            this.sectorList = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
            break;
        }
        if (!value) {
          this.sectorList = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
        }     
    }
    getTotalCount(){
      this.apiService.getWithHeaders('Rpt/count/').subscribe(res =>{
        if(res){      
          this.totalRecords = res.result;
        }
      })
    }
    getTodayCount(){
      this.apiService.getWithHeaders('Rpt/count/today').subscribe(res =>{
        if(res){
          this.totalRecordsToday = res.count;
        }
      })
    }
    getWeekCount(){
      this.apiService.getWithHeaders('Rpt/count/lastweek').subscribe(res =>{
        if(res){
          this.totalRecordsOneWeek = res.count;
        }
      })
    }

    charts = [
      {
        title: 'Chart 1',
        data: [30, 70],
        labels: ['Category A', 'Category B'],
        values: [
          { label: 'Category A', value: '30%' },
          { label: 'Category B', value: '70%' }
        ]
      },
      {
        title: 'Chart 2',
        data: [50, 50],
        labels: ['Category C', 'Category D'],
        values: [
          { label: 'Category C', value: '50%' },
          { label: 'Category D', value: '50%' }
        ]
      },
      {
        title: 'Chart 3',
        data: [20, 80],
        labels: ['Category E', 'Category F'],
        values: [
          { label: 'Category E', value: '20%' },
          { label: 'Category F', value: '80%' }
        ]
      }
    ];
  
     chartData: ChartData<'pie', number[], string | string[]> = {
      labels: ['Label 1', 'Label 2'],
      datasets: [
        {
          data: [30, 70],
        },
      ],
    };
    chartDataLineFrmn12Months: ChartData<'line', number[], string | string[]> = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Fmn',
          data: [30, 45, 28, 50, 60, 33, 45, 40, 55, 48, 62, 70],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Semi-transparent blue
          borderColor: 'rgba(54, 162, 235, 1)', // Solid blue
          borderWidth: 1.2,
          fill: true, // Fill area under the line
          tension: 0.4, // Adds smoothness to the line
        },
      ],
    };
  
    // Line chart options
    public chartOptions: ChartOptions<'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top', // Show the legend at the top
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Months',
          },
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Values',
          },
          beginAtZero: true,
        },
      },
    };
    
}
