import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Dataclass';
import { ProjectDataService } from 'src/Services/project-data.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  project = new Project();
  @Input() public parentdata: any;
  constructor(private ps: ProjectDataService, private router: Router) { }
  onSubmit() {
    if (this.parentdata) {
      console.log("this.project");
      this.ps.updateProjects(this.project.projectId, this.project).subscribe((res) => {

        console.log(res);
      })
    }
    else {
      this.ps.createProjects(this.project).subscribe((res) => {
        alert("succesfully creted");

        this.router.navigate([""])
        console.log(res);
      })
    }
    console.log(this.project);

  }
  ngOnInit(): void {
    if (this.parentdata) {
      this.project = this.parentdata
    }
    console.log(this.parentdata)

  }
}
