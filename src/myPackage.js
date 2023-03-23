
//@ts-check  : 1.타입스크립트 파일에게 자바스크립의 파일을 검사하라는 의미

 //2.jsdoc 코멘트로 타입을 정의 하기만 하면됨

/**
 * Initializes the project 
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config){ //config 오브젝트를 받고 true를 리턴한다.
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */

export function exit(code){
    return code+1;
}

//타입스크립트에게 어떠한 자스파일과 모듈을 쓴다고 알려줘야하기 때문
//예)노드모듈에서 설치된 자바스크립트 모듈을 어떻게 사용하는지 예시로 해본것
/*
    https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
    자바스크립트 안에서 타입 정보를 제공
*/