import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/Services/project-data.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  constructor(private lt:ProjectDataService) { }

  ngOnInit(): void {
    this.lt.Viewpage(data).subscribe((res)=>{
       console.log(res+"ghjkj");
       
    })
  }

}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

