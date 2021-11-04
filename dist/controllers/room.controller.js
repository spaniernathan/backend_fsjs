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
exports.deleteRoomHandler = exports.joinRoomHandler = exports.getRoomsHandler = exports.createRoomHandler = void 0;
const crypto_1 = require("crypto");
const http_status_codes_1 = require("http-status-codes");
const lodash_1 = require("lodash");
const logger_1 = __importDefault(require("../logger"));
const room_service_1 = require("../services/room.service");
const createRoomHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, room_service_1.createRoom)(Object.assign(Object.assign({}, req.body), { uuid: (0, crypto_1.randomUUID)() }));
        return res.status(http_status_codes_1.StatusCodes.CREATED).json((0, lodash_1.get)(room, 'dataValues'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message: error.message });
    }
});
exports.createRoomHandler = createRoomHandler;
const getRoomsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, room_service_1.findRoomsByUserUuid)((0, lodash_1.get)(req, 'user.uuid'));
        return res.status(http_status_codes_1.StatusCodes.OK).json((0, lodash_1.get)(room, 'dataValues'));
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.getRoomsHandler = getRoomsHandler;
const joinRoomHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO: req.params.roomId
        // add user to room => connect its socket to the room socket
        return res.status(http_status_codes_1.StatusCodes.OK).json({});
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.joinRoomHandler = joinRoomHandler;
const deleteRoomHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, room_service_1.deleteRoom)(req.params.roomId);
        return res.status(http_status_codes_1.StatusCodes.OK);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
});
exports.deleteRoomHandler = deleteRoomHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Jvb20uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMseURBQWdEO0FBQ2hELG1DQUE2QjtBQUM3Qix1REFBK0I7QUFDL0IsMkRBSWtDO0FBRTNCLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckUsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSx5QkFBVSxrQ0FBTSxHQUFHLENBQUMsSUFBSSxLQUFFLElBQUksRUFBRSxJQUFBLG1CQUFVLEdBQUUsSUFBRyxDQUFDO1FBQ25FLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLFlBQUcsRUFBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN0RTtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUMxRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBUlcsUUFBQSxpQkFBaUIscUJBUTVCO0FBRUssTUFBTSxlQUFlLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkUsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxrQ0FBbUIsRUFBQyxJQUFBLFlBQUcsRUFBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxZQUFHLEVBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDakU7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQzFEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLGVBQWUsbUJBUTFCO0FBRUssTUFBTSxlQUFlLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkUsSUFBSTtRQUNGLDBCQUEwQjtRQUMxQiw0REFBNEQ7UUFDNUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBVFcsUUFBQSxlQUFlLG1CQVMxQjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckUsSUFBSTtRQUNGLE1BQU0sSUFBQSx5QkFBVSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkM7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQzFEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLGlCQUFpQixxQkFRNUIifQ==