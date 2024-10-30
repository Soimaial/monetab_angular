import { Routes } from '@angular/router';
import { LoginComponent } from './presentations/components/login/login.component';
import { HomeComponent } from './presentations/components/home/home.component';
import { RapportsComponent } from './presentations/components/rapports/rapports.component';
import { AddComponent as AddStudent} from './presentations/components/students/add/add.component';
import { EditComponent as EditStudent} from './presentations/components/students/edit/edit.component';
import { IndexComponent as IndexStudent } from './presentations/components/students/index/index.component';
import { IndexComponent as IndexTearcher } from './presentations/components/teachers/index/index.component';
import { AddComponent as AddTearcher } from './presentations/components/teachers/add/add.component';
import { EditComponent as EditTearcher } from './presentations/components/teachers/edit/edit.component';
import { EditComponent as EditUser } from './presentations/components/users/edit/edit.component';
import { AddComponent as AddUser } from './presentations/components/users/add/add.component';
import { IndexComponent as IndexUser } from './presentations/components/users/index/index.component';


export const routes: Routes = [
    { path: '', component: LoginComponent,title: 'Connexion' },
    { path: 'home', component: HomeComponent, title: 'Dashboard' },
    { path: 'rapport', component: RapportsComponent, title:'raport' },
    { path: 'add_student', component: AddStudent, title:'add_student' },
    { path: 'edit_student', component: EditStudent, title:'edit_student' },
    { path: 'index_student', component: IndexStudent, title:'student' },
    { path: 'index_teacher', component: IndexTearcher, title:'Teacher' },
    { path: 'add_teacher', component: AddTearcher, title:'add_teacher' },
    { path: 'edit_teacher', component: EditTearcher, title:'edit_teacher' },
    { path: 'edit_user', component: EditUser, title:'edit_user' },
    { path: 'add_user', component: AddUser, title:'add_user' },
    { path: 'index_user', component: IndexUser, title:'user' },


];
