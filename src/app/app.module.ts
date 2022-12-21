import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
