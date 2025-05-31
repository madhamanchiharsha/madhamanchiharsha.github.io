import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./know-harsha/header/header.component";
import { KnowHarshaModule } from "./know-harsha/know-harsha.module";
import { SidebarComponent } from "./know-harsha/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { ProfessionalComponent } from "./know-harsha/professional/professional.component";
import { ContactComponent } from "./know-harsha/contact/contact.component";
import { ProjectsComponent } from "./know-harsha/projects/projects.component";

@NgModule({
    declarations: [
        
    ],
    imports: [
      BrowserModule,
      KnowHarshaModule,
      SidebarComponent, 
      HeaderComponent,
      ProfessionalComponent,
      ContactComponent,
      ProjectsComponent
      // Other modules here
    ]
  })
  export class AppModule {}
  