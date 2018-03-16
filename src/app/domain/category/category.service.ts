import {Category} from './category';

export class CategoryService{

    private categoryList: Category[] = [];

    save(category: Category){
        this.categoryList.push(category);
    }

    update(category: Category){
        let index = this.categoryList.indexOf(category);
        this.categoryList[index] = category;
    }

    findOne(id: number){
        return this.categoryList.filter(
            category => category.id == id
        );
    }

    findAll(){
        return this.categoryList;
    }

    delete(id:number){
        this.categoryList = 
            this.categoryList.filter(
                category => category.id != id
            );
    }


}








