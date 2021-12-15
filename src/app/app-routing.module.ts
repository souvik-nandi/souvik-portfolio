import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { WhatsNewComponent } from "./components/whats-new/whats-new.component";

const routes: Routes = [
  { path: "about-me", component: AboutMeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "blog", component: BlogComponent },
  { path: "whats-new", component: WhatsNewComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
