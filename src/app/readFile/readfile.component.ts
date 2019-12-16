import { Component, OnInit, ViewChild,ElementRef   } from '@angular/core';
import {CSVRecord} from '../files/File'



@Component({
  selector: 'app-readfile',
  templateUrl: './readfile.component.html',
  styleUrls: ['./readfile.component.css']
})
export class ReadfileComponent{

   public records: any[] = [];
    @ViewChild('csvReader', {static: true}) csvReader: any ;

    uploadListener($event: any): void {

      let text = [];
      let files = $event.srcElement.files;

      if (this.isValidCSVFile(files[0])) {

        let input = $event.target;
        let reader = new FileReader();
        reader.readAsText(input.files[0]);

        reader.onload = () => {
          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

          let headersRow = this.getHeaderArray(csvRecordsArray);

          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        };

      } else {
        alert("Bitte laden Sie ein gültige  .csv Datei.");
        this.fileReset();
      }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
      let csvArr = [];

      for (let i = 1; i < csvRecordsArray.length; i++) {
        let curruntRecord = (<string>csvRecordsArray[i]).split(',');
        if (curruntRecord.length == headerLength) {
          let csvRecord: CSVRecord = new CSVRecord();
          csvRecord.id = curruntRecord[0].substring(0,1).replace(/(^;)|(;$)/g, "");
          csvRecord.Name = curruntRecord[0].substring(2,10).replace(/(^;)|(;$)/g, "");
          csvRecord.Age = curruntRecord[0].substring(7,10).replace(/(^;)|(;$)/g, "");
          csvRecord.City = curruntRecord[0].substring(10,18).replace(/(^;)|(;$)/g, "");
          csvArr.push(csvRecord);
        }
      }
      return csvArr;
    }

    isValidCSVFile(file: any) {
      return file.name.endsWith(".csv");
    }

    getHeaderArray(csvRecordsArr: any) {
      let headers = (<string>csvRecordsArr[0]).split(',');
      let headerArray = [];
      for (let j = 0; j < headers.length; j++) {
        headerArray.push(headers[j]);
      }
      return headerArray;
    }

    fileReset() {
      this.csvReader.nativeElement.value = "";
      this.records = [];
    }
  constructor() { }

  ngOnInit() {
  }

}
