import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IgenerateReport } from 'projects/sharedlibrary/src/model/generatereport.model';
import { ApiService } from 'projects/sharedlibrary/src/services/api.service';
import { SharedLibraryModule } from 'projects/sharedlibrary/src/shared-library.module';

@Component({
  selector: 'app-generate-reports-add',
  imports: [SharedLibraryModule],
  templateUrl: './generate-reports-add.component.html',
  styleUrl: './generate-reports-add.component.scss'
})
export class GenerateReportsAddComponent implements OnInit {
  reportForm: FormGroup;
  currentDate = new Date()
  masterDataList = [];
  isNoDataFoundAlert: boolean = false;
  tableHeader = [];
  isAllChecked = false;
  constructor(private apiService: ApiService, private toastr: ToastrService, private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<GenerateReportsAddComponent>) {

  }
  ngOnInit(): void {
    this.createForm()
  }
  // Create the form
  createForm() {
    this.reportForm = this._formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reportType: [''],
      reportDate: [this.currentDate, Validators.required],
      reportTitle: [''],
      userId: [''],
      notes: [''],
      masterData: this._formBuilder.array([]) // Initialize as empty FormArray
    });
  }
  get masterData(): FormArray {
    return this.reportForm.get('masterData') as FormArray;
  }

  // Populate FormArray with checkboxes (based on the masterDataList)
  setMasterData() {
    this.masterDataList.forEach(item => {
      this.masterData.push(this._formBuilder.control(item.selected)); // Initialize with selected state
    });
  }

  // Handle individual row checkbox change event
  onRowCheckboxChange(item: any, i: number) {
    debugger
    const control = this.masterData.controls[i]; // Get the control corresponding to the current row
    control.setValue(item.selected); // Update the control with the current selected state
  }

  // Handle the master checkbox toggle (select all/deselect all)
  toggleAllCheckboxes() {
    if (this.isAllChecked) {
      this.masterDataList.forEach((item, i) => {
        item.selected = true;
        this.masterData.controls[i].setValue(true); // Set the corresponding form control value
      });
    } else {
      this.masterDataList.forEach((item, i) => {
        item.selected = false;
        this.masterData.controls[i].setValue(false); // Set the corresponding form control value
      });
    }
  }
  onDateChange(startDate, endDate) {
    const start = startDate.value;
    const end = endDate.value;
    if (start <= end) {
      const url = `masterdata/masterdatabetweendaterange?startDate=${start}&endDate=${end}`;
      this.apiService.getWithHeaders(url).subscribe(res => {
        if (res) {
          this.masterDataList = res;
          let uniqueHeader = new Set();
          this.masterDataList.forEach(item => {
            const keys = Object.keys(item);
            keys.forEach(key => {
              if (item[key] != null && item[key] !== "") {  
                uniqueHeader.add(key);
              }
            });
          });               
         this.tableHeader = [...uniqueHeader];
         this.masterDataList = this.masterDataList.map(item => {
          let reorderedItem = {};
          this.tableHeader.forEach(key => {
            if (item[key] != null && item[key] !== "") {
              reorderedItem[key] = item[key];
            }
          });
        
          return reorderedItem;
        }); 
        } else {
          this.isNoDataFoundAlert = true;
        }
      })
    } else {
      this.toastr.error("startdate must be smaller than enddate");
    }
    // You can perform additional logic here, like updating other form values, making API calls, etc.
  }
  save() {
    debugger
    const generateReportList: IgenerateReport = {
      reportType: this.reportForm.value.reportType!,
      notes: this.reportForm.value.notes!,
      reportDate: this.reportForm.value.reportDate!,
      reportTitle: this.reportForm.value.reportTitle!,
      startDate: this.reportForm.value.startDate!,
      endDate: this.reportForm.value.endDate!,
      masterData: this.masterDataList.filter(item => item.selected)
    }
    console.log(generateReportList)
    // this.apiService.postWithHeader('GenerateReport', generateReportList).subscribe(res => {
    //   if (res) {
    //     this.toastr.success("Report Created Successfully", 'Success');
    //     this.dialogRef.close(true);
    //   }
    // })
  }
  resetObj() {
    this.createForm();
  }
  closedialog() {
    this.dialogRef.close(true);
  }
}
