import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-postit',
  templateUrl: './edit-postit.component.html',
  styleUrls: ['./edit-postit.component.scss']
})
export class EditPostitComponent implements OnInit {
  formGroup:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
  private dialogRef:MatDialogRef<EditPostitComponent>,private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      nom:['',Validators.required],
      description:['',Validators.required],
      couleur:[''],
      tab:[this.data?.tab]
    });
    if(this.data?.postIt){
      this.formGroup.setValue(this.data.postIt)
    }
  }
  
  
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.dialogRef.close({status:true,postIt:this.formGroup.value})
  }
}
