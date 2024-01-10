import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

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
  doneItemsHistory: any[] = [];
  newItemDescription: string = '';
  editItemDescription: string = '';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      this.allItems = JSON.parse(storedItems);
    }
  }

  // Alphabetically organized functions

  addItem() {
    const newItem = {
      id: this.allItems.length + 1,
      description: this.newItemDescription,
      done: false
    };
    this.allItems.unshift(newItem);
    this.newItemDescription = '';
    this.saveItemsToLocalstorage();
  }

  deleteItem(item: any) {
    const index = this.allItems.indexOf(item);
    if (index !== -1) {
      this.allItems.splice(index, 1);
      this.saveItemsToLocalstorage();
    }
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  private saveItemsToLocalstorage() {
    localStorage.setItem('todoItems', JSON.stringify(this.allItems));
  }

  startEditing(item: any) {
    item.isEditing = true;
    item.editItemDescription = item.description;
  }

  stopEditing(item: any) {
    item.isEditing = false;
  }

  undoLastDoneItem() {
    const lastDoneItem = this.doneItemsHistory.pop();
    if (lastDoneItem) {
      lastDoneItem.done = false;
      this.saveItemsToLocalstorage();
    }
  }

  updateItemDescription(item: any) {
    if (item.editItemDescription.trim() !== '') {
      item.description = item.editItemDescription.trim();
      item.isEditing = false;
      this.editItemDescription = '';
  
      // Save items to local storage after updating item description
      this.saveItemsToLocalstorage();
    }
  }

  updateItemStatus(item: any) {
    item.done = !item.done;
    this.changeDetectorRef.detectChanges();
    this.doneItemsHistory.push(item);

    setTimeout(() => {
      this.doneItemsHistory.pop();
      if (item.done) {
        this.deleteItem(item);
      }
      this.saveItemsToLocalstorage();
    }, 1500);
  }

}
