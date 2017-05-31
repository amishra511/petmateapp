import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PetMateService } from '../petmate.service';
import { PetfinderPetRecord } from '../petfinderapi/petfinderpetrecord';
import { PetPhotoType } from '../petfinderapi/petphototype';
import { PetGenderType } from '../petfinderapi/petgendertype';
import { PetContactType } from '../petfinderapi/petcontacttype';

//PetContactType
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'pet-detail',
    templateUrl: './pet-details.component.html',
})
export class PetDetailComponent implements OnInit {
    pet: PetfinderPetRecord;

    constructor(private route: ActivatedRoute,
        private location: Location,
        private petmateServ: PetMateService) {
            
    }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.petmateServ.getPet(+params['id']))
            .subscribe(pet =>
            {                               
                 this.pet = pet;  
                });
    }

    goBack(): void {
        this.location.back();
    }
    isProfilePic(photo:PetPhotoType):boolean{
        if(photo.size == 'pn' && photo.id =='1'){
                return true;
        }
        return false;
    }

    getEnumValue(sex:any){
       return PetGenderType[sex];
        // if(null != eval(PetGenderType.F)){
        //     return eval('PetGenderType.'+sex);
        // }
        // return sex;
    }
    getFullAddress(contact:PetContactType){
        //let contact = pet.contact;
       return  contact.address1+' '+contact.address2+',' + contact.state+', '+contact.zip;
    }
}