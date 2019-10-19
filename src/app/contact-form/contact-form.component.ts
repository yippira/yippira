import {Subject} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public subscribeForm: FormGroup;
  public email: FormControl;
  public emailAdd;
  private unsubscribe = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.email = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.subscribeForm = new FormGroup({
      email: this.email
    });
  }

  sendMail() {
    if (this.subscribeForm.valid) {
      this.http.post("assets/email.php", this.emailAdd).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
