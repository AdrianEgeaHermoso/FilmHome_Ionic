import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData,deleteDoc,doc,setDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {



  pathToItems = `users/${this.authService.getCurrentUser().uid}/items`;

  constructor(protected firestore:Firestore, private authService: AuthService) { }

  async addItem(item: Item){
    await addDoc(collection(this.firestore, this.pathToItems),item);
  }

  getItems(): Observable<Item[]>{
    const collectionRef = collection(this.firestore, this.pathToItems)
    return collectionData(collectionRef,{idField:'itemId'}) as Observable<Item[]>

  }

  getItem(id:string) : Observable<Item>{
    const docRef= doc(this.firestore,`${this.pathToItems}/${id}`)
    return docData(docRef,{idField:'itemId'}) as Observable<Item>
  }


  async deleteItem(id: string){
    const docRef= doc(this.firestore,`${this.pathToItems}/${id}`)
    await deleteDoc(docRef);
  }

  updateItem(item:Item){
    const docRef= doc(this.firestore,`${this.pathToItems}/${item.itemId}`);
    setDoc(docRef,item)

  }
  

}
