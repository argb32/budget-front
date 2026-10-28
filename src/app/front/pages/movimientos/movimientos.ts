import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  imports: [ReactiveFormsModule],
  templateUrl: './movimientos.html',
})
export class Movimientos {
  showForm = signal(false);

  fb = inject(FormBuilder);

  movimientosForm = this.fb.group({
    tipoMovimiento: ['', Validators.required],
    fecha: ['', Validators.required],
    concepto: [''],
    importe: ['', [Validators.required, Validators.min(0)]],
    observaciones: [''],
  });

  toggleForm() {
    this.showForm.set(!this.showForm());
  }
}
