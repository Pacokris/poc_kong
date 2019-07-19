import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentiteFormComponent } from './components/identite-form/identite-form.component';

const routes: Routes = [
    { path: 'identite-form', component: IdentiteFormComponent },
    { path: '**', component: IdentiteFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
