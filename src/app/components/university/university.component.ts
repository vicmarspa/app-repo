import { Component, OnInit } from '@angular/core';
import {UniversityService} from '../../services/university.service';
import {universityShcema} from '../../models/university';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {


  university : universityShcema={
    universityName: '',
    universityConuntry: '',
    universitySpecification: '',
  };

  constructor(
    private universityService: UniversityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }





  postUniversity() {

    this.universityService.addUniversity(this.university)
    .subscribe(
      res => {
        location.reload();
      },
      err => console.log(err)
    )
  }





}
