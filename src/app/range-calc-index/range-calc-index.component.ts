import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-range-calc-index',
  templateUrl: './range-calc-index.component.html',
  styleUrls: ['./range-calc-index.component.css']
})
export class RangeCalcIndexComponent {
  message: string = '';

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    // Handle file selection here if needed
  }

  uploadFile() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.fileUploadService.uploadFile(file).subscribe(response => {
        this.message = response.message;
      });
    } else {
      this.message = 'Please select a CSV file to upload.';
    }
  }
}
