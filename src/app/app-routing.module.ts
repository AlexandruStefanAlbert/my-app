import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/components/main-page/main-page.component';
import { FoodSurveyPageComponent } from './pages/surveys/food-survey-page/food-survey-page.component';
import { CarSurveyPageComponent } from './pages/surveys/car-survey-page/car-survey-page.component';
import { TeacherSurveyPageComponent } from './pages/surveys/teacher-survey-page/teacher-survey-page.component';

const routes: Routes = [
  {
  path: 'register',
  component: RegisterPageComponent,
},
{
  path: 'login',
  component: LoginPageComponent,

},
{
  path: 'welcome',
  component: WelcomePageComponent,

},
{
  path: '',
  component: WelcomePageComponent,
},
{
  path: 'home',
  component: HomePageComponent,
  children: [
    {
        path: '',
        component: FoodSurveyPageComponent
    },
    {
      path: 'car',
      component: CarSurveyPageComponent
  },
  {
    path: 'teacher',
    component: TeacherSurveyPageComponent
}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
