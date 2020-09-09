import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Pipe({
  name: 'filterClients'
})
export class FilterClientsPipe implements PipeTransform {

  transform(clients: Client[], filter: Partial<Client>): Client[] {
    
    let clientReturn: Client[] = clients

    if (filter.name.trim().length !== 0) {
      console.log('entro filtor name', filter.name.trim());
      clientReturn = clientReturn.filter((client) => client.name.trim().toLowerCase().includes(filter.name.toLowerCase().trim()))
    }

    if (filter.lastName.trim().length !== 0) {
      console.log('entro filtro lastName');
      clientReturn = clientReturn.filter((client) => client.lastName.trim().toLowerCase().includes(filter.lastName.toLowerCase().trim()))
    }

    if (filter.document.trim().length !== 0) {
      console.log('entro filtro document');
      clientReturn = clientReturn.filter((client) => client.document.trim().toLowerCase().includes(filter.document.toLowerCase().trim()))
    }

    if (filter.rol.trim().length !== 0) {
      console.log('entro filtro Rol');
      clientReturn = clientReturn.filter((client) => client.rol.trim().toLowerCase().includes(filter.rol.toLowerCase().trim()))
    }

    if (filter.state !== null) {
      console.log('entro filtro state');
      clientReturn = clientReturn.filter((client) => client.state === filter.state)
    }

    if (filter.email.trim().length !== 0) {
      console.log('entro filtro email');
      clientReturn = clientReturn.filter((client) => client.email.trim().toLowerCase().includes(filter.email.toLowerCase().trim()))
    }

    return clientReturn

  }

}
