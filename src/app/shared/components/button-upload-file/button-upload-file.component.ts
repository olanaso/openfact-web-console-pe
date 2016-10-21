import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-upload-file',
  templateUrl: './button-upload-file.component.html',
  styleUrls: ['./button-upload-file.component.scss']
})
export class ButtonUploadFileComponent implements OnInit {

  @Output() complete: EventEmitter<any> = new EventEmitter<any>();

  private file: any = {
    fileName: undefined,
    data: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  changeListener($event: any) {
    let inputValue = $event.target;
    var files: File = inputValue.files;

    let self = this;
    let reader: FileReader = new FileReader();

    this.file.fileName = files[0].name;
    reader.onloadend = function (e) {
      self.file.data = reader.result;
      self.complete.next(self.file);
    };
    reader.readAsText(files[0]);
  }

}
