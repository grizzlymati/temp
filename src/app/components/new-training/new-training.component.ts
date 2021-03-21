import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() addNewTraining = new EventEmitter<{}>();

  public exercises: any[] = [];
  public exercisesList = [{ 'selected': false,  'description': 'przysiad', 'img': 'https://www.womenshealth.pl/media/lib/2552/prawidlowy-przysiad_192407147-4af8518cd01729d49e1260033035bee3.jpg' },
  { 'selected': false, 'description': 'walenie konia', 'img': 'https://img.memecdn.com/pepe-fap_o_4699077.jpg' },
  { 'selected': false, 'description': 'pompki', 'img': 'https://cdn.galleries.smcloud.net/t/galleries/gf-heEP-UaBi-tqPg_efekty-robienia-pompek-wizualne-i-zdrowotne-zalety-cwiczenia-1920x1080-nocrop.jpg' }];
  public addExerciseMode = false;
  public superSeriaMode = true;
  public tempExcercises: any[] = [];
  public profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public addExercise(): void {
    this.addExerciseMode = true;
  }

  public changeSuperSeriaMode(): void {
    this.superSeriaMode = !this.superSeriaMode;
  }  

  public onSubmit(): void {
    console.log(this.profileForm.value);
    this.addNewTraining.next({ 'name': this.profileForm.controls.name.value, 'description': this.profileForm.controls.description.value, 'excercises': this.exercises });
  }

  public confirmExercise(): void {
    if (this.superSeriaMode) {
      this.exercises.push(this.exercisesList.filter(x => (x.selected)).map(x => { return {'description': x.description, 'img': x.img} }));
    } else {
      this.exercises = this.tempExcercises;
    }
    this.addExerciseMode = false;
  }

  public selectOneExercise(ex: any) {
    if(!this.superSeriaMode) {
      if (this.tempExcercises.length > 0 && this.tempExcercises[0].img === ex.img) {
        this.tempExcercises.length = 0;
      } else {
        this.tempExcercises.length = 0;
        this.tempExcercises.push([ex]);
      }
    }
  }
}
