function verificar() {

    const data = new Date();
    const ano = data.getFullYear()
    const fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique se os dados estão preenchidos corretamente')
    } else {
        const fSex = document.getElementsByName('radsex')
        const idade = ano - fAno.value
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://thumbs.dreamstime.com/b/close-up-da-crian%C3%A7a-masculina-bonito-46809247.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://media.istockphoto.com/id/1067805438/pt/foto/white-background-studio-photograph-of-young-boy-male-teen-teenager-young-adult-looking-sad.jpg?s=170667a&w=0&k=20&c=OokBXHQJncb2areSKqZJiD9OQST1w1tdqCvHT1yUjRY=')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'https://media.istockphoto.com/id/1218519667/pt/foto/happy-senior-man.jpg?s=612x612&w=0&k=20&c=PxL_Ga0hQC19QSynZ2WrxdQx1mOuaJD8pEJHzTwxXjs=')
            }
        } else if (fSex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'https://i.pinimg.com/736x/b6/c7/4c/b6c74cc21b88692999e1614848e8742d.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://img.freepik.com/psd-premium/jovem-mulher-com-os-bracos-cruzados_1187-25497.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://storage.alboom.ninja/sites/1432/albuns/927818/2021_02_18_foto-adulto_estudio-profissional_fotografia-book_cassia-mg_andre-luiz-ribeiro_ensaio_modelo__0004.jpg?t=1647021486')
            } else {
                //idoso
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/retrato-de-generoso-tipo-maduro-feminino-senior-em-uma-camisa-elegante-segurando-as-maos-cruzadas-no-peito-sentindo-se-grato-pelo-grande-presente-em-seu-aniversario-mulher-idosa-expressando-apreciacao_343059-2871.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}