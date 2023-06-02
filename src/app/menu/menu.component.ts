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

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menus = this.menuService.getData();
    this.loading = false;

      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      ];

      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
  }

  clear(table: Table) {
      table.clear();
  }

  getSeverity(status: any) {
      switch (status) {
          case 'unqualified':
              return 'danger';

          case 'qualified':
              return 'success';

          case 'new':
              return 'info';

          case 'negotiation':
              return 'warning';

          case 'renewal':
              return '';
          default :
              return '';
      }
  }
}
