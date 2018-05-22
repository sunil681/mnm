import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from '../shared/number-generator.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num: number;

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
