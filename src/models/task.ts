export class Task {
    //atributos
    private _name: string;
    private _descricao: string;
    private _situacao: string;
    
    //metodo construtor
    constructor({
        name,
        descricao,
        situacao = "pendente",
    } : {
        name: string,
        descricao: string,
        situacao?: string
    }
    ){

    
    this._name = name;
    this._descricao = descricao;
    this._situacao = situacao
}

//getters e setters
get name(): string{
    return this._name;
}

set name(value: string){
    this._name=value;
}

//descricao
get descricao(): string{
    return this._descricao;
}

set descricao(value: string){
     this._descricao=value;
}

//situacao
get situacao(): string{
    return this._situacao;
}

set situacao(value: string){
    this._situacao;
}




}