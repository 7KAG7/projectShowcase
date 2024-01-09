import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class TodoListComponent implements OnInit {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems: any[] = [];

  newItemDescription: string = '';
  editItemDescription: string = '';


  constructor() { }

  ngOnInit(): void { 
       
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems; 
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  
  addItem() {
    const newItem = {
      id: this.allItems.length + 1,
      description: this.newItemDescription,
      done: false      
    };
    console.log(newItem, 'newnew');
    
    this.allItems.unshift(newItem);      
    this.newItemDescription = '';
  }

  updateItemStatus(item: any) {
    item.done = !item.done;    
  }

  updateItemDescription(item: any, newDescription: string) {
    item.description = newDescription;
  }

  deleteItem(item: any) {
    const index = this.allItems.indexOf(item);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }

}