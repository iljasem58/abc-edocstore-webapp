import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { LicenseComponent } from './license/license.component';
import { CreateRepositoryComponent } from './repositories/create-repository/create-repository.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/repositories',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'collection',
    component: CollectionComponent,
  },
  {
    path: 'repositories',
    component: RepositoriesComponent,
  },
  {
    path: 'repositories/new',
    component: CreateRepositoryComponent,
  },
  {
    path: 'explorer',
    component: ExplorerComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
