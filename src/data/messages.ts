import { MessageItem, TrafficColor } from '../types.ts';

export const MESSAGES: MessageItem[] = [
  {
    id: 1,
    appType: 'WHATSAPP',
    sender: '+55 11 90000-4821',
    statusLine: 'NÃO ESTÁ NOS SEUS CONTATOS',
    bubbles: [
      {
        id: 1,
        fullText: 'OI MÃE, TUDO BEM? TROQUEI DE NÚMERO, O OUTRO CELULAR ESTRAGOU. SALVA ESSE! 😊',
        time: '14:20',
      },
      {
        id: 2,
        fullText: 'MÃE, PRECISO PAGAR UM BOLETO HOJE E O APP DO BANCO NÃO ABRE NO CELULAR NOVO. FAZ UM PIX PRA MIM? AMANHÃ TE DEVOLVO 🙏',
        time: '14:22',
      },
    ],
    correctAnswer: 'VERMELHO',
    classificationTitle: 'GOLPE DO PARENTE FALSO',
    cards: [
      {
        title: 'POR QUE É GOLPE',
        content: 'ALGUÉM FINGE SER SEU FILHO USANDO UM NÚMERO NOVO. A HISTÓRIA DO CELULAR ESTRAGADO EXPLICA O NÚMERO ESTRANHO.',
      },
      {
        title: 'AS PISTAS',
        content: 'O NÚMERO NÃO ESTÁ SALVO. PEDE PIX LOGO EM SEGUIDA. PRESSA: TEM QUE SER HOJE.',
      },
      {
        title: 'O QUE FAZER',
        content: 'NÃO FAÇA O PIX. LIGUE PARA O NÚMERO ANTIGO DO SEU FILHO. BLOQUEIE E DENUNCIE O NÚMERO.',
      },
    ],
  },
  {
    id: 2,
    appType: 'WHATSAPP',
    sender: 'ANA (FILHA)',
    statusLine: 'ONLINE',
    bubbles: [
      {
        id: 1,
        fullText: 'MÃE, CHEGO AÍ SÁBADO LÁ PELAS 3H DA TARDE.',
        time: '10:15',
      },
      {
        id: 2,
        fullText: 'QUER QUE EU LEVE PÃO?',
        time: '10:16',
      },
    ],
    correctAnswer: 'VERDE',
    classificationTitle: 'MENSAGEM SEGURA',
    cards: [
      {
        title: 'POR QUE PARECE SEGURA',
        content: 'O NÚMERO ESTÁ SALVO NOS CONTATOS. É UMA CONVERSA COMUM, DO DIA A DIA.',
      },
      {
        title: 'O QUE OBSERVAR',
        content: 'NÃO PEDE DINHEIRO, SENHA NEM CÓDIGO. NÃO TEM LINK. NÃO TEM PRESSA.',
      },
      {
        title: 'E SE A CONVERSA MUDAR?',
        content: 'SE VIRAR PEDIDO DE DINHEIRO, LIGUE PARA ELA ANTES DE QUALQUER COISA.',
      },
    ],
  },
  {
    id: 3,
    appType: 'SMS',
    sender: '29870',
    statusLine: 'MENSAGEM DE TEXTO (SMS)',
    bubbles: [
      {
        id: 1,
        fullText: 'BANCO SUL: COMPRA APROVADA DE R$ 3.489,90 EM ELETRO MAX. NÃO RECONHECE? LIGUE AGORA 0800 000 4321.',
        time: '09:41',
      },
    ],
    correctAnswer: 'VERMELHO',
    classificationTitle: 'GOLPE DA FALSA CENTRAL DO BANCO',
    cards: [
      {
        title: 'POR QUE É GOLPE',
        content: 'O NÚMERO PARA LIGAR ESTÁ SÓ NA MENSAGEM. ELE LEVA PARA A CENTRAL DOS GOLPISTAS, NÃO PARA O BANCO.',
      },
      {
        title: 'AS PISTAS',
        content: 'COMPRA ALTA QUE VOCÊ NÃO FEZ, PARA DAR SUSTO. PEDE PARA LIGAR AGORA.',
      },
      {
        title: 'O QUE FAZER',
        content: 'NÃO LIGUE PARA O NÚMERO DA MENSAGEM. LIGUE PARA O NÚMERO DO VERSO DO CARTÃO OU CONFIRA NO APLICATIVO DO BANCO.',
      },
    ],
  },
  {
    id: 4,
    appType: 'WHATSAPP',
    sender: 'PEDRO (NETO)',
    statusLine: 'ONLINE',
    bubbles: [
      {
        id: 1,
        fullText: 'VÓ, TÔ SEM DINHEIRO PRA PASSAGEM, ME EMPRESTA R$ 150? TE DEVOLVO SEXTA 🙏',
        time: '16:04',
      },
    ],
    correctAnswer: 'AMARELO',
    classificationTitle: 'PRECISO CONFIRMAR',
    cards: [
      {
        title: 'O QUE PARECE VERDADE',
        content: 'O NÚMERO É O DO NETO, SALVO NOS CONTATOS. O JEITO DE FALAR PARECE O DELE.',
      },
      {
        title: 'O QUE PREOCUPA',
        content: 'PEDE DINHEIRO POR MENSAGEM. O WHATSAPP DO NETO PODE TER SIDO INVADIDO.',
      },
      {
        title: 'O QUE FAZER',
        content: 'LIGUE PARA ELE POR LIGAÇÃO COMUM DE TELEFONE. NÃO CONFIRME PELO PRÓPRIO WHATSAPP. SÓ FAÇA O PIX DEPOIS DE FALAR COM ELE.',
      },
    ],
  },
  {
    id: 5,
    appType: 'WHATSAPP',
    sender: 'CENTRAL DE CRÉDITO ✔',
    statusLine: 'CONTA COMERCIAL',
    bubbles: [
      {
        id: 1,
        fullText: 'SR. ANTÔNIO, SEU EMPRÉSTIMO CONSIGNADO DE R$ 12.000,00 FOI APROVADO!',
        time: '11:10',
      },
      {
        id: 2,
        fullText: 'PARA LIBERAR AINDA HOJE, ME INFORME O CÓDIGO DE 6 NÚMEROS QUE CHEGOU POR SMS.',
        time: '11:11',
      },
    ],
    correctAnswer: 'VERMELHO',
    classificationTitle: 'GOLPE DO FALSO EMPRÉSTIMO CONSIGNADO',
    cards: [
      {
        title: 'POR QUE É GOLPE',
        content: 'NINGUÉM APROVA EMPRÉSTIMO E PEDE CÓDIGO POR MENSAGEM. O CÓDIGO SERVE PARA ENTRAR NO SEU WHATSAPP OU CONTRATAR EM SEU NOME.',
      },
      {
        title: 'AS PISTAS',
        content: 'EMPRÉSTIMO QUE VOCÊ NÃO PEDIU. PEDE O CÓDIGO DO SMS. O ✔ NO NOME NÃO PROVA NADA.',
      },
      {
        title: 'O QUE FAZER',
        content: 'NUNCA PASSE CÓDIGO PARA NINGUÉM. CONFIRA SEUS EMPRÉSTIMOS NO MEU INSS OU NO BANCO. BLOQUEIE E DENUNCIE O NÚMERO.',
      },
    ],
  },
  {
    id: 6,
    appType: 'SMS',
    sender: 'BANCO SUL',
    statusLine: 'MENSAGEM DE TEXTO (SMS)',
    bubbles: [
      {
        id: 1,
        fullText: 'BANCO SUL: SUA FATURA DE NOVEMBRO FECHA DIA 20. VALOR: R$ 312,40. CONSULTE NO APLICATIVO DO BANCO. NUNCA PEDIMOS SENHA POR MENSAGEM.',
        time: '15:30',
      },
    ],
    correctAnswer: 'VERDE',
    classificationTitle: 'MENSAGEM SEGURA',
    cards: [
      {
        title: 'POR QUE PARECE SEGURA',
        content: 'SÓ INFORMA, NÃO PEDE NADA. MANDA CONSULTAR NO APLICATIVO OFICIAL.',
      },
      {
        title: 'O QUE OBSERVAR',
        content: 'NÃO TEM LINK. NÃO TEM NÚMERO PARA LIGAR. NÃO TEM PRESSA.',
      },
      {
        title: 'O QUE FAZER',
        content: 'CONFIRA O VALOR NO APLICATIVO DO BANCO. NÃO RESPONDA A MENSAGEM.',
      },
    ],
  },
  {
    id: 7,
    appType: 'WHATSAPP',
    sender: 'DR. RICARDO LEMOS · ADVOGADO',
    statusLine: 'NÃO ESTÁ NOS SEUS CONTATOS',
    bubbles: [
      {
        id: 1,
        fullText: 'DONA MARIA, ÓTIMA NOTÍCIA! SUA AÇÃO FOI GANHA. A SENHORA TEM R$ 48 MIL PARA RECEBER.',
        time: '13:05',
      },
      {
        id: 2,
        fullText: 'MAS PRECISAMOS PAGAR R$ 1.200 DE CUSTAS HOJE PARA LIBERAR O ALVARÁ. A SENHORA FAZ O PIX AGORA?',
        time: '13:06',
      },
    ],
    correctAnswer: 'VERMELHO',
    classificationTitle: 'GOLPE DO FALSO ADVOGADO',
    cards: [
      {
        title: 'POR QUE É GOLPE',
        content: 'NINGUÉM PAGA PIX PARA RECEBER DINHEIRO DE UMA AÇÃO. GOLPISTAS DESCOBREM DADOS REAIS DO PROCESSO PARA PARECER VERDADE.',
      },
      {
        title: 'AS PISTAS',
        content: 'NÚMERO QUE NÃO ESTÁ SALVO. NOTÍCIA BOA DEMAIS, COM VALOR ALTO. COBRA R$ 1.200 AGORA.',
      },
      {
        title: 'O QUE FAZER',
        content: 'NÃO FAÇA O PIX. LIGUE PARA O SEU ADVOGADO NO NÚMERO QUE VOCÊ JÁ TEM. CONSULTE O PROCESSO NO SITE DO TRIBUNAL.',
      },
    ],
  },
  {
    id: 8,
    appType: 'SMS',
    sender: '28050',
    statusLine: 'MENSAGEM DE TEXTO (SMS)',
    bubbles: [
      {
        id: 1,
        prefixText: 'INSS: SEU BENEFICIO SERA BLOQUEADO HOJE. ATUALIZE SEUS DADOS EM: ',
        linkText: 'inss-atualiza.exemplo.com',
        time: '08:12',
      },
    ],
    correctAnswer: 'VERMELHO',
    classificationTitle: 'GOLPE DO FALSO AVISO DO INSS',
    cards: [
      {
        title: 'POR QUE É GOLPE',
        content: 'O INSS NÃO MANDA LINK POR SMS PEDINDO SEUS DADOS. O LINK LEVA PARA UM SITE FALSO QUE ROUBA INFORMAÇÕES.',
      },
      {
        title: 'AS PISTAS',
        content: 'O ENDEREÇO NÃO TERMINA EM gov.br. AMEAÇA: BENEFÍCIO BLOQUEADO. PRESSA: HOJE.',
      },
      {
        title: 'O QUE FAZER',
        content: 'NÃO CLIQUE NO LINK. CONSULTE PELO APLICATIVO MEU INSS OU PELO TELEFONE 135. APAGUE A MENSAGEM.',
      },
    ],
  },
];

export function checkAnswer(chosen: TrafficColor, actual: TrafficColor): boolean {
  return chosen === actual;
}

export function getColorLabel(color: TrafficColor): string {
  switch (color) {
    case 'VERDE':
      return 'SEGURO';
    case 'AMARELO':
      return 'PRECISO CONFIRMAR';
    case 'VERMELHO':
      return 'GOLPE';
  }
}
