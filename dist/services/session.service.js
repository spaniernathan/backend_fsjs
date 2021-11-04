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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidateSession = exports.reIssueAccessToken = exports.createRefreshToken = exports.createAccessToken = exports.createSession = void 0;
const crypto_1 = require("crypto");
const lodash_1 = require("lodash");
const config_1 = __importDefault(require("../config"));
const models_1 = require("../db/models");
const jwt_utils_1 = require("../utils/jwt.utils");
const createSession = (userUuid, userAgent) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Session.create({
        uuid: (0, crypto_1.randomUUID)(), userUuid, userAgent, valid: true,
    });
});
exports.createSession = createSession;
const createAccessToken = ({ user, session, }) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, jwt_utils_1.sign)({ user: (0, lodash_1.get)(user, 'dataValues'), session: (0, lodash_1.get)(session, 'dataValues') }, { expiresIn: config_1.default.accessTokenTtl });
});
exports.createAccessToken = createAccessToken;
const createRefreshToken = (session) => __awaiter(void 0, void 0, void 0, function* () { return (0, jwt_utils_1.sign)({ session: (0, lodash_1.get)(session, 'dataValues') }, { expiresIn: config_1.default.refreshTokenTtl }); });
exports.createRefreshToken = createRefreshToken;
const reIssueAccessToken = ({ refreshToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { decoded } = (0, jwt_utils_1.decode)(refreshToken);
    if (!decoded || !(0, lodash_1.get)(decoded, 'uuid'))
        return false;
    const session = yield models_1.Session.findOne({ where: { uuid: (0, lodash_1.get)(decoded, 'uuid') } });
    if (!session || !(session === null || session === void 0 ? void 0 : session.valid))
        return false;
    const user = yield models_1.User.findOne({ where: { uuid: session.userUuid } });
    if (!user)
        return false;
    const accessToken = (0, exports.createAccessToken)({ user, session });
    return accessToken;
});
exports.reIssueAccessToken = reIssueAccessToken;
const invalidateSession = (sessionId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield models_1.Session.update({ valid: false }, { where: { uuid: sessionId } });
    return session;
});
exports.invalidateSession = invalidateSession;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3Nlc3Npb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsbUNBQTZCO0FBQzdCLHVEQUErQjtBQUMvQix5Q0FBNkM7QUFDN0Msa0RBQWtEO0FBRTNDLE1BQU0sYUFBYSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFBQyxPQUFBLGdCQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pGLElBQUksRUFBRSxJQUFBLG1CQUFVLEdBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJO0tBQ3JELENBQUMsQ0FBQTtFQUFBLENBQUM7QUFGVSxRQUFBLGFBQWEsaUJBRXZCO0FBRUksTUFBTSxpQkFBaUIsR0FBRyxDQUFPLEVBQ3RDLElBQUksRUFDSixPQUFPLEdBSVIsRUFBRSxFQUFFO0lBQUMsT0FBQSxJQUFBLGdCQUFJLEVBQ1IsRUFBRSxJQUFJLEVBQUUsSUFBQSxZQUFHLEVBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFBLFlBQUcsRUFBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFDdEUsRUFBRSxTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FDckMsQ0FBQTtFQUFBLENBQUM7QUFUVyxRQUFBLGlCQUFpQixxQkFTNUI7QUFFSyxNQUFNLGtCQUFrQixHQUFHLENBQU8sT0FBZ0IsRUFBRSxFQUFFLGtEQUFDLE9BQUEsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUEsWUFBRyxFQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFBdEksUUFBQSxrQkFBa0Isc0JBQW9IO0FBRTVJLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTyxFQUN2QyxZQUFZLEdBR2IsRUFBRSxFQUFFO0lBQ0gsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUEsa0JBQU0sRUFBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBQSxZQUFHLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXBELE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBQSxZQUFHLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLENBQUE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUU5QyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RSxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUEseUJBQWlCLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUEsQ0FBQztBQWhCVyxRQUFBLGtCQUFrQixzQkFnQjdCO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFPLFNBQWlCLEVBQUUsRUFBRTtJQUMzRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGdCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUEsQ0FBQztBQUhXLFFBQUEsaUJBQWlCLHFCQUc1QiJ9