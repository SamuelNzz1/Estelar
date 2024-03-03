import React from "react";
import nivel1Q1Image from "../images/nivel1Q1Image.png"

import nivel2Q2Image from "../images/nivel2Q2Image.png"

import nivel4Q1Image from "../images/nivel4Q1Image.png"
import nivel4Q3Image from "../images/nivel4Q3Image.png"


import nivel5Q1Image from "../images/nivel5Q1Image.png";

import nivel6Q1Image from "../images/nivel6Q1Image.png";
import nivel6Q3Image from "../images/nivel6Q3Image.png";



type niveis = {
numberQ: number, 
enunciado: string,
alternativas: any,
imagem?: string,
gabarito: string

}

export const Nivel1Terra : niveis[] = [
{
    numberQ: 1,
    enunciado: "Quаіѕ о nоmеѕ соrrеtоѕ dаѕ fаѕеѕ dа luа?",
    imagem: nivel1Q1Image,
    alternativas: [
      {
        id: 1,
        alter1: "Nоvа, сrеѕсеntе, vаzіа е mínguа",
      },
      {
        id: 2,
        alter2: "Nоvа, сrеѕсеntе, сhеіа е mínguа.",
      },
      {
        id: 3,
        alter3: "Vеlhа, nаѕсеntе,сhеіа е mіnguаntе.",
      },
      {
        id: 4,
        alter4: "Nоvа, сrеѕсеntе, сhеіа е mіnguаntе.",
      },
    ],
    gabarito: "4"

},
{
    numberQ: 2,
    enunciado: "O Sistema Solar possui quantos planetas oficialmente?",
    alternativas: [
      {
        id: 1,
        alter1: "9",
      },
      {
        id: 2,
        alter2: "7",
      },
      {
        id: 3,
        alter3: "8",
      },
      {
        id: 4,
        alter4: "6",
      },
    ],
    gabarito: "3"

},
{
    numberQ: 3,
    enunciado: "Quаіѕ ѕãо оѕ рlаnеtаѕ quе роѕѕuеm аnéіѕ?",
    alternativas: [
      {
        id: 1,
        alter1: "Ѕаturnо е Nеtunо.",
      },
      {
        id: 2,
        alter2: "Теrrа, Маrtе е Nеtunо.",
      },
      {
        id: 3,
        alter3: "Јúріtеr, Ѕаturnо, Urаnо е Nеtunо.",
      },
      {
        id: 4,
        alter4: "Теrrа, Маrtе, Ѕаturnо е Urаnо",
      },
    ],
    gabarito: "3",
  },
  {
    numberQ: 4,
    enunciado: "Quem é responsável pela formação das marés?",
    alternativas: [
      {
        id: 1,
        alter1: "O vento.",
      },
      {
        id: 2,
        alter2: "A chuva",
      },
      {
        id: 3,
        alter3: "A lua",
      },
      {
        id: 4,
        alter4: "A camada de ozônio",
      },
    ],
    gabarito: "3",
  },
  {
    numberQ: 5,
    enunciado: "Quаіѕ ѕãо оѕ рlаnеtаѕ dо Ѕіѕtеmа Ѕоlаr?",
    alternativas: [
      {
        id: 1,
        alter1: "Меrсúrіо, Vênuѕ, Рlutãо, Маrtе, Ѕаturnо, Nеtunо, Urаnо, Јúріtеr.",
      },
      {
        id: 2,
        alter2: "Меrсúrіо, Vênuѕ, Теrrа, Маrtе, Ѕаturnо, Nеtunо.",
      },
      {
        id: 3,
        alter3: "Меrсúrіо, Vênuѕ, Рlutãо, Маrtе, Ѕаurnо, Nеtunо, Urаnо.",
      },
      {
        id: 4,
        alter4: "Меrсúrіо, Vênuѕ, Маrtе, Ѕаturnо, Nеtunо, Urаnо, Јúріtеr, Теrrа.",
      },
    ],
    gabarito: "4",
  },
]





export const Nivel2Marte = [
  {
    numberQ: 1,
    enunciado: "Por que a Terra é azul?",
    alternativas: [
      { id: 1, alter1: "Reflete o Sol" },
      { id: 2, alter2: "Reflete a Lua" },
      { id: 3, alter3: "Por causa do gás Ozônio" },
      { id: 4, alter4: "Reflete o céu" },
    ],
    gabarito: "3",
  },
  {
    numberQ: 2,
    enunciado: "Qual o menor planeta do Sistema Solar?",
    imagem: nivel2Q2Image,
    alternativas: [
      { id: 1, alter1: "Terra" },
      { id: 2, alter2: "Vênus" },
      { id: 3, alter3: "Netuno" },
      { id: 4, alter4: "Plutão" },
    ],
    gabarito: "4",
  },
  {
    numberQ: 3,
    enunciado: "Como se chama um aglomerado de estrelas?",
    alternativas: [
      { id: 1, alter1: "Sistema Solar" },
      { id: 2, alter2: "Buraco negro" },
      { id: 3, alter3: "Planetoide" },
      { id: 4, alter4: "Constelação" },
    ],
    gabarito: "4",
  },
  {
    numberQ: 4,
    enunciado: "De fato, o que é uma estrela cadente?",
    alternativas: [
      { id: 1, alter1: "Meteorito" },
      { id: 2, alter2: "Estrela anã" },
      { id: 3, alter3: "Poeira cósmica" },
      { id: 4, alter4: "Estrela colorida" },
    ],
    gabarito: "1",
  },
  {
    numberQ: 5,
    enunciado: "Qual foi o ano que o homem pisou na Lua pela primeira vez?",
    alternativas: [
      { id: 1, alter1: "1969" },
      { id: 2, alter2: "1964" },
      { id: 3, alter3: "1912" },
      { id: 4, alter4: "1976" },
    ],
    gabarito: "1",
  },
];





    export const Nivel3Jupiter : niveis[] = [
      {
        numberQ: 1,
        enunciado: 'Qual planeta do nosso Sistema Solar é conhecido como a "Estrela d\'Alva"?',
        alternativas: [
          { id: 1, alter1: 'Vênus' },
          { id: 2, alter2: 'Mercúrio' },
          { id: 3, alter3: 'Urano' },
          { id: 4, alter4: 'Saturno' },
        ],
        gabarito: '1',
      },
      {
        numberQ: 2,
        enunciado: 'Qual o planetóide mais próximo do planeta Terra?',
        alternativas: [
          { id: 1, alter1: 'Plutão' },
          { id: 2, alter2: 'Sedna' },
          { id: 3, alter3: 'Hauméia' },
          { id: 4, alter4: 'Ceres' },
        ],
        gabarito: '4',
      },
      {
        numberQ: 3,
        enunciado: 'As estrelas mais quentes do universo têm a coloração...',
        alternativas: [
          { id: 1, alter1: 'Azul' },
          { id: 2, alter2: 'Branca' },
          { id: 3, alter3: 'Laranjada' },
          { id: 4, alter4: 'Vermelha' },
        ],
        gabarito: '1',
      },
      {
        numberQ: 4,
        enunciado: 'Qual o satélite natural da Terra?',
        alternativas: [
          { id: 1, alter1: 'Sol' },
          { id: 2, alter2: 'Anéis' },
          { id: 3, alter3: 'Estrela' },
          { id: 4, alter4: 'Lua' },
        ],
        gabarito: '4',
      },
      {
        numberQ: 5,
        enunciado: 'Como é chamado o corpo celeste, decorrente de uma explosão de uma supernova, com um intenso campo magnético?',
        alternativas: [
          { id: 1, alter1: 'Estrela de Nêutrons' },
          { id: 2, alter2: 'Magnetar' },
          { id: 3, alter3: 'Anã Branca' },
          { id: 4, alter4: 'Buraco Negro' },
        ],
        gabarito: '2',
      },
    ];
    


        export const Nivel4Saturno : niveis[] = [
          {
            numberQ: 1,
            enunciado: 'O movimento terrestre que a Terra realiza em torno do Sol e que dura aproximadamente um ano civil é chamado de',
            imagem: nivel4Q1Image,
            alternativas: [
              { id: 1, alter1: 'transição' },
              { id: 2, alter2: 'precessão' },
              { id: 3, alter3: 'rotação' },
              { id: 4, alter4: 'translação' },
            ],
            gabarito: '4',
          },
          {
            numberQ: 2,
            enunciado: 'A Terra realiza diversas movimentações, assim como vários outros astros do Sistema Solar. O movimento de rotação provoca, por exemplo, a',
            alternativas: [
              { id: 1, alter1: 'atuação dos terremotos' },
              { id: 2, alter2: 'movimentação das marés' },
              { id: 3, alter3: 'sucessão entre dias e noites' },
              { id: 4, alter4: 'composição litosférica' },
            ],
            gabarito: '3',
          },
          {
            numberQ: 3,
            enunciado: 'A Terra é um planeta constituído por diversas rochas, sendo dividido em três grandes camadas internas, conforme suas características constitutivas. As camadas internas terrestres são:',
            imagem: nivel4Q3Image,
            alternativas: [
              { id: 1, alter1: 'litosfera, manto e núcleo' },
              { id: 2, alter2: 'subsolo, litosfera e núcleo' },
              { id: 3, alter3: 'biosfera, hidrosfera e manto' },
              { id: 4, alter4: 'manto, núcleo e subsolo' },
            ],
            gabarito: '1',
          },
          {
            numberQ: 4,
            enunciado: 'Leia o período abaixo: O planeta __________ é conhecido pelos seus anéis, grandes estruturas cósmicas, formadas por fragmentos de gelo e rocha. Qual o nome do planeta que completa corretamente a frase acima?',
            alternativas: [
              { id: 1, alter1: 'Saturno' },
              { id: 2, alter2: 'Marte' },
              { id: 3, alter3: 'Vênus' },
              { id: 4, alter4: 'Mercúrio' },
            ],
            gabarito: '1',
          },
          {
            numberQ: 5,
            enunciado: 'Os planetas mais próximos do Sol apresentam uma constituição formada por diversas rochas e minerais. Portanto, são chamados de planetas rochosos:',
            alternativas: [
              { id: 1, alter1: 'Mercúrio, Vênus, Urano e Marte' },
              { id: 2, alter2: 'Mercúrio, Vênus, Saturno e Terra' },
              { id: 3, alter3: 'Mercúrio, Vênus, Terra e Marte' },
              { id: 4, alter4: 'Mercúrio, Vênus, Júpiter e Marte' },
            ],
            gabarito: '3',
          },
        ];
        
            export const Nivel5Urano : niveis[] = [
              {
                numberQ: 1,
                enunciado: 'Certamente, há uma relação entre a distância do planeta ao Sol e o tempo que este leva para fazer o movimento de translação. Assim sendo, qual é o planeta que leva mais tempo para completar uma volta ao redor do Sol?',
                imagem: nivel5Q1Image,
                alternativas: [
                  { id: 1, alter1: 'Terra' },
                  { id: 2, alter2: 'Netuno' },
                  { id: 3, alter3: 'Júpiter' },
                  { id: 4, alter4: 'Mercúrio' },
                ],
                gabarito: '2',
              },
              {
                numberQ: 2,
                enunciado: 'A classificação de um corpo celeste em um planeta requer um conjunto de características definidas pelas reuniões da Assembleia Geral da União Astronômica Internacional, que ocorre periodicamente. Qual alternativa indica uma característica necessária para a definição de um planeta do Sistema Solar?',
                alternativas: [
                  { id: 1, alter1: 'Definição de uma órbita ao redor do Sol.' },
                  { id: 2, alter2: 'Existência de uma ou mais luas.' },
                  { id: 3, alter3: 'Iluminação interna e externa própria.' },
                  { id: 4, alter4: 'Composição terrestre de origem gasosa.' },
                ],
                gabarito: '4',
              },
              {
                numberQ: 3,
                enunciado: 'Além dos corpos celestes, que tipo de fenômenos a astronomia investiga?',
                alternativas: [
                  { id: 1, alter1: 'Fenômenos geológicos.' },
                  { id: 2, alter2: 'Fenômenos biológicos.' },
                  { id: 3, alter3: 'Fenômenos cósmicos.' },
                  { id: 4, alter4: 'Fenômenos terrestres.' },
                ],
                gabarito: '3',
              },
              {
                numberQ: 4,
                enunciado: 'Segundo a visão Heliocêntrica, é correto afirmar que',
                alternativas: [
                  { id: 1, alter1: 'a Terra gira ao redor da Lua.' },
                  { id: 2, alter2: 'o Sol gira ao redor da Terra.' },
                  { id: 3, alter3: 'a Lua gira ao redor do Sol.' },
                  { id: 4, alter4: 'todos os planetas giram ao redor do Sol.' },
                ],
                gabarito: '4',
              },
              {
                numberQ: 5,
                enunciado: 'Leia e responda. “Os nomes dos planetas são associados a deuses romanos: Júpiter, deus dos deuses; Marte, deus da guerra; Mercúrio, mensageiro dos deuses; Vênus, deusa do amor e da beleza; Saturno, pai de Júpiter, deus da agricultura; Urano, deus do céu e das estrelas, Netuno, deus do Mar e Plutão, deus do inferno.” Qual das afirmações a seguir melhor define os planetas?',
                alternativas: [
                  { id: 1, alter1: 'São astros com luz própria.' },
                  { id: 2, alter2: 'São astros que orbitam outros planetas.' },
                  { id: 3, alter3: 'São astros sem luz própria que orbitam estrelas.' },
                  { id: 4, alter4: 'São satélites naturais.' },
                ],
                gabarito: '3',
              },
            ];
            
                export const Nivel6Netuno : niveis[] = [
                  {
                    numberQ: 1,
                    enunciado: 'O nosso universo é formado por bilhões de galáxias, onde há muitas estrelas e girando em torno delas. Qual o nome da galáxia em que o Sistema Solar está inserido?',
                    imagem: nivel6Q1Image,
                    alternativas: [
                      { id: 1, alter1: 'Via Urbana.' },
                      { id: 2, alter2: 'Via Marte.' },
                      { id: 3, alter3: 'Via Láctea.' },
                      { id: 4, alter4: 'Via Solar.' },
                    ],
                    gabarito: '3',
                  },
                  {
                    numberQ: 2,
                    enunciado: 'Os planetas podem ser classificados em dois grupos: Os planetas rochosos que estão mais próximos do Sol e são constituídos, principalmente, por matéria sólida, e os planetas gasosos que são os mais afastados e possuem muito mais matéria gasosa do que sólida. O planeta abaixo que é um planeta gasoso é:',
                    alternativas: [
                      { id: 1, alter1: 'Mercúrio.' },
                      { id: 2, alter2: 'Saturno.' },
                      { id: 3, alter3: 'Marte.' },
                      { id: 4, alter4: 'Terra.' },
                    ],
                    gabarito: '2',
                  },
                  {
                    numberQ: 3,
                    enunciado: 'A origem do universo é um tema que gera muitas opiniões divergentes. Segundo as atuais teorias de formação do Universo, o Sol e os planetas foram formados juntos, depois de uma grande explosão, teoria conhecida como:',
                    imagem: nivel6Q3Image,
                    alternativas: [
                      { id: 1, alter1: 'Gravitação do Universo.' },
                      { id: 2, alter2: 'Big Bang.' },
                      { id: 3, alter3: 'Teoria da Evolução.' },
                      { id: 4, alter4: 'Teoria da Relatividade.' },
                    ],
                    gabarito: '2',
                  },
                  {
                    numberQ: 4,
                    enunciado: 'Qual a maior estrela já conhecida atualmente (2015)?',
                    alternativas: [
                      { id: 1, alter1: 'VY Canis Majoris' },
                      { id: 2, alter2: 'UY Scuti' },
                      { id: 3, alter3: 'Sol' },
                      { id: 4, alter4: 'Sirius' },
                    ],
                    gabarito: '2',
                  },
                  {
                    numberQ: 5,
                    enunciado: 'Complete: Em Urano e Netuno chove ___.',
                    alternativas: [
                      { id: 1, alter1: 'Diamantes' },
                      { id: 2, alter2: 'Água' },
                      { id: 3, alter3: 'Ácido' },
                      { id: 4, alter4: 'Lava' },
                    ],
                    gabarito: '1',
                  },
                ];
                