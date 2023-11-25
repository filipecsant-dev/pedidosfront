import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/principal/pagina-principal.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: PaginaPrincipalComponent },
    { path: '**', component: PageNotFoundComponent }
];