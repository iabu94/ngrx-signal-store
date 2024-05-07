import { Component, inject, signal } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    MatInput,
    MatLabel,
    MatButton,
    MatDialogClose,
    FormsModule,
    MatFormField,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss',
})
export class AddPostComponent {
  dialogRef = inject(MatDialogRef<AddPostComponent>);
  title = signal('');

  save() {
    this.dialogRef.close(this.title());
  }
}
