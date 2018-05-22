import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from '../shared/number-generator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  total: number;
  constructor(private numGenService: NumberGeneratorService) { }

  ngOnInit() {
    this.total = this.numGenService.calculateSum();
  }

}
