//모듈선언 = 모듈파일임

interface Config{
    url: string;
}

declare module "myPackage"{
    function init(config: Config): boolean;
    function exit(config: number): number;
}



//타입스크립트에게 해당 자스파일의 타입을 알려주기 위해 만든것