import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { createDataModel } from './create.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{map} from 'rxjs/operators'


@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  createForm!:FormGroup;
  createDataObj: createDataModel= new createDataModel;
  allRestaurentData:any;
  showAdd!:boolean;
  showbtn!:boolean;  
  
 
  constructor(private formBuilder:FormBuilder, private api:ApiService,private toastr:ToastrService, private router: Router,private route: ActivatedRoute) { }
  
  
  ngOnInit(): void {  

    // validation

    this.createForm = this.formBuilder.group({
    title:[null, [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
    Description: [null, [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
    product: [null, [ Validators.required]],
    vendor:[null, [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
    collection:[null, [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
    tags: [null, [ Validators.required,Validators.pattern('[a-zA-Z]+$')]]
  },{updateOn:'change'})

  // display edit data

  // console.log(this.route.snapshot.params['id']);
  this.api.getCurrentData(this.route.snapshot.params['id']).subscribe((res)=>{
    // console.log(res);

    this.createForm = this.formBuilder.group({
      title:[res['title'], [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      Description: [res['Description'], [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      product: [res['product'], [ Validators.required]],
      vendor:[res['vendor'], [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      collection:[res['collection'], [ Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      tags: [res['tags'], [ Validators.required,Validators.pattern('[a-zA-Z]+$')]]
    },{updateOn:'change'})

  })

  // change button according to cerate and update data
  const id = this.route.snapshot.params['id'];

  if(id){
    this.showAdd=false;
    this.showbtn=true;
  }else{
    this.showAdd=true;
    this.showbtn=false;
  }
  }
  
  //create data
  onSubmit(){

   if(this.createForm.invalid) {
      return;
    }else{
    this.api.postData(this.createForm.value).subscribe(res=>{

      console.log(res);
      this.router.navigate(['/center-right']);
      this.toastr.success('Data created'); 
    },err=>{
      this.toastr.warning('Data not created'); 
    }
    )
  }
  }

  // update data
  onUpdate(){
  
    if(this.createForm.invalid) {
        return;
      }else{
        this.api.updateData(this.createForm.value,this.route.snapshot.params['id']).subscribe(res=>{
  
        this.router.navigate(['/center-right']);
        this.toastr.success('Data Updated'); 
      },err=>{
        this.toastr.warning('Data not Updated'); 
         }
        )
      }
  }


}
