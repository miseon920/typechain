
export function init(config){ //config 오브젝트를 받고 true를 리턴한다.
    return true;
}

export function exit(code){
    return code+1;
}

//타입스크립트에게 어떠한 자스파일과 모듈을 쓴다고 알려줘야하기 때문
//예)노드모듈에서 설치된 자바스크립트 모듈을 어떻게 사용하는지 예시로 해본것(_back 파일)