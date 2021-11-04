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
exports.deleteRoom = exports.findRoomsByUserUuid = exports.createRoom = void 0;
const models_1 = require("../db/models");
const createRoom = (input) => __awaiter(void 0, void 0, void 0, function* () { return models_1.Room.create(Object.assign({}, input)); });
exports.createRoom = createRoom;
const findRoomsByUserUuid = (userUuid) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Room.findAll({
        where: { userUuid },
    });
});
exports.findRoomsByUserUuid = findRoomsByUserUuid;
const deleteRoom = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        models_1.Room.destroy({ where: { uuid } });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteRoom = deleteRoom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3Jvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFN0IsTUFBTSxVQUFVLEdBQUcsQ0FBTyxLQUFXLEVBQUUsRUFBRSxrREFBQyxPQUFBLGFBQUksQ0FBQyxNQUFNLG1CQUFNLEtBQUssRUFBRyxDQUFBLEdBQUEsQ0FBQztBQUE5RCxRQUFBLFVBQVUsY0FBb0Q7QUFFcEUsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUFDLE9BQUEsYUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUU7S0FDcEIsQ0FBQyxDQUFBO0VBQUEsQ0FBQztBQUZVLFFBQUEsbUJBQW1CLHVCQUU3QjtBQUVJLE1BQU0sVUFBVSxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDL0MsSUFBSTtRQUNGLGFBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbkM7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFOVyxRQUFBLFVBQVUsY0FNckIifQ==