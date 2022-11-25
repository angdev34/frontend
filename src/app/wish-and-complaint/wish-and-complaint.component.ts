import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WishAndComplaintService } from './wish-and-complaint.service';

@Component({
  selector: 'app-wish-and-complaint',
  templateUrl: './wish-and-complaint.component.html',
  styleUrls: ['./wish-and-complaint.component.css']
})
export class WishAndComplaintComponent implements OnInit {

  addWishForm!: FormGroup;
  addComplaintForm!: FormGroup;
  wishes: string[] = [];
  complaints: string[] = [];

  constructor(private wishAndComplaintService: WishAndComplaintService) { }

  ngOnInit() {
    this.addWishForm = new FormGroup({
      'wish': new FormControl(null, Validators.required)
    });

    this.addComplaintForm = new FormGroup({
      'complaint': new FormControl(null, Validators.required)
    });

    this.wishAndComplaintService.getWishes().subscribe((wishes) => {
      this.wishes = wishes;
    });

    this.wishAndComplaintService.getComplaints().subscribe((complaints) => {
      this.complaints = complaints;
    });
  }

  onSubmit() {
    if (this.addWishForm.valid) {
      this.wishAndComplaintService.addWish(this.addWishForm.value.wish).subscribe((wish) => {
        this.wishes.push(wish);
      });
    }

    if (this.addComplaintForm.valid) {
      this.wishAndComplaintService.addComplaint(this.addComplaintForm.value.complaint).subscribe((complaint) => {
        this.complaints.push(complaint);
      });
    }
  }

  onDeleteWish(index: number) {
    this.wishAndComplaintService.deleteWish(index).subscribe((res) => {
      this.wishes.splice(index, 1);
    });
  }

  onDeleteComplaint(index: number) {
    this.wishAndComplaintService.deleteComplaint(index).subscribe((res) => {
      this.complaints.splice(index, 1);
    });
  }

}