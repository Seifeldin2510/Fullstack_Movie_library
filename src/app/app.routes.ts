import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TvComponent } from './components/tv/tv.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tvDetails/:id', component: TvDetailsComponent },
    { path: 'tv', component: TvComponent },
    { path: '**', component: NotfoundComponent },
];
