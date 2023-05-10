import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@bluerun/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'bluerun-categories-form',
    templateUrl: './categories-form.component.html',
    styles: []
})
export class CategoriesFormComponent implements OnInit{

    form!: FormGroup;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    isSubmitted: boolean  = false;

    constructor(private formBuilder: FormBuilder, 
        private messageService: MessageService,
        private location: Location,
        // private categoriesService: CategoriesService
        ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name:['',Validators.required],
            icon:['',Validators.required],
        });
    }
    
    onSubmit(){
        this.isSubmitted = true;
        if(this.form.invalid){
            return;
        }
        // const category: Category = {
        //     name: this.categoryForm["name"].value,
        //     icon: this.categoryForm["icon"].value,
        // }
        // this.categoriesService.createCategory(category).subscribe(response =>{
                // this.messageService.add({severity:'success', 
            //     su mmary:'Success', 
            //     detail:'Category is created'
            // });
            // timer(2000)
            // .toPromise()
            // .then((done) => {
            //     this.location.back();
            // });   
        // },(error => {
            // this.messageService.add({severity:'error', summary:'Error', detail:'Category is not created'})
        // })
        // );

        console.log(this.categoryForm['name'].value);
        console.log(this.categoryForm['icon'].value);
        
    }

    get categoryForm() {
        return this.form.controls;
    }
}
