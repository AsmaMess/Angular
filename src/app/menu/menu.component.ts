import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Table } from 'primeng/table';
import { Menu, Representative } from '../Models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[]= [];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;
  
  activityValues: number[] = [0, 100];

  value=5;

  constructor(private menuService: MenuService) {}

  ngOnInit() {

    this.getMenus();
    this.menus = this.menuService.getData();
    this.loading = false;

 
  }

  clear(table: Table) {
      table.clear();
  }




getMenus(){






    
}












 
}
