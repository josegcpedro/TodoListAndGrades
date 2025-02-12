import { Component, Input } from '@angular/core';
import { Grade } from '../../../Grade';

@Component({
  selector: 'app-grades-item',
  imports: [],
  templateUrl: './grades-item.component.html',
  styleUrl: './grades-item.component.css'
})
export class GradesItemComponent {
@Input() grade!:Grade
}
