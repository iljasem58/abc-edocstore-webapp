import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from "@angular/material/select";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { RepositoriesComponent } from './repositories/repositories.component';
import { MatTableModule } from '@angular/material/table';
import { CollectionComponent } from './collection/collection.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { LicenseComponent } from './license/license.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CreateRepositoryComponent } from './repositories/create-repository/create-repository.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExplorerTableComponent } from './explorer/explorer-table/explorer-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatOptionModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoriesComponent,
    CollectionComponent,
    ExplorerComponent,
    LicenseComponent,
    FooterComponent,
    CreateRepositoryComponent,
    ExplorerTableComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatTreeModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
