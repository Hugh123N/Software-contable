import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-proveedor',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-proveedor.component.html',
  styleUrl: './home-proveedor.component.css'
})
export class HomeProveedorComponent {
  clientes: any ; 
  personaEditar: any;
  filtroClientes: any;
  modoOculto: boolean = true;




  toggleModoEdicion(persona: any) {
    this.personaEditar = persona;
    this.editarModoOcuto()
    console.log("algoooo*", this.personaEditar);
  }

  editarModoOcuto(){
    this.modoOculto = !this.modoOculto;
    //this.getData();
  }

}
