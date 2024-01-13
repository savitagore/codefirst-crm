import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { addCandidate } from '../../../../Core/Model/addCandidateClass';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [MatCardModule,MatSelectModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatGridListModule,MatIconModule,FormsModule],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.scss'
})
export class CandidateComponent {

  candidate:addCandidate= new addCandidate;

  clear(){
    //  this.candidate =new addCandidate;
  }
}
