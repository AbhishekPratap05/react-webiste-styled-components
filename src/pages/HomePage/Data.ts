export interface SiteDataInterface {
	lightBg: boolean;
	imgStart?: boolean;
	lightTopLine?: boolean;
	topLine?: string;
	lightText?: boolean;
	headline?: string;
	lightTextDesc?: boolean;
	description?: string;
	primary?: boolean;
	buttonLabel?: string;
	img: imgInterface;
}

interface imgInterface {
	url: any;
	start: boolean;
	alt: string;
}

export const siteData: SiteDataInterface[] = [
	{
		lightBg: false,
		imgStart: false,
		lightTopLine: true,
		topLine: 'What is Lorem Ipsum?',
		lightText: true,
		headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		lightTextDesc: true,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		primary: true,
		buttonLabel: 'Get Started',
		img: {
			alt: 'image',
			url: require('../../images/svg-1.svg'),
			start: false
		}
	},
	{
		lightBg: true,
		imgStart: true,
		lightTopLine: false,
		topLine: 'What is Lorem Ipsum?',
		lightText: false,
		headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		lightTextDesc: false,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		primary: false,
		buttonLabel: 'Get Started',
		img: {
			alt: 'image',
			url: require('../../images/bird.jpg'),
			start: true
		}
	},
	{
		lightBg: false,
		imgStart: false,
		lightTopLine: true,
		topLine: 'What is Lorem Ipsum?',
		lightText: true,
		headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		lightTextDesc: true,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		primary: true,
		buttonLabel: 'Get Started',
		img: {
			alt: 'image',
			url: require('../../images/svg-2.svg'),
			start: false
		}
	},
	{
		lightBg: true,
		imgStart: true,
		lightTopLine: false,
		topLine: 'What is Lorem Ipsum?',
		lightText: false,
		headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		lightTextDesc: false,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		primary: true,
		buttonLabel: 'Get Started',
		img: {
			alt: 'image',
			url: require('../../images/svg-3.svg'),
			start: true
		}
	}
];
