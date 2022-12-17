import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( movie: any[], term: string): any[] {
    return movie.filter( function(oneMovie){
     return oneMovie.title.toLowerCase().includes(term.toLowerCase())
    }) ;
   }

}
