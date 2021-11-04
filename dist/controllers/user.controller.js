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
exports.getUserHandler = exports.postUserHandler = void 0;
const crypto_1 = require("crypto");
const http_status_codes_1 = require("http-status-codes");
const lodash_1 = require("lodash");
const logger_1 = __importDefault(require("../logger"));
const user_service_1 = require("../services/user.service");
const postUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.createUser)(Object.assign(Object.assign({}, req.body), { uuid: (0, crypto_1.randomUUID)() }));
        return res.status(http_status_codes_1.StatusCodes.CREATED).json((0, lodash_1.omit)((0, lodash_1.get)(user, 'dataValues'), 'password'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message: error.message });
    }
});
exports.postUserHandler = postUserHandler;
const getUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.findUserByUuid)((0, lodash_1.get)(req, 'user.uuid'));
        return res.status(http_status_codes_1.StatusCodes.CREATED).json((0, lodash_1.omit)((0, lodash_1.get)(user, 'dataValues'), 'password'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.getUserHandler = getUserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMseURBQWdEO0FBQ2hELG1DQUFtQztBQUNuQyx1REFBK0I7QUFDL0IsMkRBQXNFO0FBRS9ELE1BQU0sZUFBZSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25FLElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUEseUJBQVUsa0NBQU0sR0FBRyxDQUFDLElBQUksS0FBRSxJQUFJLEVBQUUsSUFBQSxtQkFBVSxHQUFFLElBQUcsQ0FBQztRQUNuRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pDLElBQUEsYUFBSSxFQUFDLElBQUEsWUFBRyxFQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FDMUMsQ0FBQztLQUNIO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFWVyxRQUFBLGVBQWUsbUJBVTFCO0FBRUssTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEUsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSw2QkFBYyxFQUFDLElBQUEsWUFBRyxFQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDekMsSUFBQSxhQUFJLEVBQUMsSUFBQSxZQUFHLEVBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUMxQyxDQUFDO0tBQ0g7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQzFEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFWVyxRQUFBLGNBQWMsa0JBVXpCIn0=