import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'of-read-file',
  templateUrl: './read-file.component.html',
  styles: [`
    input[type=file] {
      display: none;
    }
  `]
})
export class ReadFileComponent implements OnInit {

  @Input()
  showFileName = false;

  @Input()
  asText = true;

  @Input()
  asArrayBuffer = false;

  @Input()
  asDataUrl = false; 
  
  @Input()
  asBinaryString = false;

  @Output()
  complete: EventEmitter<any> = new EventEmitter<any>();

  file: any = {
    fileName: undefined,
    data: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  changeListener($event: any) {
    const inputValue = $event.target;
    const files: File = inputValue.files;
    const self = this;
    const reader: FileReader = new FileReader();

    this.file.fileName = files[0].name;
    reader.onloadend = function (e) {
      self.file.data = reader.result;
      self.complete.next(self.file);
    };
    if (this.asText)
      reader.readAsText(files[0]);
    if (this.asDataUrl)
      reader.readAsDataURL(files[0]);
    if (this.asArrayBuffer)
      reader.readAsArrayBuffer(files[0]);
      if (this.asBinaryString)
      reader.readAsBinaryString(files[0]);
  }
}
