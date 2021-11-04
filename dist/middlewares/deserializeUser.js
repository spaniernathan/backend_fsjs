"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const jwt_utils_1 = require("../utils/jwt.utils");
const session_service_1 = require("../services/session.service");
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = (0, lodash_1.get)(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
    const refreshToken = (0, lodash_1.get)(req, 'headers.x-refresh');
    if (!accessToken)
        return next();
    const { decoded, expired } = (0, jwt_utils_1.decode)(accessToken);
    if (decoded) {
        // @ts-ignore
        req.user = decoded;
        return next();
    }
    if (expired && refreshToken) {
        const newAccessToken = yield (0, session_service_1.reIssueAccessToken)({ refreshToken });
        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
            const { decoded: decodedNew } = (0, jwt_utils_1.decode)(newAccessToken);
            // @ts-ignore
            req.user = decodedNew;
        }
        return next();
    }
    return next();
});
exports.default = deserializeUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzZXJpYWxpemVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2Rlc2VyaWFsaXplVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE2QjtBQUU3QixrREFBNEM7QUFDNUMsaUVBQWlFO0FBRWpFLE1BQU0sZUFBZSxHQUFHLENBQ3RCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLElBQUEsWUFBRyxFQUFDLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQy9ELFdBQVcsRUFDWCxFQUFFLENBQ0gsQ0FBQztJQUNGLE1BQU0sWUFBWSxHQUFHLElBQUEsWUFBRyxFQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25ELElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUEsa0JBQU0sRUFBQyxXQUFXLENBQUMsQ0FBQztJQUVqRCxJQUFJLE9BQU8sRUFBRTtRQUNYLGFBQWE7UUFDYixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNuQixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLE9BQU8sSUFBSSxZQUFZLEVBQUU7UUFDM0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFBLG9DQUFrQixFQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLGNBQWMsRUFBRTtZQUNsQixHQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBQSxrQkFBTSxFQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZELGFBQWE7WUFDYixHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN2QjtRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFBLENBQUM7QUFFRixrQkFBZSxlQUFlLENBQUMifQ==