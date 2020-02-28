import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes:Recipe[]=  [
    new Recipe('A Test recipe',
    'this is simple a test','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.msn.com%2Fen-us%2Fhealth%2Fnutrition%2F50-foods-you-should-never-eat-according-to-health-experts%2Fss-AABDHTv&psig=AOvVaw0AatZhKozmZGsw1vp4Z2hy&ust=1582971461740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLixnbKC9OcCFQAAAAAdAAAAABAD'),
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
