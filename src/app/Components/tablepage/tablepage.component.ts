import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/Services/project-data.service';

@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.scss']
})
export class TablepageComponent implements OnInit {
  projects: any
  public selectddata: any
  data:any;
  constructor(private ps: ProjectDataService) { }
  public editdata(projectId: any) {
    this.ps.getslectedrow(projectId).subscribe((res) => {
      console.log(res)
      this.selectddata = res;
    })
  }

  public getinfo() {
    this.ps.getProjects().subscribe((res) => {
      this.projects = res;
    })
  }

  public deletedata(id: any) {
    this.ps.dleteslectedrow(id).subscribe((res) => {
      console.log(res);
      this.getinfo();
    })
  }
  Viewdata(id:any){
    this.ps.Viewpage(id).subscribe((res)=>{
           console.log(res);
           
    })
  }

  ngOnInit(): void {
    this.getinfo()
    console.log("nameeeeee", );
    this.data=localStorage.getItem('Name')
  }
}
