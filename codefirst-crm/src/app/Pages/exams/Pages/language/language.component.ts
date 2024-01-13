import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe,CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormControl,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Observable, map, startWith,of } from 'rxjs';
import { MasterService } from '../../../../Core/Services/master.service';
import { languageEndConstant } from '../../../../Core/Constant/endConstant';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [MatCardModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,CommonModule,ReactiveFormsModule,AsyncPipe,FormsModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
  providers:[MasterService]
})
export class LanguageComponent implements OnInit {
  myControl = new FormControl();
  options: any[]=[];
  filteredOptions: Observable<any[]> =of([]);


  constructor(private master:MasterService){

  }
  ngOnInit() {
    this.getAllLAnguage();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: any) {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.language.toLowerCase().includes(filterValue));
   
  }

  getAllLAnguage(){
    this.master.get(languageEndConstant.language.GetAllLanguages).subscribe((apidata:any)=>{
      this.options=apidata.data;
    })
  }

}
