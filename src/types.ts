export type TrafficColor = 'VERDE' | 'AMARELO' | 'VERMELHO';

export interface CardInfo {
  title: string;
  content: string;
}

export interface MessageBubble {
  id: number;
  prefixText?: string;
  linkText?: string;
  suffixText?: string;
  fullText?: string;
  time?: string;
}

export interface MessageItem {
  id: number;
  appType: 'WHATSAPP' | 'SMS';
  sender: string;
  statusLine: string;
  bubbles: MessageBubble[];
  correctAnswer: TrafficColor;
  classificationTitle: string;
  cards: [CardInfo, CardInfo, CardInfo];
}
