import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterRightComponent } from './center-right/center-right.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {path:'', redirectTo:'center-right', pathMatch: 'full'},
  {path:"center-right", component: CenterRightComponent, data: { routeName: "r1" }},
  {path:"create-data", component:CreateDataComponent,  data: { routeName: "r2" }},
  {path:"create-data/:id", component:CreateDataComponent,  data: { routeName: "r3" }},
  {path:'**', component: NoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 


 }
