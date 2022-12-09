import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Playing11cricketers = [
    { Name: "Rohit Sharma"},
    { Name: "KL Rahul" },
    { Name: "Virat Kohli"},
    { Name: "Surya Kumar Yadav"},
    { Name: "Sanju Samson"},
    { Name: "Hardik Pandya"},
    { Name: "Rabindra Jadeja"},
    { Name: "Yujuvendra Chahal"}
  ];

  Restcricketers = [
    { Name: "Umran Malik"},
    { Name: "Ishaan Kishan" },
    { Name: "Ravi Bishnoi" },
    { Name: "Shardhul Takhur" },
    { Name: "Arshdeep Singh"},
    { Name: "Jasprit Bumrah"},
    { Name: "Md. Siraj"}
  ];

  addDragDropItem(e: any) {
    this.Restcricketers.push(e.dragData);
    console.log(e.dragData);
    const index = this.Playing11cricketers.indexOf(e.dragData);
    if (index > -1) {
      this.Playing11cricketers.splice(index, 1);
    }
  }

  removeDragDropItem(e: any) {
    this.Playing11cricketers.push(e.dragData);
    const index = this.Restcricketers.indexOf(e.dragData);
    if (index > -1) {
      this.Restcricketers.splice(index, 1);
    }
  }
}
