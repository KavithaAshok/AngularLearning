import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  items = [];
  showUpdateModal: boolean;
  showAddEmp: boolean;
  employeeFormGroup: FormGroup;
  itemId: any;

  constructor(private readonly fireBase: FirebaseService, private router: Router, private formBuilder: FormBuilder) {
    this.getAllItems();
  }

  ngOnInit(){
    this.employeeForm();
  }

  employeeForm() {
    this.employeeFormGroup = this.formBuilder.group({
      name: [''],
      location: [''],
      position: [''],
      description: ['']
    });
  }

  updateItems(data) {
    this.showUpdateModal = true;
    this.itemId = data.id;
    this.employeeFormGroup.setValue({
      name: data.name,
      location: data.location,
      position: data.position,
      description: data.description
    });
  }

  deleteItems(data) {
    this.fireBase.deleteItemsById(data.id).subscribe((data) => {
      alert("deleted successfully");
      this.getAllItems();
    });;
  }

  getAllItems() {
    this.items = [];
    this.fireBase.getAllItems().subscribe(data => {
      for (const key in data) {
        this.items.push({
          ...data[key], id: key,
        });
        console.log(key)
      }
    });
  }

  addItem() {
    this.showAddEmp = true;
  }

  onSubmit(form) {
    this.fireBase.addItems(form).subscribe(response => {
      this.showAddEmp = false;
      alert("added successfully");
      this.getAllItems();
    })
  }

  onUpdate(form){
    this.fireBase.updateItemsById(this.itemId, form).subscribe(res => {
      this.showUpdateModal = false;
      alert("updated successfully");
      this.getAllItems();
    });
  }
}
