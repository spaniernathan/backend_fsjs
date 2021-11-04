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
exports.deleteRoomMessage = exports.findRoomMessages = exports.createRoomMessage = void 0;
const models_1 = require("../db/models");
const createRoomMessage = (input) => __awaiter(void 0, void 0, void 0, function* () { return models_1.Message.create(Object.assign({}, input)); });
exports.createRoomMessage = createRoomMessage;
const findRoomMessages = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Room.findOne({
        where: { uuid },
        include: {
            model: models_1.Message,
            as: 'messages',
        },
    });
});
exports.findRoomMessages = findRoomMessages;
const deleteRoomMessage = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        models_1.Message.destroy({
            where: { uuid },
        });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteRoomMessage = deleteRoomMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBNkM7QUFFdEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLEtBQWMsRUFBRSxFQUFFLGtEQUFDLE9BQUEsZ0JBQU8sQ0FBQyxNQUFNLG1CQUFNLEtBQUssRUFBRyxDQUFBLEdBQUEsQ0FBQztBQUEzRSxRQUFBLGlCQUFpQixxQkFBMEQ7QUFFakYsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixJQUFZLEVBQ1osRUFBRTtJQUFDLE9BQUEsYUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsZ0JBQU87WUFDZCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFBO0VBQUEsQ0FBQztBQVJVLFFBQUEsZ0JBQWdCLG9CQVExQjtBQUVJLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxJQUFZLEVBQUUsRUFBRTtJQUN0RCxJQUFJO1FBQ0YsZ0JBQU8sQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUU7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLGlCQUFpQixxQkFRNUIifQ==