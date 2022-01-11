import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass']
})
export class SkeletonComponent implements OnInit {

  public fecha = new Date().getTime()
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
