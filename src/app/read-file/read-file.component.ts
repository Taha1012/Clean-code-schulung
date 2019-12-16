import {Component, ViewChild} from '@angular/core';
import {CSVRecord} from '../files/File';


@Component({
    selector: 'app-read-file',
    templateUrl: './read-file.component.html',
    styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent {

    public records: any[] = [];
    @ViewChild('csvReader', {static: true}) csvReader: any;

    constructor() {
    }

    uploadListener($event: any): void {

        const text = [];
        const files = $event.srcElement.files;

        if (this.isValidCSVFile(files[0])) {

            const input = $event.target;
            const reader = new FileReader();
            reader.readAsText(input.files[0]);

            reader.onload = () => {
                const csvData = reader.result;
                const csvRecordsArray = (csvData as string).split(/\r\n|\n/);

                const headersRow = this.getHeaderArray(csvRecordsArray);

                this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
            };

        } else {
            alert('Bitte laden Sie ein gültige  .csv Datei.');
            this.fileReset();
        }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
        const csvArr = [];

        for (let i = 1; i < csvRecordsArray.length; i++) {
            const currentRecord = (csvRecordsArray[i] as string).split(';');
            // if (currentRecord.length === headerLength) {
            const csvRecord: CSVRecord = new CSVRecord();
            currentRecord.forEach((element) => {

            });
            csvRecord.name = currentRecord[0];
            csvRecord.age = currentRecord[1];
            csvRecord.city = currentRecord[2];
            csvArr.push(csvRecord);
            // }
        }
        return csvArr;
    }

    isValidCSVFile(file: any) {
        return file.name.endsWith('.csv');
    }

    getHeaderArray(csvRecordsArr: any) {
        const headers = (csvRecordsArr[0] as string).split(',');
        const headerArray = [];
        for (let j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }

    fileReset() {
        this.csvReader.nativeElement.value = '';
        this.records = [];
    }

    ngOnInit() {
    }

}
