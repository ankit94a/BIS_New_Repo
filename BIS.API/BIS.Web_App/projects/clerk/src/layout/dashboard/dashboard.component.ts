import { Component, OnInit } from '@angular/core';
import { SharedLibraryModule } from '../../../../sharedlibrary/src/shared-library.module';
import { ApiService } from '../../../../sharedlibrary/src/services/api.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { DashboardFmnAspect } from 'projects/sharedlibrary/src/model/dashboard-fmn-aspect';
import { DasboardChart, FilterModel } from 'projects/sharedlibrary/src/model/dashboard.model';
import { AuthService } from 'projects/sharedlibrary/src/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [SharedLibraryModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  totalRecords: number = 0;
  totalRecordsToday: number = 0;
  totalRecordsOneWeek: number = 0;
  // fmnList: string[] = ["33 Corps", "27 Mtn Div", "17 Mtn Div", "111 Sub Area", "20 Mtn Div", "3 Corps", "2 Mtn Div", "56 Mtn Div", "57 Mtn Div", "4 Corps", "5 Mtn Div", "21 Mtn Div", "71 Mtn Div", "17 Corps", "59 Mtn Div", "23 Mtn Div"];
  frmnList:string[]=[];
  sectorList: any = [];
  filterModel: FilterModel = new FilterModel();
  indicatorFilter:FilterModel = new FilterModel();

  frmInputChartData:ChartData<'pie'>;
  frm30DaysChartData:ChartData<'pie'>;
  frmTodayChartData:ChartData<'pie'>;
  frm12MonthsChartData:ChartData<'line'>;

  // aspectAllChartData:ChartData<'pie'>;
  aspectAllChartData: any = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ]
  };
  aspect30DaysChartData:ChartData<'pie'>;
  aspectTodayChartData:ChartData<'pie'>;
  aspect12MonthsChartData:ChartData<'line'>;

  // Indicator
  indicatorData:ChartData<'pie'>;
  indicatorTop5Data:ChartData<'pie'>;

  // EnLocation
  enLocationData:ChartData<'pie'>;
  enLocationData7Days:ChartData<'pie'>;
  constructor(private apiService: ApiService,private authService:AuthService) {
    if(this.authService.getDivisionName){
      this.frmnList.push(this.authService.getDivisionName());
      this.filterModel.frmn = this.frmnList;
      this.onFilterChange(this.frmnList[0])
      this.getFrmAndAspect();
      this.getIndicatorAndLocation();
    }
  }
  ngOnInit(): void {
    // this.getTodayCount();
    // this.getTotalCount();
    // this.getWeekCount();
    // this.getFrmInputData()
  }
  getFrmAndAspect(){
    this.getFrmInputData();
    this.getFrm30DaysData();
    this.getFrmTodayData();
    this.getFrm12MonthsData();
    this.getAspectAllData()
    this.getAspect30DaysData();
    this.getAspectTodayData();
    this.getAspect12MonthsData();
  }
  getIndicatorAndLocation(){
    this.getIndicatorData();
    this.getTop5IndicatorData();
    this.getTop5EnLocationData();
    this.getTop5EnLoc7DaysData();
  }
  // Getting Frmn Chart Data
  getFrmInputData(){
    this.apiService.postWithHeader('dashboard/fmn',this.filterModel).subscribe(res =>{
      if(res){     
        this.frmInputChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  getFrm30DaysData(){
    this.apiService.postWithHeader('dashboard/fmn/30days',this.filterModel).subscribe(res =>{
      if(res){   
        this.frm30DaysChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  getFrmTodayData(){
    this.apiService.postWithHeader('dashboard/fmn/today',this.filterModel).subscribe(res =>{
      if(res){   
        this.frmTodayChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  getFrm12MonthsData(){
    this.apiService.postWithHeader('dashboard/fmn/last12Months',this.filterModel).subscribe(res =>{
      if(res){   
        this.frm12MonthsChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name,
              backgroundColor: 'rgba(151, 126, 201, 0.5)', // Semi-transparent blue
              borderColor: 'rgba(150, 68, 150, 0.5)', // Solid blue
              borderWidth: 1.2,
              fill: true, // Fill area under the line
              tension: 0.4, // Adds smoothness to the line
            },
          ],
        };
      }
    })
  }
  // Getting Aspect Chart Data
  getAspectAllData(){
    this.apiService.postWithHeader('dashboard/aspect',this.filterModel).subscribe(res =>{
      if(res){     
        this.aspectAllChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name
              // ,backgroundColor:this.bgColor
             },
          ],
        };
      }
    })
  }
  
  getAspect30DaysData(){
    this.apiService.postWithHeader('dashboard/aspect/30days',this.filterModel).subscribe(res =>{
      if(res){   
        this.aspect30DaysChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name
              // ,backgroundColor:this.bgColor
            
            },
          ],
        };
      }
    })
  }
  getAspectTodayData(){
    this.apiService.postWithHeader('dashboard/aspect/today',this.filterModel).subscribe(res =>{
      if(res){   
        this.aspectTodayChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name 
              // ,backgroundColor:this.bgColor
            },
          ],
        };
      }
    })
  }
  getAspect12MonthsData(){
    this.apiService.postWithHeader('dashboard/aspect/last12Months',this.filterModel).subscribe(res =>{
      if(res){   
        this.aspect12MonthsChartData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name,
              backgroundColor: 'rgba(151, 126, 201, 0.5)', // Semi-transparent blue
              borderColor: 'rgba(150, 68, 150, 0.5)', // Solid blue
              borderWidth: 1.2,
              fill: true, // Fill area under the line
              tension: 0.4, // Adds smoothness to the line
            },
          ],
        };
      }
    })
  }
  // Getting Indicator Chart Data
  getIndicatorData(){
    this.apiService.postWithHeader('dashboard/indicator',this.indicatorFilter).subscribe(res =>{
      if(res){     
        this.indicatorData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }

  getTop5IndicatorData(){
    this.apiService.postWithHeader('dashboard/indicator/top5',this.indicatorFilter).subscribe(res =>{
      if(res){     
        this.indicatorTop5Data = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  getTop5EnLocationData(){
    this.apiService.postWithHeader('dashboard/location',this.indicatorFilter).subscribe(res =>{
      if(res){     
        this.enLocationData = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  getTop5EnLoc7DaysData(){
    this.apiService.postWithHeader('dashboard/location/7days',this.filterModel).subscribe(res =>{
      if(res){     
        this.enLocationData7Days = {
          labels: res.name,
          datasets: [
            { data: res.count, label: res.name },
          ],
        };
      }
    })
  }
  public  bgColor= [
    'rgba(54, 162, 235, 0.8)',   // Blue
    'rgba(255, 159, 64, 0.8)',   // Orange
    'rgba(22, 196, 127, 0.8)',   // Green
    'rgba(255, 99, 132, 0.9)',   // Red
    'rgba(112, 128, 144, 0.7)',  // Gray
    'rgba(249, 253, 129, 0.7)',  // Yellow
    'rgba(153, 102, 255, 0.8)',  // Purple
    'rgba(75, 192, 192, 0.8)',   // Teal
    'rgba(255, 87, 51, 0.8)',    // Bright Red-Orange
    'rgba(128, 0, 128, 0.8)',    // Purple
    'rgba(255, 215, 0, 0.8)',    // Gold
    'rgba(0, 255, 127, 0.8)',    // Spring Green
    'rgba(70, 130, 180, 0.8)',   // Steel Blue
    'rgba(240, 128, 128, 0.8)',  // Light Coral
    'rgba(135, 206, 250, 0.8)',  // Light Sky Blue
    'rgba(199, 21, 133, 0.8)',   // Medium Violet Red
    'rgba(0, 128, 128, 0.8)',    // Teal
    'rgba(154, 205, 50, 0.8)',   // Yellow-Green
  ]

  public ChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        // display:false
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataLabel = tooltipItem.label;
            const dataValue = tooltipItem.raw;
            return ` ${dataValue}`; 
          }
        }
      }
    },
    elements: {
      arc: {
        backgroundColor: this.bgColor
      },
    },
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataValue = tooltipItem.raw;
            return ` ${dataValue}`; 
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 60,
          minRotation: 60,
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
  onFilterChange(value) {
    let item = [];
    switch (value) {
      case '4 Corps':
        item = ['Zimthang', 'Lungro La', 'Bum La', 'Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas']
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '5 Mtn Div':
        item = ['Zimthang', 'Lungro La', 'Bum La']
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '71 Mtn Div':
        item = ['Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '21 Mtn Div':
        item = ['Zimthang', 'Lungro La', 'Bum La', 'Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case 'HQ 17 Inf Div':
        item = ['Semi Held', 'Chola', 'NatuLa', 'DokaLa'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '27 Mtn Div':
        item = ['MSS', 'PSS', 'NESS'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '3 Corps':
        item = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley', 'Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '2 Mtn Div':
        item = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '56 Mtn Div':
        item = ['Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      case '57 Mtn Div':
        item = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        this.sectorList = [...this.sectorList, ...item];
        break;
      default:
        item = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
        this.sectorList = [...this.sectorList, ...item];
        break;
    }
    if (!value) {
      item = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
      this.sectorList = [...this.sectorList, ...item];
    }
  }
  getTotalCount() {
    this.apiService.getWithHeaders('Rpt/count/').subscribe(res => {
      if (res) {
        this.totalRecords = res.result;
      }
    })
  }
  getTodayCount() {
    this.apiService.getWithHeaders('Rpt/count/today').subscribe(res => {
      if (res) {
        this.totalRecordsToday = res.count;
      }
    })
  }
  getWeekCount() {
    this.apiService.getWithHeaders('Rpt/count/lastweek').subscribe(res => {
      if (res) {
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
 

}
