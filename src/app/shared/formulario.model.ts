export interface  Formulario{
    nome: string;
    idade: number;
    escolaridade: string;
    email: any;
    endereco: {
        cep: any;
        rua: string;
        bairro: any;
        numero: number;
        complemento: any;
        city: any;
        state: any
    }
    course: string;
    file: any
    anyCourse: any
}