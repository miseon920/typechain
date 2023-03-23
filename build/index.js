"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//블록체인 만들기
//블록이 사슬처럼 묶여있고 그안에 data가 있으며 서로 보호하고 있음, 연결고리 = hash
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data); //calculateHash가 static이라서 내부에서 new없이 Block으로 사용할수 있음
    }
    //static 함수는 클래스 안에서 사용하며 클래스 인스턴스가 없어도 부를 수 있음
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`; //해쉬값 만들기
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex"); //블럭의 데이터값 받기
    }
}
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    //이전 해쉬값을 불러올수 있는 함수 
    getPrevHash() {
        if (this.blocks.length === 0)
            return ""; //첫번째는 해쉬값이 없으므로 빈값 리턴
        return this.blocks[this.blocks.length - 1].hash;
    }
    //새로운 블럭을 추가할때 마다 블럭에 저장하고 싶은 데이터를 보내줘야함
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data); //새로운 블럭 생성
        this.blocks.push(newBlock);
    }
    //블럭에 접근하기
    getBlocks() {
        return this.blocks;
    }
}
//새로운 블럭체인 생성
const blockchain = new Blockchain();
blockchain.addBlock('1');
blockchain.addBlock('2');
blockchain.addBlock('3');
blockchain.addBlock('4');
blockchain.addBlock('5');
console.log(blockchain.getBlocks());
//https://github.com/DefinitelyTyped/DefinitelyTyped  = npm 에 대한 type 정리되어 있음 - npm i -D @types/node 설치
/**
 * npm i -D @types/패키지이름
 * npm i 패키지이름
 *
 * 위의 방식으로 설치 해야 타입스크립트가 그 패키지에 대한 타입을 알수 있었으나
 * 현재는 노드를 설치하면 자동으로 d.ts파일을 포함시키므로 따로 설치할 필요가 없음 *
 */
