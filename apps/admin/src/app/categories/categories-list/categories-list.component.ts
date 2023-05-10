/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
// import { CategoriesService, Category} from '@bluerun/products'

@Component({
    selector: 'bluerun-categories-list',
    templateUrl: './categories-list.component.html',
    styles: [],
})


export class CategoriesListComponent implements OnInit{

    // constructor(private CategoriesService: CategoriesService){}

    categories = [
        {
            id:1,
            name: "category-1",
            icon: 'icon-1'
        },
        {
            id:2,
            name: "category-2",
            icon: 'icon-2'
        },
        {
            id:3,
            name: "category-3",
            icon: 'icon-3'
        },
    ]

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        
    }

    // deleteCategory(categoryId : string){
    //     this.CategoriesService.deleteCategory(categoryId).subscribe((Response)=> {
    //         console.log("success");
            
    //     })
    // }
    
}

// export class CategoriesListComponent implements OnInit{

//     categories: Category[] = [] ;

    // constructor(private CategoriesService: CategoriesService){}

//     ngOnInit(): void {
//         this.CategoriesService.getCategories().subscribe((cats) => {
//             this.categories = cats;
//         });
//     }
    
// }


