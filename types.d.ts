type WordData = Array<{
  word: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
      synonyms?: Array<string>;
      antonyms?: Array<string>;
    }>;
  }>;
  sourceUrls:Array<string>;
}>;

interface InitialState{
  fonts: string[];
  currentFont: string;
  onFontChange?:(font:string)=>void;
  wordData?:WordData 
  isLoading:boolean; 	// set to true while word data is being loaded from server.  Used for animation.  Only set to true while word data
  error:boolean;			// set if word data load failed.  Used for animation.  Only set to true if word data load failed.
  setWordData?:Dispatch<SetStateAction<WordData>>
  selectedFont?:string;
  setSelectedFont?:Dispatch<SetStateAction<string>>;		// set to true if the user selects a different font.  Used for
  setIsLoading?:Dispatch<SetStateAction<boolean>>
  setError?:Dispatch<SetStateAction<boolean>>
  // modifiedData:
}