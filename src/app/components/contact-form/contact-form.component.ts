import { Component, OnInit, NgModule } from '@angular/core';

interface SampleData{
  kitCode: string,
  doctor_firstName: string,
  doctor_lastName: string,
  doctor_email: string,
  doctor_code: string,
  doctor_location: string,
  pacient_firstName: string,
  pacient_lastName: string,
  medical_file: string,
  pacient_file: string,
  pacient_sex: string,
  pacient_dob: string,
  diagnosis: string,
  diagnosis_other:string,
  sample_type: string,
  sample_presentation: string,
  sample_qt: string,
  sample_volume: string,
  sample_preservation: string,
  sample_site: string,
  sample_genetic_test1: string,
  sample_genetic_test2: string,
  sample_time: string,
  sample_date: string,
  patho_firstName: string,
  patho_lastName: string,
  patho_id: string,
  patho_phone: string,
  patho_ext: string,
  patho_report: string,
  patho_img: string,
  sample_location: string,
  sample_colection: string,
  sample_adress: string,
  sample_neighborhood: string,
  sample_city: string,
  sample_postal: string,
  sample_add: string,
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  sampleData: SampleData = {
    kitCode: '',
    doctor_firstName: '',
    doctor_lastName: '',
    doctor_email: '',
    doctor_code: '',
    doctor_location: '',
    pacient_firstName: '',
    pacient_lastName: '',
    medical_file: '',
    pacient_file: '',
    pacient_sex: '',
    pacient_dob: '',
    diagnosis:'',
    diagnosis_other: '',
    sample_type:'',
    sample_presentation:'',
    sample_qt:'',
    sample_volume:'',
    sample_preservation:'',
    sample_site:'',
    sample_genetic_test1:'',
    sample_genetic_test2:'',
    sample_time:'',
    sample_date:'',
    patho_firstName:'',
    patho_lastName:'',
    patho_id:'',
    patho_phone:'',
    patho_ext:'',
    patho_report:'',
    patho_img:'',
    sample_location:'',
    sample_colection:'',
    sample_adress:'',
    sample_neighborhood:'',
    sample_city:'',
    sample_postal:'',
    sample_add:'',
  }

  constructor() { }

  ngOnInit(): void {
    //llama a al abase datos 
    //sample data llenalo con lo que respondio la db 
  }

  sendData(){
    //crear un bvalidador de datos 
    //crear un http request para enviar el json al back o al python 
    console.log(this.sampleData)
    //redirigirte a una sigiente pagina "exito al guardar"
  }

}
