
import imageQ8 from "../images/imageQ8.png";
import imageQ9 from "../images/imageQ9.png";
import imageQ5N2 from "../images/imageQ5N2.png"
import imageQ8N2 from "../images/imageQ9N2.png"

import imageQ4N3 from "../images/imageQ4N3.png"
import imageQ5N3 from "../images/imageQ5N3.png"
import imageQ6N3 from "../images/imageQ6N3.png"


import imageQ1N4 from "../images/imageQ1N4.png";
import imageQ2N4 from "../images/imageQ2N4.png";
import imageQ3N4 from "../images/imageQ3N4.png"
import imageQ4N4 from "../images/imageQ4N4.png"
import imageQ5N4 from "../images/imageQ5N4.png"
import imageQ6N4 from "../images/imageQ6N4.png"
import imageQ7N4 from "../images/imageQ7N4.png"
import imageQ8N4 from "../images/imageQ8N4.png"
import imageQ9N4 from "../images/imageQ9N4.png"
import imageQ10N4 from "../images/imageQ10N4.png"

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

export const Prova23N3: provas[] = [
    {
        numberQ: 1,
        enunciado: "Sabemos que a Luminosidade (L) das estrelas (equivalente à Potência das lâmpadas) é dada por: 𝑳 = 𝟒𝝅𝝈𝑹/𝟐𝑻^𝟒, onde 𝝈 (letra grega sigma) é uma constante, como o 𝝅 (pi), R é o raio da estrela e T a temperatura superficial da estrela. Para que duas estrelas tenham a mesma Luminosidade, elas precisam ter: Assinale a única alternativa correta.",
        alterA: "Elas precisam ter o mesmo produto R^2*T^4.",
        alterB: "Elas precisam ter o mesmo raio e a mesma distância à Terra.",
        alterC: "Elas precisam ter a mesma Temperatura superficial.",
        alterD: "Elas precisam ter a mesma Temperatura superficial e mesma distância à Terra.",
        alterE: "Elas precisam ter o mesmo produto R*T.",
        gabarito: "a",
        respondida: false,
        alterResp: ""
    },
    {
        numberQ: 2,
        enunciado: "Você já deve ter observado que as estrelas têm diferentes brilhos, mas também já observou que a lâmpada que está perto da sua casa brilha mais do que outra, igual (de mesma Potência, por exemplo, 100 Watts), que está a 10 quarteirões de você. Logo, o brilho depende da distância da fonte da luz até o observador. Os astrônomos chamam a Potência das estrelas de Luminosidade (L) e descobriram que ela depende do Raio (R) e da Temperatura superficial (T) da estrela, da seguinte forma: 𝑳 = 𝟒𝝅𝝈𝑹/𝟐𝑻^𝟒, onde 𝝈 (letra grega sigma) é uma constante, como o 𝝅 (pi). As estrelas Betelgeuse, da constelação de Órion e Achernar, da constelação de Eridano, têm exatamente o mesmo brilho. Suponha que elas também tenham a mesma Luminosidade. Se elas têm o mesmo brilho e luminosidade, podemos afirmar que: Assinale a única alternativa correta.",
        alterA: "Elas têm a mesma Temperatura superficial.",
        alterB: "Elas têm o mesmo Raio e distância à Terra.",
        alterC: "Elas estão à mesma distância da Terra.",
        alterD: "Elas têm a mesma Temperatura superficial e distância à Terra.",
        alterE: "Nada é possível afirmar sobre as distâncias delas à Terra.",
        gabarito: "c",
        respondida: false,
        alterResp: ""
    },
    {
        numberQ: 3,
        enunciado: "O astrônomo dinamarquês, Ole Christensen Rømer (1644 – 1710), foi o primeiro a determinar a velocidade da luz, usando os satélites de Júpiter e, claro, as variações das distâncias entre a Terra e Júpiter. Hoje sabemos que a velocidade da luz é uma constante universal que vale, aproximadamente, 300.000 km/s. Calcule quantos segundos a luz gasta para vir do Sol à Terra, sabendo que a distância entre o Sol e a Terra é de, aproximadamente, 150.000.000 km. Dados: V = V0 + at, S = S0 + V0t + 1/2at^2, V = ∆S/∆t, V^2 = V0^2 + 2a∆S. Assinale a alternativa que contém o valor correto.",
        alterA: "400 s.",
        alterB: "500 s.",
        alterC: "480 s.",
        alterD: "300 s.",
        alterE: "150 s.",
        gabarito: "b",
        respondida: false,
        alterResp: ""
    },   
    {
        numberQ: 4,
        enunciado: "As Leis de Kepler descrevem os movimentos dos planetas, luas, cometas e satélites artificiais em torno dos astros nos quais orbitam. Ela vale para o Sol e seus planetas, para os planetas e seus satélites naturais ou para os planetas e satélites artificiais. A Primeira Lei de Kepler (Lei das Órbitas), afirma que: “Os planetas (inclusive planetas anões) giram em torno do Sol em órbitas elípticas, estando o Sol num dos focos da elipse.” A Segunda Lei de Kepler (Lei das Áreas), afirma que: “Em iguais intervalos de tempos (∆𝒕𝟏𝟐 = ∆𝒕𝟑𝟒) os planetas “varrem” áreas iguais (Á𝒓𝒆𝒂𝟏 = Á𝒓𝒆𝒂𝟐)”. Como consequência da Segunda Lei de Kepler podemos afirmar que: PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V",
        imageEnunciado: imageQ4N3,
        alterA: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterE:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F) ",
        afirmativa1: "A velocidade dos planetas em torno do Sol, entre os pontos 1 e 2 é maior do que entre os pontos 3 e 4 da sua órbita. Veja figura.",
        afirmativa2: "A velocidade de um cometa em torno do Sol, entre os pontos 1 e 2 é maior do que entre os pontos 3 e 4 da sua órbita. Veja figura.  ",
        afirmativa3: "A velocidade dos satélites artificiais em torno dos astros que orbitam, entre os pontos 1 e 2 é maior do que entre os pontos 3 e 4 da sua órbita. Troque o Sol pelo astro na figura acima.",
        afirmativa4: "A velocidade da Lua em torno da Terra, entre os pontos 1 e 2 é maior do que entre os pontos 3 e 4 da sua órbita. Troque o Sol pela Terra na figura acima.",
        afirmativa5: "A Segunda Lei de Kepler, ou Lei das Áreas, só vale para o Sistema Solar",
        gabarito: "e",
        respondida: false,
        afirmativas: true,
        alterResp: ""
 
    },
    {
        numberQ: 5,
        enunciado: "A figura abaixo mostra uma parte do céu do dia 20/05/22 às 20h, conforme visto de Brasília. As linhas fortes delimitam as áreas das constelações. As linhas finas “ligam”, artisticamente as estrelas mais brilhantes de cada constelação. Assinale a alternativa que identifica corretamente as cinco constelações assinaladas com os números de 1 a 5.",
        imageEnunciado: imageQ5N3,
        alterA: "(1)Cruzeiro do Sul, (2)Centauro, (3)Triângulo Austral, (4)Escorpião, (5)Peixe Voador.",
        alterB:  "(1)Cruzeiro do Sul, (2)Escorpião, (3)Centauro, (4)Triângulo Austral, (5)Peixe Voador.",
        alterC:  "(1)Cruzeiro do Sul, (2)Escorpião, (3)Triângulo Austral, (4)Centauro, (5)Peixe Voador",
        alterD: "(1)Peixe Voador, (2)Escorpião, (3)Triângulo Austral, (4)Centauro, (5)Cruzeiro do Sul.",
        alterE:  "(1)Cruzeiro do Sul, (2)Escorpião, (3)Peixe Voador, (4)Centauro, (5)Triângulo Austral.",
        gabarito: "c",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 6,
        enunciado: "Abaixo está o globo terrestre colocado em dois diferentes instantes ao redor do Sol, aproximadamente à mesma distância do Sol, porém separados por 6 meses. Entre eles está o Sol (desenhado esquematicamente e fora de escala) e os “raios solares”. Dado: Na figura HN = Hemisfério Norte e HS = Hemisfério Sul. As linhas tracejadas representam os Trópicos. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        imageEnunciado: imageQ6N3,
        alterA: "1ª (V) – 2ª (V) – 3ª (V) – 4ª (F) – 5ª (F) ",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (F) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (V)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (F) – 4ª (V) – 5ª (V)",
        afirmativa1: "O eixo de rotação da Terra está inclinado de 23,5 graus em relação à perpendicular ao plano da órbita da Terra.",
        afirmativa2: "Se o eixo de rotação da Terra estivesse perpendicular ao plano da sua órbita não ocorreriam as estações do ano, pois ambos Hemisférios ficariam igualmente expostos ao Sol o ano todo.",
        afirmativa3: "A inclinação do eixo de rotação da Terra de 23,5 graus em relação à perpendicular ao plano da sua órbita é a responsável pelas estações do ano.",
        afirmativa4: "No globo da esquerda é Verão no Hemisfério Norte e Inverno no Hemisfério Sul.",
        afirmativa5: "As estações do ano são ocasionadas pela maior/menor proximidade da Terra ao Sol.",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
        
 
    },   
    {
        numberQ: 7,
        enunciado: "Não basta saber os nomes dos planetas e a sequência de afastamento deles ao Sol. Precisa saber também algumas das suas características. Assim, escreva o nome do planeta na frente das suas características. PRIMEIRO escreva os nomes dos planetas e, DEPOIS, assinale a alternativa que contém a sequência correta dos nomes dos planetas que você escreveu.",
        alterA: "1º (Mercúrio) – 2º (Júpiter) – 3º (Marte) – 4º (Vênus) – 5º (Saturno)",
        alterB:  "1º (Mercúrio) – 2º (Júpiter) – 3º (Marte) – 4º (Vênus) – 5º (Urano)",
        alterC:  "1º (Plutão) – 2º (Júpiter) – 3º (Marte) – 4º (Terra) – 5º (Saturno)",
        alterD: "1º (Mercúrio) – 2º (Netuno) – 3º (Marte) – 4º (Terra) – 5º (Urano)",
        alterE:  "1º (Mercúrio) – 2º (Saturno) – 3º (Vênus) – 4º (Marte) – 5º (Júpiter)",
        afirmativa1: "(. . . . . . . . . . . .) É um pouco maior do que a Lua; gira ao redor do Sol a 47 km/s. Seu ano é só de 88 dias. Superfície cheia de crateras. Estando nele, o Sol teria quase o triplo do diâmetro aparente que tem visto da Terra.",
        afirmativa2: "(. . . . . . . . . . . .) Ele tem mais do que o dobro da massa de todos os outros planetas juntos. Está a 5,2 vezes mais distante do Sol do que a Terra. Seu dia tem só 10 horas, mas seu ano dura 12 anos da Terra. ",
        afirmativa3: "(. . . . . . . . . . . .) É o planeta mais estudado. Seu dia é quase igual ao da Terra, mas está a 228.000.000 km do Sol. Tem tempestades de areia e vulcões. Tem duas luas. Parece ter tido água no passado. ",
        afirmativa4: "(. . . . . . . . . . . .) Tem espessa atmosfera que prende o calor do Sol fazendo dele o mais quente dos planetas. Quase do volume da Terra. Rochoso. Está a 108.000.000 km do Sol. Um dia dele é igual a 243 dias da Terra.",
        afirmativa5: "(. . . . . . . . . . . .) Gasoso. Ao longo do seu diâmetro cabem 9 Terras. É um dos 4 que tem anéis. Seu dia é de apenas 10,7 horas e seu ano é de 29 anos da Terra. Tem principalmente Hidrogênio H2 e Hélio.",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 8,
        enunciado: "A empresa norte-americana SpaceX está desenvolvendo um super foguete capaz de colocar 100.000 kg em órbita da Terra. No futuro o Starship poderá levar humanos à Lua e a Marte. Uma das novidades desse foguete é o uso do metano líquido como combustível. O foguete tem 120 metros de altura, equivalente à altura de um edifício de 40 andares. A estátua do Cristo Redentor tem 38 metros de altura. Baseado nessas informações: PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (F) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterB:  "1ª (F) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (V)",
        alterC:  "1ª (F) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (F)",
        alterD: "1ª (V) – 2ª (F) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterE:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (F) – 5ª (F)",
        afirmativa1: "O nome do foguete é SpaceX.",
        afirmativa2: "O foguete está sendo desenvolvido nos EUA.",
        afirmativa3: "Querosene é o combustível usado no Starship.",
        afirmativa4: "O foguete é capaz de levar 100 automóveis de 1.000 kg ao espaço.",
        afirmativa5: "O Starship é mais alto que 3 estátuas do Cristo Redentor, uma sobre a outra",
        gabarito: "b",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 9,
        enunciado: "A exploração de Marte é uma das áreas mais ativas da pesquisa espacial, com cerca de 50 missões não tripuladas já enviadas e/ou planejadas para ir ao planeta vermelho e inclui até planos para levar humanos para lá num futuro próximo. Neste momento, há dois jipes-robôs norte-americanos deslocando-se na superfície marciana, o Curiosity e o Perseverance, que têm o tamanho de um carro. O jipe-robô Perserverance foi lançado em 30 de julho de 2020, mas só pousou em Marte em 18 de fevereiro de 2021. Ele levou consigo um pequeno helicóptero, chamado Ingenuity, que já realizou cerca de 50 voos na atmosfera marciana. A energia elétrica necessária para mover as hélices do Ingenuity é obtida a partir da radiação solar incidente em Marte, enquanto a energia necessária para o funcionamento do Perseverance vem de um pequeno reator nuclear. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (F) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (F)",
        alterB:  "1ª (F) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (V)",
        alterC:  "1ª (F) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (F) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterE:  "1ª (V) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (F)",
        afirmativa1: "A viagem Terra-Marte do Perseverance demorou 9 meses",
        afirmativa2: "O helicóptero Ingenuity necessita da energia solar para carregar suas baterias.",
        afirmativa3: "O Curiosity, Ingenuity e Perserverance são dos Estados Unidos da América.",
        afirmativa4: "Há planos de enviar humanos a Marte",
        afirmativa5: "O jipe-robô Perseverance necessita da energia solar para carregar suas baterias. Assinale a alternativa que contém a sequência correta de F e V.",
        gabarito: "c",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 10,
        enunciado: "No dia 15/04/23 o satélite brasileiro VCUB-1 desenvolvido pela Visiona foi lançado ao espaço. Por ter apenas 12 kg de massa, ele foi acomodado em um veículo de transferência orbital, chamado OTV. O foguete Falcon 9 deixou o OTV a 600 km de altitude. A partir dessa altitude, o OTV distribuiu, os 6 pequenos satélites que transportava, em suas órbitas finais, conforme ilustrado na Figura. Por exigência de leis internacionais, após deixar o seu último satélite na órbita de 480 km, o OTV retornou à Terra, onde foi destruído pelo atrito com a atmosfera terrestre. PRIMEIRO coloque F, de falso, ou V, de verdadeiro, na frente de cada afirmação abaixo e, DEPOIS, assinale a alternativa que contém a sequência correta de F e V.",
        alterA: "1ª (F) – 2ª (F) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterB:  "1ª (V) – 2ª (V) – 3ª (F) – 4ª (V) – 5ª (F)",
        alterC:  "1ª (F) – 2ª (F) – 3ª (V) – 4ª (V) – 5ª (F)",
        alterD: "1ª (V) – 2ª (V) – 3ª (F) – 4ª (F) – 5ª (V)",
        alterE:  "1ª (V) – 2ª (V) – 3ª (V) – 4ª (V) – 5ª (F)",
        afirmativa1: "A altitude da órbita do VCUB-1 é de 500 km.",
        afirmativa2: "O período orbital do VCUB-1 é de 1,5 h, logo, num dia ele dá 16 voltas em torno da Terra",
        afirmativa3: "O OTV libera um satélite a cada 2 dias. O primeiro foi no dia 15/04/23, logo o VCUB1 foi liberado no dia 23/04/23.",
        afirmativa4: "O primeiro satélite foi liberado a 600 km de apogeu e o último a 480 km.",
        afirmativa5: "O OTV foi destruído ao cair no mar.",
        gabarito: "e",
        afirmativas: true,
        respondida: false,
        alterResp: ""
    },         
]

export const Prova23N4: provas[] = [
    {
        numberQ: 1,
        imageEnunciado: imageQ1N4,
        enunciado: "A imagem a seguir traz a foto do Monte Fuji, no Japão, no dia do Equinócio de Outono, visto do Monastério Keishin-in, uma escola budista. Neste dia o Sol nasce perfeitamente alinhado com o cume deste famoso vulcão, que ainda está ativo. As coordenadas do Monte Fuji são: Latitude  = 35° 21' 29 N e longitude λ = 138° 43' 52 E. Sobre as informações dadas, PRIMEIRO coloque F ou V na frente de cada afirmação e DEPOIS escolha a linha que contém a sequência correta de F e V.",
        alterA: "1ª (V), 2ª (F), 3ª (F), 4ª (V), 5ª (V)",
        alterB:  "1ª (V), 2ª (F), 3ª (V), 4ª (V), 5ª (V)",
        alterC:  "1ª (V), 2ª (F), 3ª (V), 4ª (F), 5ª (V)",
        alterD: "1ª (F), 2ª (V), 3ª (F), 4ª (V), 5ª (F)",
        alterE:  "1ª (F), 2ª (V), 3ª (V), 4ª (F), 5ª (F)",
        afirmativa1: "Uma semana depois do Equinócio de Outono, o Sol nascerá à direita do cume do Monte Fuji.",
        afirmativa2: "Uma semana depois do Equinócio de Outono, o Sol nascerá à esquerda do cume do Monte Fuji.",
        afirmativa3: "Este alinhamento ocorre quatro vezes por ano.",
        afirmativa4: "No Equinócio da Primavera, o Sol também nasce alinhado com o cume do Monte Fuji.",
        afirmativa5: "O cume do Monte Fuji e o monastério estão alinhados com a direção Leste-Oeste. Assinale a alternativa que contém a sequência correta de F e V.",
        afirmativas: true,
        gabarito: "a",
        respondida: false,
        alterResp: ""
        
        
    },   
    {
        numberQ: 2,
        imageEnunciado: imageQ2N4,
        enunciado: "O desenho a seguir, fora de escala, ilustra a famosa Segunda Lei de Kepler, com o Sol ocupando um dos focos da elipse orbital, que neste caso está com a sua excentricidade exagerada. Sobre esta Lei e o desenho, PRIMEIRO coloque F ou V na frente de cada afirmação e DEPOIS escolha a linha que contém a sequência correta de F e V",
        alterA: "1ª (V), 2ª (V), 3ª (V), 4ª (V), 5ª (F)",
        alterB:  "1ª (V), 2ª (V), 3ª (V), 4ª (V), 5ª (V)",
        alterC:  "1ª (V), 2ª (V), 3ª (V), 4ª (F), 5ª (F)",
        alterD: "1ª (F), 2ª (V), 3ª (F), 4ª (F), 5ª (V)",
        alterE:  "1ª (F), 2ª (F), 3ª (F), 4ª (F), 5ª (F)",
        afirmativa1: "Se os intervalos de tempos entre AB e XY forem os mesmos (tAB = tXY), então a área compreendida entre os pontos A-B-Sol é igual à área compreendida entre os pontos X-Y-Sol",
        afirmativa2: "A velocidade orbital entre os pontos A e B é maior do que entre os pontos X e Y.",
        afirmativa3: "Este alinhamento ocorre quatro vezes por ano.",
        afirmativa4: "Os pontos A e B estão mais perto do periélio do planeta do que os pontos X e Y.",
        afirmativa5: "Entre os pontos X e Y o planeta está acelerado. Entre os pontos A e B o planeta está acelerado.",
        afirmativas: true,
        gabarito: "b",
        respondida: false,
        alterResp: ""
    },
    {
        numberQ: 3,
        imageEnunciado: imageQ3N4,
        enunciado: "O gráfico traz a relação entre a profundidade e o diâmetro das crateras em quatro luas do Sistema Solar. As “quebras” das linhas marcam a transição de crateras simples para complexas (primeira “quebra” em 1) e de crateras complexas para bacias com multianéis (segunda “quebra” em 2). Baseado nas informações apresentadas no gráfico, assinale a afirmação correta.",
        alterA: "De maneira geral, crateras com 1 km de diâmetro também costumam ter 1 km de profundidade. ",
        alterB:  "Na lua Europa só encontramos crateras simples.",
        alterC:  "Na Lua, crateras com diâmetros de até 10 km são consideradas crateras simples.",
        alterD: "A profundidade das crateras da Lua é sempre menor do que as de Ganimedes.",
        alterE:  "Em Titã encontramos todos os três tipos de crateras",
        gabarito: "c",
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 4,
        imageEnunciado: imageQ4N4,
        enunciado: "Quando o Sol passa pelo ponto mais alto do céu, dizemos que está acontecendo o meio-dia solar verdadeiro. Quando, no dia seguinte, ele passa novamente por este ponto, dizemos que se passou 1 Dia Solar. Se usarmos as estrelas como referência, quando uma determinada estrela passa pelo mesmo lugar no dia seguinte, dizemos que se passou 1 Dia Sideral. A imagem a seguir traz o esquema, fora de escala, da órbita da Terra em torno do Sol em três momentos distintos e consecutivos: A, B e C. Sobre esta imagem e baseado nos seus conhecimentos, assinale a opção correta.",
        alterA: "Entre o momento A e o momento C se passou um Dia Sideral.",
        alterB:  "Entre o momento A e o momento B se passou um Dia Sideral.",
        alterC:  "Entre o momento A e o momento B se passou um Dia Solar.",
        alterD: "Entre o momento A e o momento B se passaram 24 horas.",
        alterE:  "Entre o momento A e o momento C se passaram 24 horas e 4 min.",
        gabarito: "b",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 5,
        imageEnunciado: imageQ5N4,
        enunciado: "A imagem a seguir traz o balanço médio de energia dos dois gigantes gasosos do Sistema Solar entre a luz solar incidente (fluxo solar), uma parte da qual é refletida e o restante é absorvida e subsequentemente reemitida no comprimento de onda do infravermelho térmico. Além disso, ambos os planetas possuem fontes internas de energia que contribuem para aumentar suas emissões em infravermelho. Os valores apresentados estão em W/m2 , extraídos de várias fontes. Baseado nas informações apresentadas, PRIMEIRO coloque F ou V na frente de cada afirmação e DEPOIS escolha a linha que contém a sequência correta de F e V.",
        alterA: "1",
        alterB:  "2",
        alterC:  "3",
        alterD: "4",
        alterE:  "5",
        afirmativa1: "Da luz solar que recebem, Júpiter absorve, percentualmente, um pouco menos do que Saturno.",
        afirmativa2: "A luz solar recebida por Saturno é, percentualmente, mais intensa do que a de Júpiter por conta dos seus anéis.",
        afirmativa3: "Ambos os planetas emitem mais energia do que recebem do Sol.",
        afirmativa4: "Da luz solar que recebem, Saturno reflete, percentualmente, um pouco mais do que Júpiter.",
        afirmativa5: "Júpiter possui uma fonte interna de calor mais intensa do que a de Saturno. Assinale a alternativa que contém a sequência correta de F e V.",
        afirmativas: true,
        gabarito: "d",
        respondida: false,
        alterResp: ""
 
    },
    {
        numberQ: 6,
        imageEnunciado: imageQ6N4,
        enunciado: "Uma das maiores novidades do Telescópio Espacial James Webb (JWST) é sua capacidade de encontrar exoplanetas habitáveis. Isso porque ele leva um equipamento especial a bordo chamado NIRISS, capaz de ler a assinatura química de lugares distantes. Para estrear o equipamento, os operadores do James Webb apontaram o telescópio para o exoplaneta WASP-96 b. Ele é um entre os mais de 5 mil que conhecemos na Via Láctea, e está localizado a 1.150 anos-luz de nós. Localizado na constelação da Fênix, esse é um tipo de gigante gasoso de raio 1,2 vezes o de Júpiter, mas com metade da sua massa. Além disso, é muito quente. Com temperatura média próxima dos 500 °C, ele está muito perto da sua estrela — chamada WASP-96. Sua órbita é tão pequena que um ano completo lá tem cerca de 3,5 dias terrestres. A imagem traz o gráfico da curva de luz, o brilho da estrela WASP-96, quando da passagem do planeta WASP-96 b pelo seu disco, ou seja, durante um trânsito planetário. Baseado nas informações apresentadas e no gráfico, PRIMEIRO coloque F ou V na frente de cada afirmação e DEPOIS escolha a linha que contém a sequência correta de F e V. Assinale a alternativa que contém a sequência correta de F e V",
        alterA: "1ª (V), 2ª (F), 3ª (F), 4ª (F), 5ª (V)",
        alterB:  "1ª (V), 2ª (F), 3ª (V), 4ª (F), 5ª (V)",
        alterC:  "1ª (F), 2ª (F), 3ª (F), 4ª (F), 5ª (V) 1",
        alterD: "1ª (F), 2ª (F), 3ª (F), 4ª (V), 5ª (F)",
        alterE:  "1ª (V), 2ª (V), 3ª (V), 4ª (V), 5ª (F)",
        afirmativa1: "Durante seu trânsito, planeta WASP-96 b reduziu em 2% do brilho da sua estrela",
        afirmativa2: "O máximo do trânsito ocorreu às 16h do dia 21 de junho de 2022.",
        afirmativa3: "Em 1 ano terrestre, o planeta WASP-96 b dá 100 voltas em torno de WASP-96.",
        afirmativa4: "Se um parsec tem 3,26 anos-luz, então a estrela WASP-96 está a 360 parsecs de nós.",
        afirmativa5: "O planeta WASP-96 b tem cerca de 30% da densidade de Júpiter.",
        gabarito: "c",
        afirmativas: true,
        respondida: false,
        alterResp: ""
        
 
    },   
    {
        numberQ: 7,
        imageEnunciado: imageQ7N4,
        enunciado: "O desenho representa o esquema de um calendário solar indígena do Hemisfério Sul da Terra, onde a sombra do obelisco marca o início de cada estação do ano, indicado pelas linhas no chão, numeradas de 1 a 6. Baseado no desenho e em seus conhecimentos, assinale a opção correta.",
        alterA: "A linha 2 indica o pôr do Sol no início da Primavera",
        alterB:  "A linha 4 indica o pôr do Sol no início do Verão.",
        alterC:  "A linha 1 indica o nascer do Sol no início do Verão.",
        alterD: "A linha 5 indica o nascer do Sol no início do Outono",
        alterE:  "A linha 6 indica o pôr do Sol no início do Inverno.",
        gabarito: "c",
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 8,
        imageEnunciado: imageQ8N4,
        enunciado: "Ao final de 2012, havia 1.191 satélites operando em órbita terrestre. Dez anos depois temos 6.905 satélites. Somente nesta década, há a expectativa de que mais 14.000 satélites sejam lançados ao espaço. Como você já sabe, são os foguetes que levam os satélites ao espaço. Eles podem fazê-lo tanto individualmente, ou seja, levando um satélite de cada vez, ou em conjunto, como foi o caso de um foguete Falcon 9, que levou 143 ao espaço em um único voo. A tabela apresenta foguetes oriundos dos EUA, Europa, China, Índia e Rússia. A tabela também mostra a capacidade máxima de carga que cada foguete consegue levar para colocar um objeto em uma órbita de 1.000 km acima da superfície terrestre. Assinale a alternativa que contém as respostas corretas aos itens “a”, “b” e “c”, e na sequência correta",
        alterA: "Falcon 9, Falcon 9 e Electron",
        alterB:  "Falcon 9, Proton e Electron",
        alterC:  "Falcon 9, Falcon 9 e Kuaizhou-1A",
        alterD: "Ariane 5, PSLV e Kuaizhou-1A",
        alterE:  "Ariane 5, PSLV e Falcon 9",
        afirmativa1: "Item a) Baseado nos dados da tabela, qual dos foguetes apresenta o menor custo específico? O custo específico é obtido quando se divide o preço do foguete pela sua capacidade de carga. Para responder a esta questão você precisará completar a Tabela.",
        afirmativa2: "Item b) Suponha que você tenha dois satélites de 7.500 kg para colocar em órbita. Qual dos foguetes você usaria, considerando o menor preço do foguete. Considere que o foguete levará somente os seus satélites.",
        afirmativa3: "Item c) Os satélites atuais têm massas variando de 0,25 kg a 5.000 kg, aproximadamente. Considere que você deseje lançar 60 satélites de 1,5 kg cada um. Qual dos foguetes você usaria, considerando o menor custo de lançamento e o fato de que seus satélites possuem componentes norte-americanos e, por isso, não podem voar em foguetes chineses. Considere que o foguete levará somente os seus satélites",
        gabarito: "a",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 9,
        imageEnunciado: imageQ9N4,
        enunciado: "O VCUB-1, da empresa Visiona, é o primeiro satélite brasileiro a fazer uso de uma nova tecnologia espacial que são os Veículos de Transferência Orbital (OTV – Orbital Transfer Vehicles). De modo simplificado, um OTV pode ser entendido como um satélite que, colocado em órbita terrestre por meio de um foguete, é capaz de inserir vários pequenos satélites em diferentes órbitas, por meio de manobras orbitais. Em decorrência da diminuição do tamanho dos satélites, por conta da miniaturização da eletrônica, um foguete, como o Falcon 9 (SpaceX), é capaz de levar em um único voo dezenas de satélites. Como cada satélite tem suas especificidades em relação à altitude e plano orbital, faz-se uso de um OTV para efetuar os ajustes orbitais de cada um dos pequenos satélites que ele transporta. Para tanto, o OTV possui seu próprio sistema propulsivo. O VCUB-1, com 12 kg de massa, foi ao espaço em abril de 2023. O foguete Falcon 9 colocou o OTVION em uma órbita inicial de 600 km de altitude (ver figura). A partir dessa atitude, o OTV ION inseriu os satélites A, B, C, D, VCUB1 e F em suas órbitas finais de 580, 560, 540, 520 km, 500 km e 480 km, respectivamente. Para que possa realizar suas manobras orbitais, o OTV-ION possui um sistema propulsivo próprio com 2,6 kg de propelente. Depois de colocar o último satélite em órbita o OTV-ION reentrou na atmosfera terrestre, onde foi destruído pelo intenso calor gerado pela reentrada.Assinale a alternativa que contém as respostas corretas aos itens “a” e “b”, acima, e na sequência correta.",
        alterA: "4 dias e 0,4 kg",
        alterB:  "5 dias e 0,8 kg",
        alterC:  "4 dias e 0,2 kg",
        alterD: "5 dias e 0,4 kg ",
        alterE:  "5 dias e 0,2 kg",
        afirmativa1: "Item a) Para cada redução de 20 km na sua altitude, o OTV-ION necessita de 1 dia. Considerandose que a ejeção dos satélites é instantânea, quantos dias foram necessários, no mínimo, para colocação do VCUB-1 em sua órbita de 500 km?",
        afirmativa2: "Item b) Para correção de 10 km na altitude o sistema propulsivo do OTV-ION consome 200 g de propelente. Quanto de massa de propelente será consumida pelo OTV-ION para colocar o VCUB-1 em sua órbita final, após lançar o satélite D?",
        gabarito: "d",
        afirmativas: true,
        respondida: false,
        alterResp: ""
 
    },   
    {
        numberQ: 10,
        imageEnunciado: imageQ10N4,
        enunciado: "A exploração de Marte é uma das áreas mais ativas da pesquisa espacial, com cerca de 50 missões já realizadas e/ou planejadas não tripuladas ao planeta vermelho e até há planos para levar humanos para lá em um futuro próximo. Neste momento, há dois jipes-robôs deslocando-se na superfície marciana (Curiosity e Perseverance), um pequeno helicóptero (Ingenuity) e sete satélites orbitando o planeta vermelho. Chegar a Marte é um desafio extraordinário, razão pela qual metade das missões para lá enviadas falharam. Imagine você arremessar uma espaçonave do tamanho de um carro em direção a um ponto do espaço onde Marte estará daqui a alguns meses. Para tanto, são utilizados foguetes que possuem 60 m de altura e 531.000 kg de massa. Isso mesmo, para arremessar uma espaçonave de 1.000 kg em direção a Marte, são necessários 480.000 kg de propelente (combustível + oxidante), que são consumidos em apenas 20 minutos. Durante quase toda a trajetória rumo a Marte, o gigantesco foguete já não mais existe. Pequenos motores-foguetes da espaçonave são utilizados apenas para correções de trajetória e para amartissagem (pouso em Marte). Durante essa fase de voo não propulsado, a espaçonave fica sob influência quase exclusiva do campo gravitacional do Sol. Muito antes que os grandes foguetes pudessem ser desenvolvidos, o cientista alemão Walter Hohmann propôs, em 1925, uma trajetória de transferência orbital que envolvia o menor consumo de propelente, desde então conhecida como órbita de transferência de Hohmann. Nessa trajetória (ver figura) o periélio da órbita de transferência encontra-se na órbita da Terra que corresponde ao ponto A, enquanto o afélio se encontra na órbita de Marte no ponto B. Para as questões abaixo, considere que as órbitas da Terra e de Marte são circulares e coplanares. Assinale a alternativa que contém as respostas corretas aos itens “a” e “b”, acima, e na sequência correta",
        alterA: "1,50 UA e 11,0 meses",
        alterB:  "1,25 UA e 16,8 meses",
        alterC:  "1,22 UA e 22,0 meses",
        alterD: "1,22 UA e 8,4 meses",
        alterE:  "1,25 UA e 8,4 meses",
        afirmativa1: "Item a) Sabendo que o semieixo maior de uma órbita elíptica ao redor do Sol corresponde à metade da distância entre o periélio e o afélio, calcule o valor do semieixo maior da órbita de transferência. Considere que a distância da Terra ao Sol seja de 1,0 UA e que a distância entre Marte e Sol seja de 1,5 UA. Apresente o resultado em unidades astronômicas (UA).",
        afirmativa2: "Item b) Em 1619, o alemão Johannes Kepler propôs a Terceira Lei de Kepler que diz que o quadrado do período de uma órbita dividido pelo cubo do semieixo maior dessa órbita é constante para todos os corpos que orbitam um mesmo corpo central. Por exemplo, sendo T o período e S o semieixo maior da órbita de transferência, tem-se que: 𝑇 2 𝑆³ = 𝑇𝑇 2 𝑅𝑇 3 , onde TT é o período da órbita da Terra, ou seja, 12 meses e RT é a distância da Terra ao Sol, ou seja, 1,0 UA. Sendo assim, calcule o tempo para uma espaçonave viajar do ponto A ao B na órbita de transferência em meses. Lembre-se de que apenas metade da elipse é percorrida e que por isso, esse tempo corresponde à metade do período da órbita de transferência. Considere √1,50 = 1,22 e √1,25 = 1,12.",
        gabarito: "e",
        afirmativas: true,
        respondida: false,
        alterResp: ""
    },         
]