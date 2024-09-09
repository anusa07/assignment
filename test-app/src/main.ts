// // import { bootstrapApplication } from '@angular/platform-browser';
// // import { AppComponent } from './app/app.component';
// // import { importProvidersFrom } from '@angular/core';
// // import { HttpClientModule } from '@angular/common/http';  // Ensure HttpClientModule is imported here

// // bootstrapApplication(AppComponent, {
// //   providers: [importProvidersFrom(HttpClientModule)],  // Provide HttpClientModule here
// // }).catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter, RouterModule } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter([
//       { path: '', component: AppComponent },
//       { path: 'add-user', component: AppComponent }
//     ]),
//     importProvidersFrom(HttpClientModule)
//   ],
// }).catch(err => console.error(err));
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Path to your AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
