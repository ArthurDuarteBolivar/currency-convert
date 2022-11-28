import { LembreteComponentComponent } from './components/lembrete-component/lembrete-component.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CurrencyConvertComponent } from './pages/currency-convert/currency-convert.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'currency-convert',
    component: CurrencyConvertComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'calendar/calendar-lembrete/:day',
    component: LembreteComponentComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
