import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/shared/services/reserve.service';
import { Reserve } from 'src/app/shared/models/Reserve';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  selected?: Date | null;
  freeSpace?: Array<number> = [8,9,10,11,12,13,14,15,16];
  reservedSpace: Array<number>=[];
  constructor(private reserveService:ReserveService,private router:Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    const masseur = JSON.parse(localStorage.getItem('masseur') as string);
if (user&&masseur){
  }
  else{
    this.router.navigateByUrl('/main');
  }
    
  }
  reload(){
    if(this.selected){
    console.log( this.selected)
    this.reserveService.getByDate( this.selected.toISOString().substring(0,10)).subscribe(reserves =>{
      if(this.freeSpace && reserves){
        
     
        for (const key in reserves) {
            this.reservedSpace.push(reserves.hour);
          }
        
        
      }
    });
  }
    // this.router.navigateByUrl("/reserve");
  }

  }


