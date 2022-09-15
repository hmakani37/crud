import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-center-right',
  templateUrl: './center-right.component.html',
  styleUrls: ['./center-right.component.css']
})
export class CenterRightComponent implements OnInit {

  allRestaurentData:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    // get data from api
    this.api.getData().subscribe(res=>{
      this.allRestaurentData=res;
    })
  }

  // delete data
  deleted(data:any){

    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
      //to delete data
        this.api.deleteData(data.id).subscribe(res=>{
          window.location.reload();//to quick refresh
          })
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
      }  
    })
   
      }
}
