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
exports.getUserSessionsHandler = exports.invalidateUserSessionHandler = exports.createUserSessionHandler = void 0;
const lodash_1 = require("lodash");
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("../db/models");
const user_service_1 = require("../services/user.service");
const session_service_1 = require("../services/session.service");
const logger_1 = __importDefault(require("../logger"));
const createUserSessionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = null;
    let session;
    try {
        user = yield (0, user_service_1.validatePassword)(req.body);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    if (!user) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send('Invalid username or password');
    }
    try {
        session = yield (0, session_service_1.createSession)((0, lodash_1.get)(user, 'dataValues').uuid, req.get('user-agent') || '');
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    try {
        const accessToken = yield (0, session_service_1.createAccessToken)({ user, session });
        const refreshToken = yield (0, session_service_1.createRefreshToken)(session);
        return res.status(http_status_codes_1.StatusCodes.CREATED).send({ accessToken, refreshToken });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.createUserSessionHandler = createUserSessionHandler;
const invalidateUserSessionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, session_service_1.invalidateSession)((0, lodash_1.get)(req, 'user.session'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return res.sendStatus(http_status_codes_1.StatusCodes.OK);
});
exports.invalidateUserSessionHandler = invalidateUserSessionHandler;
function getUserSessionsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sessions = yield models_1.Session.findAll({
                where: {
                    user: (0, lodash_1.get)(req, 'user.uuid'),
                    valid: true,
                },
            });
            return res.send(sessions);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.getUserSessionsHandler = getUserSessionsHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Nlc3Npb24uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNkI7QUFFN0IseURBQWdEO0FBQ2hELHlDQUE2QztBQUM3QywyREFBNEQ7QUFDNUQsaUVBS3FDO0FBQ3JDLHVEQUErQjtBQUV4QixNQUFNLHdCQUF3QixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVFLElBQUksSUFBSSxHQUFrQyxJQUFJLENBQUM7SUFDL0MsSUFBSSxPQUFnQixDQUFDO0lBQ3JCLElBQUk7UUFDRixJQUFJLEdBQUcsTUFBTSxJQUFBLCtCQUFnQixFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QztJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQywrQkFBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDMUQ7SUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDbEY7SUFDRCxJQUFJO1FBQ0YsT0FBTyxHQUFHLE1BQU0sSUFBQSwrQkFBYSxFQUFDLElBQUEsWUFBRyxFQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUMxRjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQywrQkFBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDMUQ7SUFDRCxJQUFJO1FBQ0YsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFBLG1DQUFpQixFQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDL0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLG9DQUFrQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0tBQzVFO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBMUJXLFFBQUEsd0JBQXdCLDRCQTBCbkM7QUFFSyxNQUFNLDRCQUE0QixHQUFHLENBQzFDLEdBQVksRUFDWixHQUFhLEVBQ2IsRUFBRTtJQUNGLElBQUk7UUFDRixNQUFNLElBQUEsbUNBQWlCLEVBQUMsSUFBQSxZQUFHLEVBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBLENBQUM7QUFYVyxRQUFBLDRCQUE0QixnQ0FXdkM7QUFFRixTQUFzQixzQkFBc0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7UUFDdEUsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZ0JBQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBQSxZQUFHLEVBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztvQkFDM0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztDQUFBO0FBYkQsd0RBYUMifQ==