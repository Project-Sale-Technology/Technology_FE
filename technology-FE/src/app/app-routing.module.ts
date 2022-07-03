import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: "", loadChildren: () => import('./home-module/home-module.module').then(module => module.HomeModuleModule)},
  {
    path: "",
    loadChildren: () => import('./account-module/account-module.module').then(module => module.AccountModuleModule)
  },
  {
    path: "home",
    loadChildren: () => import('./menu-module/menu-module.module').then(module => module.MenuModuleModule)
  },
  {
    path: "home",
    loadChildren: () => import('./customer-module/customer-module.module').then(module => module.CustomerModuleModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./product-module/product-module.module').then(module => module.ProductModuleModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./order-module/order-module.module').then(module => module.OrderModuleModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./income-module/income-module.module').then(module => module.IncomeModuleModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./feedback-module/feedback-module.module').then(module => module.FeedbackModuleModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./employee-module/employee-module.module').then(module => module.EmployeeModuleModule)
  },
  {
    path: "error" ,
    loadChildren: () => import('./error-page-module/error-page-module.module').then(module=> module.ErrorPageModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
