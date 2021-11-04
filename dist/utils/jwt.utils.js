"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const privateKey = config_1.default.jwtPrivateKey;
function sign(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, options);
}
exports.sign = sign;
function decode(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, privateKey);
        return { valid: true, expired: false, decoded };
    }
    catch (error) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null,
        };
    }
}
exports.decode = decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2p3dC51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBK0I7QUFDL0IsdURBQStCO0FBRS9CLE1BQU0sVUFBVSxHQUFHLGdCQUFNLENBQUMsYUFBdUIsQ0FBQztBQUVsRCxTQUFnQixJQUFJLENBQUMsTUFBYyxFQUFFLE9BQXFDO0lBQ3hFLE9BQU8sc0JBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsb0JBRUM7QUFFRCxTQUFnQixNQUFNLENBQUMsS0FBYTtJQUNsQyxJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7S0FDakQ7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxhQUFhO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQVhELHdCQVdDIn0=