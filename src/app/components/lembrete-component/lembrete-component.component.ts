import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Reminder } from 'src/app/interfaces/reminder';


class reminders {
  day
  description
    constructor(day: number, description: string) {
      this.day = day
      this.description = description

    }
  }

@Component({
  selector: 'app-lembrete-component',
  templateUrl: './lembrete-component.component.html',
  styleUrls: ['./lembrete-component.component.scss']
})
export class LembreteComponentComponent implements OnInit {
  day: number = 0
  reminder: Array<Number> = []
  dayList = ''
  error: boolean = false


  constructor(private route: ActivatedRoute, private storage: LocalStorageService) { }


  ngOnInit(): void {
    this.route.params.pipe(
      tap((res: any) => this.day = res.day)
    ).subscribe()
    this.dayList = this.storage.get(this.day.toString())

  }

  Reminder$(description: string){
    if(description){
    let remindersList = new reminders(this.day, description)
    this.storage.set(remindersList.day.toString(), remindersList.description)
    this.error = false
    }else{
      this.error = true
    }
  }

  deleteReminders(key: number){
    this.storage.remove(key)
  }
}
