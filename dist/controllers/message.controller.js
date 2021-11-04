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
exports.deleteRoomMessageHandler = exports.getRoomMessagesHandler = exports.createRoomMessageHandler = void 0;
const crypto_1 = require("crypto");
const http_status_codes_1 = require("http-status-codes");
const lodash_1 = require("lodash");
const logger_1 = __importDefault(require("../logger"));
const message_service_1 = require("../services/message.service");
const createRoomMessageHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, message_service_1.createRoomMessage)(Object.assign(Object.assign({}, req.body), { roomUuid: req.params.roomUuid, uuid: (0, crypto_1.randomUUID)() }));
        return res.status(http_status_codes_1.StatusCodes.CREATED);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message: error.message });
    }
});
exports.createRoomMessageHandler = createRoomMessageHandler;
const getRoomMessagesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield (0, message_service_1.findRoomMessages)(req.params.roomUuid);
        return res.status(http_status_codes_1.StatusCodes.OK).json((0, lodash_1.get)(messages, 'dataValues'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.getRoomMessagesHandler = getRoomMessagesHandler;
const deleteRoomMessageHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, message_service_1.deleteRoomMessage)(req.params.messageUuid);
        return res.status(http_status_codes_1.StatusCodes.OK);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.deleteRoomMessageHandler = deleteRoomMessageHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL21lc3NhZ2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMseURBQWdEO0FBQ2hELG1DQUE2QjtBQUM3Qix1REFBK0I7QUFDL0IsaUVBSXFDO0FBRTlCLE1BQU0sd0JBQXdCLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sSUFBQSxtQ0FBaUIsa0NBQ2xCLEdBQUcsQ0FBQyxJQUFJLEtBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUM3QixJQUFJLEVBQUUsSUFBQSxtQkFBVSxHQUFFLElBQ2xCLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4QztJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUMxRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBWlcsUUFBQSx3QkFBd0IsNEJBWW5DO0FBRUssTUFBTSxzQkFBc0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMxRSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGtDQUFnQixFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsWUFBRyxFQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBUlcsUUFBQSxzQkFBc0IsMEJBUWpDO0FBRUssTUFBTSx3QkFBd0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RSxJQUFJO1FBQ0YsTUFBTSxJQUFBLG1DQUFpQixFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkM7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQzFEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLHdCQUF3Qiw0QkFRbkMifQ==