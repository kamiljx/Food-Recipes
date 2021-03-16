import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: true}) nameRef: ElementRef
@ViewChild('amountInput', {static: true}) amountRef: ElementRef

  constructor(private shoppingListService: ShopingListService) { }

  ngOnInit(): void {
  }
  onAdd(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const ingToList = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(ingToList)
  }

}
