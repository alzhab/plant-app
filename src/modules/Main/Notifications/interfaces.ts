import {Colors} from '@styles/base';

export enum CardType {
  article = 'Article',
  plants = 'Plants',
  follow = 'Follow'
}

export enum CardTypeColor {
  Article = 'DARKBLUE',
  Plants = 'PRIMARY',
  Follow = 'PURPLE'
}

export interface NotText {
  text: string,
  bold?: boolean
}

export interface CardProps {
  type: CardType,
  text: NotText[],
  time: string
}
