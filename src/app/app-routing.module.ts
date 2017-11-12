import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
    {
        path: 'forms',
        data: {
            breadcrumb: 'forms'
        },
        children: [
            {
                path: 'details',
                component: ContentComponent,
                data: {
                    breadcrumb: 'details'
                },
            },
        ]
    },
    {
        path: 'elements',
        component: ContentComponent,
        data: {
            breadcrumb: 'Elements'
        },
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
