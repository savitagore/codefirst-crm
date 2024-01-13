export class languageTopic{
    languageId: number;
    language: string;
    inLanguageTopics: []

    constructor(){
        this.languageId=0,
        this.language="",
        this.inLanguageTopics=[]
    }
  }

  export class topics{
    languageTopicId: number;
    languageId: number;
    topicName: string;
    orderNo: number

    constructor(){
        this.languageTopicId=0,
        this.languageId=0,
        this.topicName="",
        this.orderNo=0
    }
  }