import { Component, OnInit } from '@angular/core';

class Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList = [
    { name: 'Daycare center system', description: 'cat creach system description' },
    { name: 'H M', description: 'Pension care HM module' },
    { name: 'Worknet Backportal', description: 'worknet back office portal' },
    { name: '066 025', description: 'statistic forms' },
  ];

  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project) {

    this.selectedProject = project;

  }

}
