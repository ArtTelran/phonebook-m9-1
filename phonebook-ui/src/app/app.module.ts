import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {PasswordRecoveryComponent} from "./password-recovery/password-recovery.component";
import {RegistrationComponent} from './registration/registration.component';
import {ActivateEmailComponent} from './activate-email/activate-email.component';
import {ActivationComponent} from './activation/activation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/user.service";
import {LoginComponent} from './login/login.component';
import {TokenInterceptor} from "./service/tokenHandle/token.interceptor";
import {HttpError401Interceptor} from "./service/errorHandle/http-error401-interceptor.service";
import {ContactsComponent} from './pages/root_page/contacts_page/contacts/contacts.component';
import {HomePageComponent} from "./pages/root_page/home-page/home-page.component";
import {HeaderComponent} from "./pages/root_page/header/header.component";
import {ContactItemComponent} from './pages/root_page/contacts_page/contact-item/contact-item.component';
import {FooterComponent} from "./pages/root_page/footer/footer.component";
import {AccountPasswordComponent} from './pages/root_page/account_page/account-password/account-password.component';
import {AccountComponent} from './pages/root_page/account_page/account/account.component';
import {AddContactModalComponent} from "./pages/root_page/add-contact-modal/add-contact-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    PasswordRecoveryComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ActivateEmailComponent,
    ActivationComponent,
    LoginComponent,
    HomePageComponent,
    ContactsComponent,
    ContactItemComponent,
    AccountPasswordComponent,
    AccountComponent,
    AddContactModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [UserService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpError401Interceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactModalComponent]
})
export class AppModule {
}
