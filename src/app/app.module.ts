import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './model/user/user.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './model/users/users.component';



@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'userDetails/:user', component: UserComponent },
            { path: '**', component: UsersComponent }
        ]
            // ,          { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
