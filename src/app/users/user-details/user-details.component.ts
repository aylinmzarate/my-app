import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userId!: number; // Usamos el operador de aserción no nulo
  user: any;

  users = [
    { id: 1, name: 'Taylor', details: 'Taylor Swift es una cantante, compositora y actriz estadounidense nacida el 13 de diciembre de 1989. Conocida por su evolución del country al pop, ha ganado múltiples premios Grammy y es famosa por sus letras autobiográficas y su impacto en la música contemporánea.' },
    { id: 2, name: 'Luana', details: 'Mas detalles sobre Luana' },
    { id: 3, name: 'Liam', details: 'Mas detalles sobre Liam' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.userId || Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.users.find(user => user.id === id);
  }
}
