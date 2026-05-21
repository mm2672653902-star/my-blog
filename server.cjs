var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_adm_zip = __toESM(require("adm-zip"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var customArticles = [];
var SEEDED_ARTICLES = [
  {
    id: "seed-1",
    title: "\u9713\u8679\u534F\u8BAE\uFF1A\u6297\u91CF\u5B50\u7684\u7F51\u7EDC\u5BC6\u7801\u5B66\u5B9E\u8DF5\u4E0E\u5FAE\u5185\u6838\u63E1\u624B\u8BF4\u660E\u4E66",
    synopsis: "\u63A2\u8BA8\u4E3A\u62B5\u5FA1\u540E\u91CF\u5B50\u89E3\u5BC6\u67B6\u6784\u800C\u8BBE\u8BA1\u7684\u5B9E\u9A8C\u6027\u7F51\u7EDC\u63E1\u624B\u534F\u8BAE\uFF0C\u65E8\u5728\u4FDD\u969C\u5B9E\u65F6\u5206\u5E03\u5F0F\u8FB9\u7F18\u8282\u70B9\u9635\u5217\u7684\u5B89\u5168\u901A\u4FE1\u3002",
    content: `# \u9713\u8679\u534F\u8BAE\uFF1A\u6297\u91CF\u5B50\u7684\u7F51\u7EDC\u5BC6\u7801\u5B66\u5B9E\u8DF5\u4E0E\u5FAE\u5185\u6838\u63E1\u624B\u8BF4\u660E\u4E66

\u5728\u540E\u91CF\u5B50\u8BA1\u7B97\u65F6\u4EE3\uFF0C\u4F20\u7EDF\u7684\u5BC6\u7801\u5B66\u5047\u8BBE\u6B63\u4EE5\u60CA\u4EBA\u7684\u901F\u5EA6\u8870\u9000\uFF0C\u5B89\u5168\u7684\u5BA2\u6237\u7AEF\u5230\u8FB9\u7F18\uFF08Client-to-Edge\uFF09\u8DEF\u5F84\u5FC5\u987B\u8D70\u5411\u65B0\u7684\u53D8\u9769\u3002**\u9713\u8679\u534F\u8BAE\uFF08Neon Protocol\uFF09** \u662F\u4E00\u79CD\u4E13\u4E3A\u8D85\u4F4E\u5EF6\u8FDF\u79FB\u52A8\u7F51\u7EDC\u63E1\u624B\u800C\u8BBE\u8BA1\u7684\u540E\u91CF\u5B50\u4F20\u8F93\u6D41\u4FDD\u62A4\u534F\u8BAE\u3002

## RSA \u4E0E\u692D\u5706\u66F2\u7EBF\u52A0\u5BC6\u7684\u8870\u9000
\u4F20\u7EDF\u7684\u975E\u5BF9\u79F0\u5BC6\u94A5\u4EA4\u6362\uFF08\u4F8B\u5982 ECDH\uFF09\u8FC7\u5EA6\u4F9D\u8D56\u4E8E\u79BB\u6563\u5BF9\u6570\u7684\u6570\u5B66\u6C42\u89E3\u96BE\u5EA6\u3002\u7136\u800C\uFF0C\u4E00\u65E6\u8DB3\u591F\u89C4\u6A21\u7684\u91CF\u5B50\u8BA1\u7B97\u673A\u8FD0\u884C Shor \u7B97\u6CD5\uFF0C\u8FD9\u4E9B\u7ECF\u5178\u9632\u62A4\u6280\u672F\u5C06\u5728\u6781\u77ED\u65F6\u95F4\u5185\u5BA3\u544A\u5931\u6548\u3002\u4E92\u8054\u7F51\u9700\u8981\u4E00\u79CD\u80FD\u76F4\u63A5\u7F16\u8BD1\u5230\u6D4F\u89C8\u5668\u73B0\u4EE3 JS \u6A21\u5757\u6216\u9AD8\u6027\u80FD WebAssembly \u4E2D\u7684\u5148\u8FDB\u624B\u6BB5\uFF0C\u4E14\u5176\u8FD0\u884C\u80FD\u8017\u4E0E\u63E1\u624B\u65F6\u95F4\u4E0D\u53EF\u6298\u534A\u3002

## \u57FA\u4E8E\u683C\u5BC6\u7801\u5B66\u7684\u6DF7\u5408\u53CC\u5411\u63E1\u624B
\u9713\u8679\u534F\u8BAE\u878D\u5408\u4E86 **Kyber-768** \u540E\u91CF\u5B50\u7B97\u6CD5\u4E0E\u7ECF\u5178\u7684 Curve25519 \u66F2\u7EBF\u4F5C\u4E3A\u5907\u7528\u7B56\u7565\u3002\u5373\u4F7F\u5E95\u5C42\u7684\u6297\u91CF\u5B50\u7B97\u6CD5\u4EE3\u7801\u5728\u7F16\u8BD1\u4E2D\u906D\u9047\u6F0F\u6D1E\uFF0C\u94FE\u8DEF\u672C\u8EAB\u7684\u5B89\u5168\u5EA6\u4E5F\u7EDD\u975E\u6BD4\u7ECF\u5178 TLS \u5F31\u3002

\`\`\`
[\u79FB\u52A8\u5BA2\u6237\u7AEF]  ==== Kyber-758 + X25519 \u6DF7\u5408\u5BC6\u94A5\u534F\u5546 ====>>  [\u8FB9\u7F18\u63A5\u6536\u7AEF]
[\u79FB\u52A8\u5BA2\u6237\u7AEF]  <<==== \u7F51\u7EDC\u5BC6\u6587\u786E\u8BA4\u4E0E\u52A8\u6001 Session \u5206\u53D1 =====  [\u8FB9\u7F18\u63A5\u6536\u7AEF]
\`\`\`

### \u4E09\u9879\u6838\u5FC3\u5B9E\u73B0\u539F\u5219
1. **\u96F6\u5F80\u8FD4\u65F6\u5EF6\u91CD\u8FDE (0-RTT Resumption)**\uFF1A\u8FDE\u63A5 Session \u5BC6\u94A5\u91C7\u7528\u6BCF 600 \u79D2\u8F6E\u8F6C\u4E00\u6B21\u7684\u5C01\u5305\u4FDD\u62A4\u7ED3\u6784\u8FDB\u884C\u5F3A\u52A0\u5BC6\uFF0C\u786E\u4FDD\u65AD\u7F51\u91CD\u8FDE\u65E0\u591A\u4F59\u63E1\u624B\u3002
2. **\u6781\u7B80\u8D85\u8584\u516C\u94A5\u5305**\uFF1A\u516C\u94A5\u7684\u5927\u5C0F\u88AB\u6B7B\u63A7\u5236\u5728 1200 \u5B57\u8282\u4EE5\u4E0B\uFF0C\u4F7F\u5176\u80FD\u5B8C\u7F8E\u878D\u5165\u5728\u5355\u4E2A MTU \u63A7\u5236\u5E27\u5185\uFF0C\u5F7B\u5E95\u89E3\u51B3 TCP \u7C98\u5305\u548C\u788E\u7247\u5316\u95EE\u9898\u3002
3. **\u6781\u5F3A\u81EA\u4E3B\u5B89\u5168\u6C99\u76D2**\uFF1A\u89E3\u5BC6\u6A21\u5757\u5168\u90E8\u5728\u5FAE\u5185\u6838\u9694\u79BB\u7A7A\u95F4\u8FD0\u7B97\uFF0C\u4FDD\u62A4\u5185\u5B58\u6307\u7EB9\u4E0D\u88AB\u4E8C\u6B21\u622A\u83B7\u3002

## 5G \u79FB\u52A8\u7EC8\u7AEF\u5B9E\u6D4B\u8DD1\u5206\u6307\u6807
\u6211\u4EEC\u5728 5G \u7F51\u7EDC\u7684\u79FB\u52A8\u624B\u6301\u8BBE\u5907\u4E0A\u5BF9\u9713\u8679\u63E1\u624B\u534F\u8BAE\u8FDB\u884C\u4E86\u591A\u8F6E\u5BF9\u6BD4\u538B\u6D4B\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u6781\u4E3A\u559C\u4EBA\uFF1A
* **\u7ECF\u5178\u4F20\u7EDF TLS \u63E1\u624B\u6240\u9700\u65F6\u957F**\uFF1A\u5E73\u5747 42ms
* **\u9713\u8679\u534F\u8BAE\u6DF7\u5408\u63E1\u624B\u6240\u9700\u65F6\u957F**\uFF1A\u5E73\u5747 54ms
* **\u5FAE\u79D2\u7EA7\u89E3\u5BC6\u8FD0\u7B97\u6D88\u8017**\uFF1A\u5728 ARM \u65B0\u7248\u82AF\u7247\u4E0B\u5C0F\u6570\u503C\u5C0F\u4E8E 1.2ms

\u589E\u52A0\u7684 12ms \u534F\u5546\u6210\u672C\uFF0C\u5BF9\u4E8E\u89C4\u907F\u65E5\u540E\u7684\u8FFD\u6EAF\u6027\u89E3\u5BC6\u5A01\u80C1\uFF08Retrospective Decryption\uFF09\u6765\u8BF4\uFF0C\u662F\u4E00\u7B14\u56DE\u62A5\u7387\u65E0\u9650\u5927\u4E14\u4E0D\u53EF\u6216\u7F3A\u7684\u5B89\u5168\u8D26\u5355\u3002`,
    tags: ["\u5B89\u5168\u6C99\u7BB1", "\u6297\u91CF\u5B50\u5BC6\u7801", "\u8FB9\u7F18\u8BA1\u7B97"],
    author: "\u5C0F\u6BDB",
    date: "2026-05-18",
    readTime: "\u9605\u8BFB\u65F6\u957F: 4 \u5206\u949F"
  },
  {
    id: "seed-2",
    title: "\u795E\u7ECF\u5F62\u6001\u534F\u5904\u7406\u5668\uFF1A\u79FB\u52A8\u786C\u4EF6\u7684\u975E\u51AF\u8BFA\u4F9D\u66FC\u667A\u80FD\u9769\u65B0",
    synopsis: "\u6DF1\u5EA6\u89E3\u6784\u7AEF\u8FB9\u7F18\u4FA7\u795E\u7ECF\u5F62\u6001\u8BA1\u7B97\u82AF\u7247\u5982\u4F55\u6539\u53D8\u624B\u673A\u6027\u80FD\u683C\u5C40\uFF0C\u4ECE\u521A\u6027\u7684\u7ECF\u5178\u95E8\u9635\u5217\u6F14\u8FDB\u81F3\u8D85\u4F4E\u80FD\u8017\u7684\u4E8B\u4EF6\u89E6\u53D1\u7845\u6676\u5143\u3002",
    content: `# \u795E\u7ECF\u5F62\u6001\u534F\u5904\u7406\u5668\uFF1A\u79FB\u52A8\u786C\u4EF6\u7684\u975E\u51AF\u8BFA\u4F9D\u66FC\u667A\u80FD\u9769\u65B0

\u6211\u4EEC\u6B63\u89E6\u78B0\u5230\u7ECF\u5178\u7684\u51AF\xB7\u8BFA\u4F9D\u66FC\u8BA1\u7B97\u673A\u4F53\u7CFB\u5728\u79FB\u52A8\u8FB9\u7F18\u4FA7\uFF08Mobile-Edge\uFF09\u5B9E\u65F6\u63A8\u7406\u7684\u6781\u81F4\u74F6\u9888\u3002\u73B0\u4EE3\u624B\u673A\u88AB\u4E0D\u65AD\u585E\u6EE1\u5B9E\u65F6\u89C6\u9891\u6D41\u5206\u6790\u3001\u591A\u6D41\u964D\u566A\u548C\u4F20\u611F\u5668\u878D\u5408\u903B\u8F91\uFF0C\u8FD9\u5C31\u4F7F\u5F97\u53EA\u6709 5W \u529F\u8017\u4E0A\u9650\u7684\u624B\u673A\u5904\u7406\u5668\u65F6\u5E38\u5904\u4E8E\u8FC7\u70ED\u751A\u81F3\u6B7B\u9501\u7684\u5371\u9669\u8FB9\u7F18\u3002

\u9769\u547D\u7684\u7B54\u6848\u5728\u4E8E\uFF1A\u8FD0\u884C\u5728**\u795E\u7ECF\u5F62\u6001\u534F\u5904\u7406\u5668\uFF08Neuromorphic Co-Processor, NCP\uFF09**\u4E4B\u4E0A\u7684\u8109\u51B2\u65F6\u95F4\u4F9D\u8D56\u53EF\u5851\u6027\u7F51\u7EDC\u3002

## \u5E95\u5C42\u539F\u7406\uFF1A\u8109\u51B2\u795E\u7ECF\u7F51\u7EDC\uFF08SNN\uFF09
\u666E\u901A\u7684\u5904\u7406\u5668\u7845\u6676\u4F53\u65E0\u8BBA\u5728\u95F2\u7F6E\u8FD8\u662F\u6EE1\u8F7D\u65F6\u90FD\u4F1A\u5468\u671F\u6027\u5730\u9AD8\u9891\u8017\u7535\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u8109\u51B2\u795E\u7ECF\u7F51\u7EDC\u4EC5\u5728\u7279\u5B9A\u7684\u201C\u8109\u51B2\uFF08\u4E8B\u4EF6\uFF09\u201D\u5230\u6765\u65F6\u624D\u4F1A\u4EA7\u751F\u6781\u7EC6\u5FAE\u7684\u7269\u7406\u7535\u6D41\u6D9F\u6F2A\uFF1A

1. **\u8D85\u9AD8\u7A00\u758F\u5EA6**\uFF1A\u5728\u4EFB\u4F55\u7ED9\u5B9A\u7684\u5FAE\u79D2\u7CBE\u5EA6\u4E0A\uFF0C\u82AF\u7247\u4E0A\u8D85\u8FC7 95% \u7684\u7845\u6676\u5143\u90FD\u7EF4\u6301\u5728\u96F6\u529F\u8017\u7684\u60F0\u6027\u4F11\u7720\u72B6\u6001\u3002
2. **\u52A8\u6001\u4E8B\u4EF6\u9A71\u52A8**\uFF1A\u5F53\u4F20\u611F\u5668\u68C0\u6D4B\u5230\u4EBA\u8138\u89C6\u7EBF\u504F\u79FB\u3001\u6216\u8005\u73AF\u5883\u58F0\u6CE2\u51FA\u73B0\u7279\u5F81\u6CE2\u5F62\u65F6\uFF0C\u8109\u51B2\u624D\u4F1A\u88AB\u77AC\u95F4\u6FC0\u6D3B\uFF0C\u8FC5\u901F\u6267\u884C\u8FD0\u7B97\u3002
3. **\u5B8C\u5168\u672C\u5730\u81EA\u9002\u5E94**\uFF1A\u795E\u7ECF\u7F51\u7EDC\u6743\u503C\u80FD\u76F4\u63A5\u8FDB\u884C\u7EB3\u79D2\u7EA7\u7684\u81EA\u8C03\u6574\uFF0C\u65E0\u9700\u8FDE\u63A5\u5230\u4EFB\u4F55\u5916\u90E8\u4E91\u5E73\u53F0\u5373\u53EF\u9002\u5E94\u6301\u673A\u8005\u7684\u58F0\u97F3\u7279\u5F81\u3002

\`\`\`
\u5916\u90E8\u4F20\u611F\u5668\u8F93\u5165 ---> \u7269\u7406\u8109\u51B2\u7535\u4FE1\u53F7\u53D1\u751F\u5668 ---> \u795E\u7ECF\u5F62\u6001\u4E3B\u6838\u5FC3\u9635\u5217 ---> \u8BA4\u77E5\u51B3\u7B56\u54CD\u5E94 (Logit)
\`\`\`

## \u79FB\u52A8\u7AEF\u6838\u5FC3\u843D\u5730\u573A\u666F
* **\u4E0D\u5931\u771F\u7684\u5168\u65F6\u7A7A\u95F4\u9635\u5217\u964D\u566A**\uFF1A\u91C7\u7528 1/100 \u7684\u529F\u8017\u8FC7\u6EE4\u566A\u58F0\uFF0C\u5373\u4F7F\u8EAB\u5728\u6447\u6EDA\u4E50\u5E7F\u573A\uFF0C\u901A\u8BDD\u4E5F\u80FD\u7EAF\u6F88\u65E0\u963B\u3002
* **\u4F4E\u9759\u6001\u529F\u8017\u773C\u52A8\u80CC\u5149\u5FAE\u8C03**\uFF1A\u7CFB\u7EDF\u53EA\u70B9\u4EAE\u773C\u7403\u9AD8\u7CBE\u5BF9\u7126\u7684\u89C6\u7F51\u819C\u6838\u5FC3\u533A\u80CC\u5149\uFF0C\u89C6\u7EBF\u5916\u4E00\u5F8B\u4F4E\u9891\u6E32\u67D3\uFF0C\u6210\u500D\u5EF6\u957F OLED \u7EED\u822A\u3002
* **\u9AD8\u9636\u610F\u56FE\u9884\u5224\u8F93\u5165\u6CD5**\uFF1A\u5168\u5929\u5019\u7ED3\u5408\u624B\u673A\u91CD\u529B\u611F\u5E94\u3001\u6ED1\u52A8\u66F2\u901F\u5206\u6790\u7528\u6237\u610F\u56FE\uFF0C\u8BA9\u81EA\u52A8\u8865\u5168\u4EFF\u4F5B\u77E5\u97F3\u4E34\u4E16\u3002

## \u79D1\u6280\u524D\u77BB
\u5728\u4E0D\u4E45\u7684\u660E\u5929\uFF0C\u5185\u7F6E 3.5W \u7684\u5FAE\u8109\u51B2\u534F\u5904\u7406\u5668\u5C06\u6210\u4E3A\u548C GPU \u4E00\u6A21\u4E00\u6837\u7684\u624B\u673A\u6807\u914D\u3002\u5E94\u7528\u67B6\u6784\u5C06\u9010\u6B65\u7531\u7E41\u7F1B\u7684\u4EE3\u7801\u4EA4\u4E92\u903B\u8F91\uFF0C\u5411\u5728\u6C89\u9ED8\u4E2D\u89C2\u5BDF\u3001\u5728\u6781\u4F4E\u8017\u80FD\u4E0B\u601D\u8003\u3001\u5728\u5408\u9002\u65F6\u673A\u5524\u9192\u7684\u201C\u61C2\u4F60\u7684\u667A\u80FD\u751F\u547D\u4F53\u201D\u6F14\u53D8\u3002`,
    tags: ["\u786C\u6838\u62C6\u89E3", "\u8FB9\u7F18AI", "\u5F02\u6784\u8BA1\u7B97"],
    author: "\u5C0F\u6BDB",
    date: "2026-05-12",
    readTime: "\u9605\u8BFB\u65F6\u957F: 5 \u5206\u949F"
  },
  {
    id: "seed-3",
    title: "\u5408\u6210\u73AF\u5883\u5171\u611F\uFF1A\u4EE3\u7801\u827A\u672F\u4E0E\u5B9E\u65F6\u7740\u8272\u5668\u6570\u5B66\u7F8E\u5B66",
    synopsis: "\u6253\u7834\u6B7B\u677F\u529F\u80FD\u6027\u7CFB\u7EDF\u7684\u5B9A\u52BF\u601D\u7EF4\uFF0C\u5229\u7528\u5B9E\u65F6\u7247\u6BB5\u7740\u8272\u5668\u4E0E\u4F4E\u9891\u73AF\u7ED5\u58F0\u97F3\u9891\u7387\u6784\u5EFA\u6781\u5177\u4EEA\u5F0F\u611F\u4E0E\u611F\u5B98\u5F20\u529B\u7684\u524D\u7AEF\u7F8E\u5B66\u4F53\u7CFB\u3002",
    content: `# \u5408\u6210\u73AF\u5883\u5171\u611F\uFF1A\u4EE3\u7801\u827A\u672F\u4E0E\u5B9E\u65F6\u7740\u8272\u5668\u6570\u5B66\u7F8E\u5B66

\u4EE3\u7801\u771F\u7684\u53EA\u80FD\u4E3A\u4E86\u201C\u4E1A\u52A1\u903B\u8F91\u201D\u548C\u201C\u7528\u6237\u62A5\u8868\u201D\u670D\u52A1\u5417\uFF1F\u524D\u6CBF\u56FE\u5F62\u7740\u8272\u5668\uFF08Shader\uFF09\u5F00\u53D1\u8005\u4E0E\u7B97\u6CD5\u97F3\u4E50\u4EBA\u7ED9\u51FA\u4E86\u76F8\u53CD\u7684\u65AD\u8A00\uFF1A\u6570\u5B66\u662F\u5B87\u5B99\u4E2D\u6700\u5177\u7A7F\u900F\u529B\u7684\u827A\u672F\u753B\u7B14\u3002

\u5C06 WebGL Fragment Shader \u4E0E Web Audio API \u4F4E\u9891\u9707\u8361\u5668\u7CC5\u5408\u5728\u4E00\u8D77\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u539F\u672C\u65E0\u8DA3\u7684\u6587\u672C\u5BB9\u5668\u6253\u9020\u6210\u4E00\u4E2A\u771F\u6B63\u80FD\u611F\u77E5\u4F60\u7684\u70B9\u51FB\u3001\u6ED1\u52A8\u901F\u7387\u3001\u751A\u81F3\u5F53\u4E0B\u7269\u7406\u65F6\u95F4\u957F\u6CB3\u7684\u201C\u827A\u672F\u81EA\u751F\u547D\u4F53\u201D\u3002

## Fragment Shader\uFF1A\u4EE5\u6570\u5B66\u91CD\u65B0\u5B9A\u4E49\u50CF\u7D20
\u5728\u4F20\u7EDF\u4E1A\u52A1\u6392\u7248\u4E2D\uFF0C\u4E00\u4E2A\u5361\u7247\u65E0\u975E\u662F \`border\` \u4E0E \`background\`\u3002\u4F46\u5728\u7F8E\u5B66\u81F3\u4E0A\u7684\u524D\u7AEF\u8BBE\u8BA1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u628A\u5176\u66FF\u6362\u6210\u4E00\u4E2A\u65F6\u523B\u6355\u83B7 GPU \u5E27\u7387\u7684 \`<canvas>\` \u5BB9\u5668\u3002\u753B\u5E03\u4E0A\u7684\u4EFB\u4F55\u50CF\u7D20\u5728\u6B64\u5904\u90FD\u662F\u5411\u91CF\u5750\u6807\u7684\u4E00\u6B21\u504F\u5FAE\u5206\u6C42\u548C\uFF1A

\`\`\`glsl
// \u7CBE\u7B80\u661F\u7A7A\u661F\u4E91\u566A\u58F0\u6A21\u62DF\u7B97\u6CD5
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord/iResolution.xy - 0.5;
    float d = length(uv) * exp(-length(uv));
    vec3 col = vec3(0.05, 0.15, 0.25) / d;
    fragColor = vec4(col, 1.0);
}
\`\`\`

\u8FD9\u4E2A\u6781\u81F4\u7B80\u7EC3\u7684\u6570\u5B66\u65B9\u7A0B\u4E0D\u9700\u8981\u4EFB\u4F55\u8017\u6D41\u91CF\u7684\u80CC\u666F\u5927\u56FE\uFF0C\u5C31\u80FD\u5728\u5168\u5E73\u53F0\u4E0A\u8DD1\u51FA\u6D41\u7545\u7684\u3001\u5E26\u6709\u7A7A\u7075\u661F\u73AF\u6D41\u52A8\u8D28\u611F\u7684\u4EA4\u4E92\u6D41\u4F53\u80CC\u666F\u3002

## \u5EFA\u7ACB\u89E6\u89C9\u5171\u9E23\u7684\u58F0\u97F3\u8282\u70B9
\u4E3A\u4E86\u914D\u5408\u89C6\u89C9\u4E0A\u7684\u547C\u5438\u6D41\u52A8\uFF0C\u5F53\u624B\u6307\u5212\u8FC7\u535A\u6587\u5217\u8868\u65F6\uFF0C\u5FAE\u578B\u5408\u6210\u5668\u4F1A\u5728\u540E\u65B9\u53D1\u8D77\u6781\u5176\u8F7B\u67D4\u7684\u4F4E\u97F3\u6ED1\u97F3\uFF0C\u5E76\u4F34\u6709\u4EFF\u7167\u9ED1\u80F6\u5531\u7247\u7206\u97F3\u7684\u9AD8\u96C5\u5FAE\u89E6\u7269\u7406\u53CD\u9988\u97F3\uFF1A
* **\u9F20\u6807\u6ED1\u8FC7\u6807\u9898**\uFF1A\u89E6\u53D1 440Hz \u77ED\u4FC3\u5E73\u6ED1\u97F3\u8C03\uFF1B
* **\u4E0B\u6ED1\u6EDA\u52A8\u9875\u9762**\uFF1A\u80CC\u666F\u7684\u4E3B\u5408\u6210\u5668\u57FA\u97F3\u4F1A\u6309\u6EDA\u52A8\u901F\u5EA6\u5728 Eb \u548C G5 \u4E4B\u95F4\u505A\u51FA\u5FAE\u5999\u5F8B\u52A8\u3002

\u8BA9\u4EE3\u7801\u4E0E\u611F\u89C9\u5408\u4E8C\u4E3A\u4E00\uFF0C\u8BA9\u4E92\u8054\u7F51\u7684\u6781\u7B80\u51B7\u9177\u591A\u4E00\u4E9B\u6E29\u5EA6\u3002`,
    tags: ["\u521B\u610F\u7F8E\u672F", "WebGL", "\u6570\u5B66\u6781\u5BA2"],
    author: "\u5C0F\u6BDB",
    date: "2026-04-29",
    readTime: "\u9605\u8BFB\u65F6\u957F: 3 \u5206\u949F"
  }
];
app.get("/api/articles", (req, res) => {
  res.json({
    status: "ok",
    articles: [...SEEDED_ARTICLES, ...customArticles]
  });
});
app.post("/api/articles", (req, res) => {
  const { title, synopsis, content, tags, author } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }
  const newArticle = {
    id: `custom-${Date.now()}`,
    title,
    synopsis: synopsis || content.slice(0, 150) + "...",
    content,
    tags: tags || ["General"],
    author: author || "Guest Author",
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    readTime: `${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min read`
  };
  customArticles.unshift(newArticle);
  res.status(201).json({ status: "ok", article: newArticle });
});
app.delete("/api/articles/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = customArticles.length;
  customArticles = customArticles.filter((item) => item.id !== id);
  if (customArticles.length === initialLength && id.startsWith("seed")) {
    return res.status(403).json({ error: "System seed articles cannot be deleted." });
  }
  res.json({ status: "ok", deletedId: id });
});
app.get("/api/download-zip", (req, res) => {
  try {
    let addDirectoryToZip = function(localDirPath, zipDirPath) {
      if (!import_fs.default.existsSync(localDirPath)) return;
      const items = import_fs.default.readdirSync(localDirPath);
      for (const item of items) {
        if (item === "node_modules" || item === "dist" || item === ".git" || item === "server.js" || item === "server.cjs" || item === ".env" || item === ".env.local" || item === "yarn.lock" || item === "package-lock.json") {
          continue;
        }
        const fullPath = import_path.default.join(localDirPath, item);
        const relativeZipPath = zipDirPath ? import_path.default.join(zipDirPath, item) : item;
        const stat = import_fs.default.statSync(fullPath);
        if (stat.isDirectory()) {
          addDirectoryToZip(fullPath, relativeZipPath);
        } else {
          zip.addFile(relativeZipPath, import_fs.default.readFileSync(fullPath));
        }
      }
    };
    const zip = new import_adm_zip.default();
    addDirectoryToZip(process.cwd(), "");
    const buffer = zip.toBuffer();
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=xiaomao-geek-blog-src.zip");
    res.send(buffer);
  } catch (err) {
    console.error("ZIP Generation failed:", err);
    res.status(500).json({ error: "\u65E0\u6CD5\u5728\u670D\u52A1\u7AEF\u5408\u6210 ZIP \u5305: " + err.message });
  }
});
app.post("/api/ai/copilot", async (req, res) => {
  const { command, title, synopsis, content, currentText } = req.body;
  if (!process.env.GEMINI_API_KEY) {
    return res.json({
      status: "mock",
      text: `[AI \u667A\u80FD\u5199\u4F5C\u52A9\u624B: \u8BF7\u5728\u300C\u8BBE\u7F6E (Settings) > \u5BC6\u94A5\u7BA1\u7406 (Secrets)\u300D\u4E2D\u6DFB\u52A0\u60A8\u7684 GEMINI_API_KEY \u4EE5\u5F00\u542F\u5B9E\u65F6\u795E\u7ECF\u7F51\u7EDC\u751F\u6210\uFF01]

\u9488\u5BF9\u300C${title || "\u65E0\u6807\u9898\u8349\u7A3F"}\u300D\u7684\u667A\u80FD\u5185\u5BB9\u884D\u751F\uFF1A\u76EE\u524D\u68C0\u6D4B\u5230\u73AF\u5883\u5BC6\u94A5\u5C1A\u672A\u52A0\u8F7D\u3002\u4E00\u65E6\u60A8\u5B8C\u6210\u4E00\u952E\u90E8\u7F72\u6216\u6DFB\u52A0\u60A8\u7684\u5BC6\u94A5\uFF0C\u5373\u53EF\u89E3\u9501\u6700\u9AD8\u6548\u6700\u5BCC\u79D1\u6280\u611F\u7684 Gemini \u795E\u7ECF\u5199\u4F5C\u5171\u521B\u4F53\u9A8C\u3002`
    });
  }
  try {
    const ai = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    let prompt = "";
    if (command === "expand") {
      prompt = `You are a high-tech personal blog assistant. Expand on this draft article to write the next paragraph. Keep a futuristic, cyberpunk, clear, and highly modern technical tone.
Title: "${title || "Untitled"}"
Synopsis: "${synopsis || ""}"
Current body:
"""
${content || currentText || ""}
"""

Please write the next professional paragraph (do not output formatting instructions, only output the direct paragraph text):`;
    } else if (command === "summarize") {
      prompt = `Formulate a concise, high-impact introductory synopsis (1 or 2 lines) summarizing this article. Accentuate the technical importance and futurism.
Title: "${title || "Untitled"}"
Full Content:
"""
${content || ""}
"""

Synopsis (direct output only, no intro notes):`;
    } else if (command === "tags") {
      prompt = `Recommend 3 or 4 relevant technical tag terms (single words, capitalized, e.g. "Security", "AI", "Frontend", "Decentralized") for this blog entry. Return them as a comma-separated list.
Title: "${title || "Untitled"}"
Content snapshot:
"""
${content ? content.slice(0, 1e3) : "Personal technical thoughts."}
"""

Tags (Return list separated by commas only, no brackets or quotes):`;
    } else if (command === "polish") {
      prompt = `Proofread, polish grammar, and upgrade this text's tone into a highly stylish, premium, slightly dark-tech or tech-chic technical writing output. Clean up any loose punctuation.
Original text:
"""
${currentText || content || "My coding projects have been going well."}
"""

Polished tech text (direct refined text output only):`;
    } else {
      prompt = `Generate a creative blog draft outline about a highly technical sci-fi modern theme based on prompt words: "${currentText || "cyberpunk web coding"}". Include an engaging header, simple structure, and placeholder paragraphs in Markdown.`;
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.75
      }
    });
    res.json({
      status: "ok",
      text: response.text || ""
    });
  } catch (error) {
    console.error("Gemini Copilot Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with Gemini." });
  }
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Blog Server] running at http://0.0.0.0:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
