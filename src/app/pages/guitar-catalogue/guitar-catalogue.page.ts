import {Component, OnInit} from '@angular/core';
import {GuitarCatalogueService} from "../../services/guitar-catalogue.service";
import {Guitar} from "../../models/guiter.model";

@Component({
  selector: 'app-guitar-catalogue',
  templateUrl: './guitar-catalogue.page.html',
  styleUrls: ['./guitar-catalogue.page.css']
})
export class GuitarCataloguePage implements OnInit{

  get guitars(): Guitar[]{
    return this.guitarCatalogueService.guitars;
  }

  get loading(): boolean{
    return this.guitarCatalogueService.loading;
  }

  get error(): string{
    return this.guitarCatalogueService.error;
  }
  constructor(
    private readonly guitarCatalogueService: GuitarCatalogueService
  ) {}

  ngOnInit(): void{
    this.guitarCatalogueService.findAllGuitars();
  }
}
