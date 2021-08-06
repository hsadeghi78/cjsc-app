import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'app/entities/user/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordService } from 'app/account/password/password.service';
import { Account } from 'app/core/auth/account.model';

@Component({
  selector: 'jhi-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  user!: Account;
  doNotMatch?: any;
  error?: any;
  success?: any;
  passwordForm = this.fb.group({
    // currentPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    newPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });

  constructor(
    private userService: UserService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    protected passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    console.warn('Change Pass');
  }

  clear(): void {
    this.activeModal.dismiss('cancel');
  }

  changePassword(): void {
    const newLocalPass = this.passwordForm.get(['newPassword'])?.value;
    if (newLocalPass !== this.passwordForm.get(['confirmPassword'])?.value) {
      this.error = null;
      this.success = null;
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.passwordService.resetPassword({ key: this.user.login, newPassword: newLocalPass }).subscribe(
        () => {
          this.error = null;
          this.success = 'OK';
        },
        () => {
          this.success = null;
          this.error = 'ERROR';
        }
      );
    }
  }
}
