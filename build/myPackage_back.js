"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.init = void 0;
function init(config) {
    return true;
}
exports.init = init;
function exit(code) {
    return code + 1;
}
exports.exit = exit;
//타입스크립트에게 어떠한 자스파일과 모듈을 쓴다고 알려줘야하기 때문
//예)노드모듈에서 설치된 자바스크립트 모듈을 어떻게 사용하는지 예시로 해본것(_back 파일)
