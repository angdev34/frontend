import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WishAndComplaintService {

  constructor(private http: HttpClient) { }

  getWishes(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/wish-and-complaint/wishes');
  }

  addWish(wish: string): Observable<string> {
    return this.http.post<string>('http://localhost:3000/wish-and-complaint/wishes', {wish});
  }

  deleteWish(index: number): Observable<any> {
    return this.http.delete('http://localhost:3000/wish-and-complaint/wishes/' + index);
  }

  getComplaints(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/wish-and-complaint/complaints');
  }

  addComplaint(complaint: string): Observable<string> {
    return this.http.post<string>('http://localhost:3000/wish-and-complaint/complaints', {complaint});
  }

  deleteComplaint(index: number): Observable<any> {
    return this.http.delete('http://localhost:3000/wish-and-complaint/complaints/' + index);
  }

} 