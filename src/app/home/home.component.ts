import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberGeneratorService } from '../shared/number-generator.service';
import { FormsModule, Form } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num: number;
  myForm: Form;

  constructor(
    private numberGenService: NumberGeneratorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(num) {
    this.numberGenService.addNumber(num);
    this.router.navigate(['result']);
  }
}
