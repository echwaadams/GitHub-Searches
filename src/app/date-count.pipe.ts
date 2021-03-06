import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());

    let dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);
    if(dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  
  }

}
