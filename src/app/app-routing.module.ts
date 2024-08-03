import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { ProductFormComponent } from "./shared/components/products/product-form/product-form.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";




const routes: Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent,
        children:[
            {
                path:'addUser',
                component:UserFormComponent
            },
            {
                path:':userId',
                component:UserComponent
            },
            {
                path:':userId/editUser',
                component:UserFormComponent
            },
        ]
    },
    {
        path:'products',
        component:ProductsComponent,
        children:[
            {
                path:'addProduct',
                component:ProductFormComponent
            },
            {
                path:':productId',
                component:ProductComponent
            },
            {
                path:':productId/editProduct',
                component:ProductFormComponent
            }
        ]
    },
    {
        path:"page-not-found",
        component:PagenotfoundComponent
    },
    {
        path:"**",
        component:PagenotfoundComponent
    },
    {
        path:"**",
        redirectTo:"page-not-found"
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}