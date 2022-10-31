import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: false })
  campoValorInput!: ElementRef;

  increment() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  decrement() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
