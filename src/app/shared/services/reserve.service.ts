import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reserve } from '../models/Reserve';
@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  collectionName = 'Resereves';
  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection<Reserve>(this.collectionName).valueChanges();
  }
    getByDate(Date: string) {
      return this.afs.collection<Reserve>(this.collectionName).doc(Date).valueChanges();
    }
    create(reserve: Reserve) {
      return this.afs.collection<Reserve>(this.collectionName).add(reserve);
    }

}
