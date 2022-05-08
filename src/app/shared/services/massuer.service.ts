import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Massuer } from '../models/Massuer';
@Injectable({
  providedIn: 'root'
})
export class MassuerService {
  collectionName = 'Massuers';
  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection<Massuer>(this.collectionName).valueChanges();
  }
}
