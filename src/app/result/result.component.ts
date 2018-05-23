import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from '../shared/number-generator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  allNumbers: Array<number> = [];
  total: number;
  constructor(private numGenService: NumberGeneratorService) { }

  ngOnInit() {
    this.allNumbers = [...this.numGenService.getNumbers()];
    this.total = this.numGenService.calculateSum();
  }

}
