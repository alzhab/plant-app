import {createContext} from 'react';

export enum Colors {
  PRIMARY = 'PRIMARY',
  PRIMARY_SECOND = 'PRIMARY_SECOND',
  PRIMARY_THIRD= 'PRIMARY_THIRD',
  FONT = 'FONT',
  FONT_SECOND = 'FONT_SECOND',
  FONT_THIRD = 'FONT_THIRD',
  MAIN_BG = 'MAIN_BG',
  SECOND_BG = 'SECOND_BG',
  PLACEHOLDER = 'PLACEHOLDER',
  ERROR = 'ERROR',
  INACTIVE = 'INACTIVE',
  NOTIFICATION = 'NOTIFICATION',
  BLUE = 'BLUE',
  LIGHTBLUE = 'LIGHTBLUE',
  DARKBLUE = 'DARKBLUE',
  PURPLE = 'PURPLE',
  YELLOW = 'YELLOW',
  BORDER = 'BORDER',
  THIRD_BG = 'THIRD_BG'
}

export interface ColorsIN {
  PRIMARY: string,
  PRIMARY_SECOND: string,
  PRIMARY_THIRD: string,
  FONT: string,
  FONT_SECOND: string,
  FONT_THIRD: string,
  MAIN_BG: string,
  SECOND_BG: string,
  PLACEHOLDER: string,
  ERROR: string,
  INACTIVE: string,
  NOTIFICATION: string,
  BLUE: string,
  LIGHTBLUE: string,
  DARKBLUE: string,
  PURPLE: string,
  YELLOW: string,
  BORDER: string;
  THIRD_BG: string
}

export interface ChangeColorsIN {
  PRIMARY?: string,
  PRIMARY_SECOND?: string,
  PRIMARY_THIRD?: string,
  FONT?: string,
  FONT_SECOND?: string,
  FONT_THIRD?: string,
  MAIN_BG?: string,
  SECOND_BG?: string,
  PLACEHOLDER?: string,
  ERROR?: string,
  INACTIVE?: string,
  NOTIFICATION?: string,
  BLUE?: string;
  LIGHTBLUE?: string;
  DARKBLUE?: string;
  PuRPLE?: string;
  YELLOW?: string;
  BORDER?: string;
  THIRD_BG?: string
}

export const defaultColors = {
	PRIMARY: '#3ED400',
	PRIMARY_SECOND: '#E0F2D8',
	PRIMARY_THIRD: '#66B821',
	FONT: '#0D1904',
	FONT_SECOND: '#848484',
	FONT_THIRD: '#FFFFFF',
	MAIN_BG: '#FBFBFB',
	SECOND_BG: '#FFFFFF',
	THIRD_BG: '#F1F1F1',
	PLACEHOLDER: '#B6BAB3',
	ERROR: '#c02815',
	INACTIVE: '#D2D8CF',
	NOTIFICATION: '#FF6724',
	BLUE: '#5483EF',
	LIGHTBLUE: '#ACDBFF',
	DARKBLUE: '#274B9F',
	PURPLE: '#291C84',
	YELLOW: '#FFDC30',
	BORDER: '#E5E5E5'
};

export const AppContext = createContext({
	colors: defaultColors,
	showIntro: false,
	changeColors: (colors: ChangeColorsIN) => {
		console.log(colors)
	},
	hideIntro: () => {
	  console.log('hide intro')
	},
});

export enum TextSize {
  small = 12,
  medium = 16,
  large = 18,
  xlarge = 20,
  extraLarge = 24,
}

export enum TextFamily {
  REGULAR = 'Muli-Regular',
  BOLD = 'Muli-Bold',
  SEMIBOLD = 'Muli-SemiBold',
}

