import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
export class InMemoryDataService implements InMemoryDbService {
    createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | Observable<{}> | Promise<{}> {
        throw new Error('Method not implemented.');
    }
    // tslint:disable-next-line: member-ordering
    heroes = [
        { id: 123456789123456789123, name: 'Zero' },
        { id: 123456789123456789124, name: 'Mr. Nice' },
        { id: 123456789123456789125, name: 'Narco' },
        { id: 123456789123456789126, name: 'Bombasto' },
        { id: 123456789123456789127, name: 'Celeritas' },
        { id: 123456789123456789128, name: 'Magneta' },
        { id: 123456789123456789129, name: 'RubberMan' },
        { id: 1234567891234567891210, name: 'Dynama' },
        { id: 1234567891234567891211, name: 'Dr IQ' },
        { id: 1234567891234567891212, name: 'Magma' },
        { id: 1234567891234567891213, name: 'Tornado' }
    ];


    getHeroes(): Observable<any> {
        return of(this.heroes);
    }
}
