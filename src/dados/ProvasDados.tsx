import React from "react";
import imageQ8 from "../images/imageQ8.png";
import imageQ9 from "../images/imageQ9.png";
import imageQ5N2 from "../images/imageQ5N2.png"
import imageQ8N2 from "../images/imageQ9N2.png"
type provas = {
    numberQ: number,
    respondida: boolean,
    alterResp:string,
    enunciado: string,
    imageEnunciado? : string
    gabarito: string,
    alterA: string, 
    alterB: string,
    alterC:string,
    alterD: string,
    alterE: string,
    afirmativas?: boolean,
    afirmativa1?: string,
    afirmativa2?: string,
    afirmativa3?: string,
    afirmativa4?: string,
    afirmativa5?: string,
}
export const Prova23N1: provas[] = [
    {
        numberQ: 1,
        enunciado: "Mostre que você sabe um pouco de Astronomia. Assinale a alternativa onde está tudo certo.",
        alterA: "A Lua brilha mais do que o Sol e é maior do que o Sol.",
        alterB:  "A Lua é satélite artificial da Terra e já foi visitada por astronautas.",
        alterC:  "A Lua é satélite natural da Terra e já foi visitada por astronautas",
        alterD: "Marte é vermelho e já foi visitado por astronautas.",
        alterE:  "A Lua e Marte já foram visitados por astronautas norte-americanos.",
        gabarito: "c",
        respondida: false,
        alterResp: ""
        
        
    },   
    {
        numberQ: 2,
        enunciado: "Mostre que você sabe um pouco mais de Astronomia. Assinale a alternativa onde está tudo certo.",
        alterA: "Mercúrio tem uma lua, Vênus tem duas luas e Marte tem três luas.",
        alterB:  "A Lua, Marte e Mercúrio têm montanhas e oceanos.",
        alterC:  "Mercúrio, Vênus e Marte têm luas naturais.",
        alterD: "A Lua, Marte e Mercúrio têm crateras e montanhas.",
        alterE:  "A Terra é maior do que Mercúrio e Mercúrio é maior do que Marte.",
        gabarito: "d",
        respondida: false,
        alterResp: ""
    },
    {
        numberQ: 3,
        enunciado: "Mostre que você sabe muito de Astronomia. Assinale a alternativa onde está tudo certo.",
        alterA: "A Terra é maior do que Mercúrio e Mercúrio é maior do que a Lua.",
        alterB:  "A Terra e Marte têm atmosferas, mas a Lua e Mercúrio também têm.",
        alterC:  "A Terra e Marte têm geleiras, mas a Lua, Mercúrio e Vênus também têm",
        alterD: "Mercúrio é mais quente do que Vênus e Vênus é mais quente do que Marte.",
        alterE:  "A Lua e Mercúrio têm atmosferas, mas Vênus, Marte e a Terra não têm.",
        gabarito: "a",
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 4,
        enunciado: "Mostre que você sabe tudo de Astronomia. Assinale a alternativa onde está tudo certo.",
        alterA: "Saturno é o maior dos planetas, tem anéis, muitas luas e é gasoso como Urano.",
        alterB:  "Mercúrio é o mais próximo do Sol, tem o menor ano e é o maior de todos.",
        alterC:  "Marte tem atmosfera, é vermelho, é maior do que a Lua e maior do que a Terra.",
        alterD: "Júpiter é o maior dos planetas, tem anéis, muitas luas e é rochoso como Vênus.",
        alterE:  "Vênus é o planeta mais quente, mais brilhante e pouco menor que a Terra.",
        gabarito: "e",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 5,
        enunciado: "Suponha que você é um(a) astronauta. Numa viagem aos planetas que estão entre a Terra e o Sol, você passou pertinho de um planeta que não tinha nenhuma lua, era o mais quente e o mais brilhante deles. Qual é o nome deste planeta? Assinale a única alternativa correta.",
        alterA: "Mercúrio",
        alterB:  "Vênus",
        alterC:  "Marte",
        alterD: "Júpiter",
        alterE:  "Urano",
        gabarito: "b",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 6,
        enunciado: "O planeta mais bem estudado é a Terra. Vamos ver o que você sabe sobre a Terra. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V) ",
        afirmativa1: "A Terra tem rios, lagos, mares, atmosfera, florestas e oceanos.",
        afirmativa2: "A atmosfera da Terra protege a vida na Terra.",
        afirmativa3: "A Terra tem uma Lua e ela gira ao redor da Terra.",
        afirmativa4: "A Terra gasta cerca de 365 dias para dar uma volta ao redor do Sol.",
        afirmativa5: "A Lua, o Sol e as estrelas giram ao redor da Terra.",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
        
 
    },   
    {
        numberQ: 7,
        enunciado: "O planeta mais bem estudado depois da Terra é Marte. Vamos ver o que você sabe sobre Marte. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F) ",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        afirmativa1: "Marte gira ao redor do Sol, mas leva mais tempo do que a Terra.",
        afirmativa2: "A Terra tem uma Lua grande, mas Marte tem duas luas bem pequenas.",
        afirmativa3: "O dia e o ano de Marte são mais longos do que os da Terra.",
        afirmativa4: "O ano de Marte dura 687 dias e o dia de Marte dura 24 horas e 37 minutos.",
        afirmativa5: "Sobre Marte já caminharam dois astronautas americanos e um chinês",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 8,
        enunciado: "A foto mostra a base de lançamento de foguetes usada pelos alunos do 1º ao 3º ano. A cordinha é para lançar o foguete, mas antes temos que fazer uma contagem regressiva, assim: 5, 4, 3, 2, 1, LANÇAR! PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V. ",
        imageEnunciado:imageQ8,
        alterA: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (F) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (F) – 5ª (F)",
        alterD: "1ª (V) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (V) – 5ª (V)",
        afirmativa1: "O tubo de lançamento tem inclinação de 45 graus para o foguete ir mais longe.",
        afirmativa2: "O gatilho, quando puxado, libera o foguete.",
        afirmativa3: "A contagem regressiva é para alertar a todos que um foguete vai ser lançado.",
        afirmativa4: "A contagem regressiva dá sorte ao voo do foguete.",
        afirmativa5: "A contagem regressiva faz o foguete voar mais alto.",
        gabarito: "b",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 9,
        enunciado: "A foto mostra a base de lançamento de foguetes usada pelos alunos do 1º ao 3º ano. Na foto mostramos uma bolinha ou “bucha” de papel amassado (mas pode ser de pano, papel higiênico, espuma, etc) sendo colocada dentro do tubo de lançamento de foguetes. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        imageEnunciado: imageQ9,
        alterA: "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        afirmativa1: "A bolinha de papel serve de apoio para o foguete de canudo dentro do tubo.",
        afirmativa2: "Sem a bolinha de papel (ou pano) o foguete não vai muito longe.",
        afirmativa3: "A bolinha de papel é lançada pelo ar comprimido e empurra o foguete.",
        afirmativa4: "A bolinha não pode entrar nem muito folgada nem muito apertada no tubo.",
        afirmativa5: "A bolinha de papel não ajuda o foguete a voar mais longe.",
        gabarito: "c",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 10,
        enunciado: "Os foguetes são muito úteis. Abaixo tem uma lista das possíveis utilidades deles. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        afirmativa1: "Servem para levar astronautas à Lua e no futuro até a Marte.",
        afirmativa2: "Servem para levar equipamentos à Estação Espacial Internacional.",
        afirmativa3: "São usados para colocar satélites ao redor da Terra para estudar a Terra.",
        afirmativa4: "São usados para colocar telescópios no espaço.",
        afirmativa5: "Servem para ir de uma cidade para a outra, como aviões.",
        gabarito: "e",
        afirmativas: true,
        respondida: false,
        alterResp: ""
    },         
]
export const Prova23N2: provas[] = [
    {
        numberQ: 1,
        enunciado: "Mostre que você já sabe um pouco de Astronomia. Assinale a única alternativa onde está tudo certo.",
        alterA: "A Lua brilha tanto quanto o Sol e é do mesmo tamanho do Sol.",
        alterB:  "A Lua é um satélite artificial da Terra e tem 4 fases principais.",
        alterC:  "A Terra tem um satélite natural, mas tem milhares de satélites artificiais.",
        alterD: "A Lua e Marte já foram visitados por astronautas.",
        alterE:  "Astronautas estão morando na Lua, mas precisam levar água da Terra.",
        gabarito: "c",
        respondida: false,
        alterResp: ""
        
        
    },   
    {
        numberQ: 2,
        enunciado: "Mostre que você já sabe bastante coisas sobre Astronomia. Assinale a única alternativa onde está tudo certo, ok?",
        alterA: "A Lua, Marte, Vênus e Mercúrio têm crateras, atmosferas e montanhas.",
        alterB:  "A Lua, Marte, Vênus e Mercúrio têm crateras, geleiras e montanhas.",
        alterC:  "Mercúrio, Vênus e Marte têm luas naturais.",
        alterD: "A Lua, Marte, Vênus e Mercúrio têm crateras e montanhas",
        alterE:  "A Lua é menor do que Mercúrio e Marte é maior do que Vênus.",
        gabarito: "d",
        respondida: false,
        alterResp: ""
    },
    {
        numberQ: 3,
        enunciado: "Mostre que você já é um(a) Astrônomo(a). Assinale a única alternativa onde está tudo certo, ok?",
        alterA: "O ano de Mercúrio é menor do que o da Terra, pois está pertinho do Sol.",
        alterB:  "O ano da Terra é maior do que o de Marte, pois a Terra é maior do que Marte.",
        alterC:  "Todos os planetas do Sistema Solar têm os seus vulcões.",
        alterD: "Todos os planetas do Sistema Solar têm as suas luas.",
        alterE:  "Todos os planetas do Sistema Solar têm dia de 24 horas e ano de 365 dias",
        gabarito: "a",
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 4,
        enunciado: "Mostre que você já sabe quase tudo de Astronomia. Assinale a única alternativa onde está tudo certinho, ok?",
        alterA: "Urano é o maior dos planetas, tem anéis, muitas luas e é gasoso como Saturno.",
        alterB:  "Júpiter é o maior dos planetas, tem anéis, é gasoso, mas não tem luas.",
        alterC:  "Vênus tem atmosfera, é brilhante, é maior do que a Lua e maior do que a Terra.",
        alterD: "Quanto mais longe do Sol, maior é a velocidade dos planetas.",
        alterE:  "Vênus é mais quente do que Mercúrio porque tem uma espessa atmosfera.",
        gabarito: "e",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 5,
        enunciado: "Abaixo tem uma imagem do céu, num certo dia, hora e local, com os “lotes” representando as áreas das constelações. Assinale a alternativa que contém o número que identifica a constelação do Cruzeiro do Sul",
        imageEnunciado: imageQ5N2,
        alterA: "1",
        alterB:  "2",
        alterC:  "3",
        alterD: "4",
        alterE:  "5",
        gabarito: "b",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 6,
        enunciado: "O planeta mais bem estudado, depois da Terra, é Marte. Vamos ver o que você já sabe sobre Marte. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        afirmativa1: " Marte está no céu, logo, a Terra também está no céu.",
        afirmativa2: "O céu de Marte não é azul como o da Terra.",
        afirmativa3: "A Terra tem uma lua, mas Marte tem duas, a Fobos e a Deimos.",
        afirmativa4: "O ano de Marte dura 687 dias e o dia de Marte dura 24 horas e 37 minutos.",
        afirmativa5: "Marte é mais veloz do que a Terra, porque está mais longe do Sol. Assinale a alternativa que contém a sequência correta de F e V.",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
        
 
    },   
    {
        numberQ: 7,
        enunciado: "A Lua e Marte são os astros mais bem estudados do Sistema. Solar. Vamos ver o que você já sabe sobre a Lua e Marte. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        afirmativa1: "A Lua gira sobre si e ao redor da Terra.",
        afirmativa2: "A Terra tem uma Lua grande, mas Marte tem duas luas bem pequenas.",
        afirmativa3: "O dia e o ano de Marte são mais longos do que os da Terra.",
        afirmativa4: "O ano de Marte dura 687 dias e o dia de Marte dura 24 horas e 37 minutos.",
        afirmativa5: "Norte-americanos pousaram na Lua e chineses pousaram em Marte.",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 8,
        enunciado: "A foto mostra o foguete e a base de lançamento de foguetes usada pelos alunos do quarto e do quinto ano. O foguete é de papel e tem empenas. A cordinha é para lançar o foguete. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        imageEnunciado:imageQ8N2,
        alterA: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (F)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (F) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F) ",
        alterD: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (V) – 3ª (V) – 4ª (F) – 5ª (F) ",
        afirmativa1: " O foguete tem ponta fina ou pontiaguda para poder ir mais longe.",
        afirmativa2: "O foguete tem empenas (ou “asas”) para dar estabilidade ao voo dele",
        afirmativa3: "O foguete pode ter 3 ou 4 empenas, mas não pode ter só uma ou duas.",
        afirmativa4: "O foguete bem pesado vai mais longe.",
        afirmativa5: "A contagem regressiva faz o foguete voar mais alto.",
        gabarito: "b",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 9,
        enunciado: "A foto mostra o foguete e a base de lançamento usada pelos alunos do quarto e do quinto ano. O foguete voa por um “jato” de ar comprimido que a base libera dentro do foguete quando puxamos a cordinha bem rápido. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        imageEnunciado: imageQ8N2,
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (F) – 5ª (V) ",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F) ",
        alterC:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F) ",
        alterD: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (V) – 5ª (F) -",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        afirmativa1: "O foguete é lançado com inclinação de 45 graus para ir bem longe.",
        afirmativa2: "Para pressurizar a base é preciso usar uma bomba de encher pneu ou bola.",
        afirmativa3: "A base é feita de cano de água para ficar boa e não gastar muito dinheiro.",
        afirmativa4: "Quando a cordinha é puxada bem rápido, o foguete vai mais longe.",
        afirmativa5: " A contagem regressiva faz o foguete voar mais alto.",
        gabarito: "c",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 10,
        enunciado: "Você sabe que lançar foguetes, mesmo de garrafas PET, ou até mesmo o de papel, envolve algum risco de acidente. Por isso, sempre devemos tomar todos os cuidados necessários para que não ocorram acidentes e devemos fazer muitos testes para aperfeiçoar o foguete e até mesmo a base de lançamento. Veja as afirmações abaixo. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        afirmativa1: "Precisamos isolar a área na qual os foguetes serão lançados.",
        afirmativa2: " A base deve ficar bem presa ao piso para não se mexer quando o foguete sai.",
        afirmativa3: "Na escola não devemos lançar foguetes na vertical, pois podem cair na gente.",
        afirmativa4: "A contagem regressiva, em voz bem alta, alerta a todos sobre o lançamento.",
        afirmativa5: "Os foguetes de garrafa PET são leves e não causam acidentes.",
        gabarito: "e",
        afirmativas: true,
        respondida: false,
        alterResp: ""
    },         
]
