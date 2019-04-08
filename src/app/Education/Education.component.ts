import {
  Component,
  OnInit
} from '@angular/core';


declare interface ProjectCard {
  Title: String;
  Short_Description: String;
  Technology: String;
  Github_Link: String;
  Long_Description: String;
}

export const projectCards: ProjectCard[] = [{
    Title: 'Ruby Hunter',
    Short_Description: '2nd Year Java Project',
    Technology: 'Java',
    Github_Link: 'https://github.com/mysterydeveloper/ruby-hunter',
    Long_Description: 'As a second year project I built a 2d game in java called ruby hunter, ' +
      'I was asked to give a presentation on this project for the current second years on this project'
  },
  {
    Title: 'Tower Defence Game ',
    Short_Description: '3rd Year Project',
    Technology: 'Unity with Tango SDK and the Project Tango device',
    Github_Link: 'https://github.com/TangoDevs/Mock1 ',
    Long_Description: 'A tower defence game made in an augmented reality setting. Part of my 3rd year project. '
  },
  {
    Title: 'Internal Time recording tool ',
    Short_Description: 'Internal Company time recording tool',
    Technology: 'SAPUI5 with SAP Hana Xs advanced ',
    Github_Link: ' ',
    Long_Description: 'Roles  i was involved in : Architect, Team Lead, Scrum Master, Mentor, Product owner and Lead Developer  '
  },
];
@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.css']
})
export class EducationComponent implements OnInit {
  projectCardItems: any[];
  constructor() {}

  ngOnInit() {
    this.projectCardItems = projectCards.filter(item => item);
  }

}
