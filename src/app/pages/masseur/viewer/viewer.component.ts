import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Massuer } from 'src/app/shared/models/Massuer';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() masseur?: Massuer;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toReserve(){
    if(this.masseur)
    {localStorage.setItem('masseur',JSON.stringify(this.masseur));}
    else{
      localStorage.setItem('masseur',JSON.stringify('null'));
    }
    this.router.navigateByUrl('/reserve');
  }
}
