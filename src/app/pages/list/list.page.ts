import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  items:Observable <Item[]>;
  itemsFilter: Item[] = [];

  constructor(public itemService:ItemService,
    private router:Router) {

      

    this.items = this.itemService.getItems();
  }

  ngOnInit() {
  }

   /* Filtro de empleados. Busca referencias al escribir en el Search */

   getBusqueda(event: any) {
    this.itemService.getItems().subscribe((data) => {
      this.itemsFilter = data.filter(
        (item) =>
          item.name.includes(event.detail.value) ||
          item.format.includes(event.detail.value)
          
      );
      this.items = of(this.itemsFilter);
    });
  }

  addItem(){
    this.router.navigateByUrl('/create-item');
  }

  goEditItem(id: string){
    this.router.navigateByUrl(`/edit-item/${id}`);
  }
}
