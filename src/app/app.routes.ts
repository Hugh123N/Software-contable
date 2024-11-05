import { Routes } from '@angular/router';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { HomeProveedorComponent } from './components/proveedor/home-proveedor/home-proveedor.component';
import { NuevoProveedorComponent } from './components/proveedor/nuevo-proveedor/nuevo-proveedor.component';
import { EditarProveedorComponent } from './components/proveedor/editar-proveedor/editar-proveedor.component';
import { HomeEmpleadoComponent } from './components/empleado/home-empleado/home-empleado.component';
import { NuevoEmpleadoComponent } from './components/empleado/nuevo-empleado/nuevo-empleado.component';
import { EditarEmpleadoComponent } from './components/empleado/editar-empleado/editar-empleado.component';
import { HomeVendedorComponent } from './components/vendedor/home-vendedor/home-vendedor.component';
import { NuevoVendedorComponent } from './components/vendedor/nuevo-vendedor/nuevo-vendedor.component';
import { EditarVendedorComponent } from './components/vendedor/editar-vendedor/editar-vendedor.component';

export const routes: Routes = [
    {path:'cliente/home',component:HomeClienteComponent},
    {path:'cliente/nuevo',component:NuevoClienteComponent},
    {path:'cliente/editar',component:EditarClienteComponent},
    {path:'proveedor/home',component:HomeProveedorComponent},
    {path:'proveedor/nuevo',component:NuevoProveedorComponent},
    {path:'proveedor/editar',component:EditarProveedorComponent},
    {path:'empleado/home',component:HomeEmpleadoComponent},
    {path:'empleado/nuevo',component:NuevoEmpleadoComponent},
    {path:'empleado/editar',component:EditarEmpleadoComponent},
    {path:'vendedor/home',component:HomeVendedorComponent},
    {path:'vendedor/nuevo',component:NuevoVendedorComponent},
    {path:'vendedor/editar',component:EditarVendedorComponent},
    { path: '', redirectTo: '/cliente/home', pathMatch: 'full' },
];
