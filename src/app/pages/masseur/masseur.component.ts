import { Component, OnInit } from '@angular/core';
import { Massuer } from 'src/app/shared/models/Massuer';
import { MassuerService } from 'src/app/shared/services/massuer.service';

@Component({
  selector: 'app-masseur',
  templateUrl: './masseur.component.html',
  styleUrls: ['./masseur.component.scss']
})
export class MasseurComponent implements OnInit {
  masseurs: Array<Massuer> =[];

  constructor(private masseurService:MassuerService) { }

  ngOnInit(): void {
    this.masseurService.getAll().subscribe(masseurs =>{
      this.masseurs = masseurs;
    });
  }

    
  }


