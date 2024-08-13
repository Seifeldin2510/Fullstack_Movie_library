import { Component } from '@angular/core';
import { TvServicesService } from '../../services/tv-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css'
})
export class TvDetailsComponent {

  Series!: any;
  id!: number ;

  constructor(private tvServ: TvServicesService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.tvServ.getTVById(this.id).subscribe((response) => {
      this.Series = response;
    });
  }


}
