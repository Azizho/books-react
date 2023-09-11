export type SearchItemsType = {
	id: string;
	kind: string;
	etag: string;
	selfLink: string;
	saleInfo: {
		country: string;
		saleability: string;
		isEbook: boolean;
	};
	accessInfo: {
		country: string;
		viewability: string;
		embeddable: boolean;
		publicDomain: boolean;
		textToSpeechPermission: string;
		epub: {
			isAvailable: boolean;
		};
		pdf: {
			isAvailable: boolean;
		};
		webReaderLink: string;
		accessViewStatus: string;
		quoteSharingAllowed: boolean;
	};
	searchInfo: {
		textSnippet: string;
	};
	volumeInfo: {
		title: string;
		subtitle: string;
		industryIdentifiers: { type: string; identifier: string }[];
		authors: string[];
		publisher: string;
		publishedDate: string;
		description: string;
		imageLinks: {
			thumbnail: string;
			smallThumbnail: string;
		};
		canonicalVolumeLink: string;
		infoLink: string;
		previewLink: string;
		language: string;
		panelizationSummary: {
			containsEpubBubbles: boolean;
			containesImageBubbles: boolean;
		};
		contentVersion: string;
		allowAnonLogging: boolean;
		maturityRating: string;
		readingModes: {
			text: boolean;
			image: boolean;
		};
		pageCount: number;
		printType: string;
		categories: string[];
	};
};
export type SearchResultType = {
	kind: string;
	totalItems: number;
	items: SearchItemsType[];
};
