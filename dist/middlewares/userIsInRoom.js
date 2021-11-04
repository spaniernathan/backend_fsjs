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
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("../db/models");
const userIsInRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const room = models_1.Room.findOne({
        where: { uuid: req.params.roomId },
    });
    // TODO: Check if user is in the room
    if (!room)
        return res.sendStatus(http_status_codes_1.StatusCodes.UNAUTHORIZED);
    return next();
});
exports.default = userIsInRoom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcklzSW5Sb29tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL3VzZXJJc0luUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHlEQUFnRDtBQUNoRCx5Q0FBb0M7QUFFcEMsTUFBTSxZQUFZLEdBQUcsQ0FDbkIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQixFQUNsQixFQUFFO0lBQ0YsTUFBTSxJQUFJLEdBQUcsYUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7S0FDbkMsQ0FBQyxDQUFDO0lBQ0gscUNBQXFDO0lBQ3JDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQztBQUVGLGtCQUFlLFlBQVksQ0FBQyJ9