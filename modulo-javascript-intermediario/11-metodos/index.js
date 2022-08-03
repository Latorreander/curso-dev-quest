let usuario = {
    nome: 'Anderson',
    excluir: function(){
        console.log(`O usuário ${this.nome} foi excluído!`);
    }

}

usuario.excluir()