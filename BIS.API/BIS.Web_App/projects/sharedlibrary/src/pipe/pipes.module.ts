import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BisdefaultDatePipe } from './bisdefault-date.pipe';

@NgModule({
   declarations: [

   ],
   imports: [
      CommonModule,
   ],
   exports: [
      BisdefaultDatePipe
     
   ],
   providers: [DatePipe]
})
export class PipesModule { }
