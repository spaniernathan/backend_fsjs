"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const lodash_1 = require("lodash");
let envs = {};
const result = dotenv.config();
if (!('error' in result)) {
    envs = result.parsed;
}
else {
    // eslint-disable-next-line
    (0, lodash_1.each)(process.env, (value, key) => envs[key] = value);
}
exports.default = {
    nodeEnv: envs.NODE_ENV,
    port: envs.API_PORT,
    host: envs.API_HOST,
    databaseURL: envs.DATABASE_URL,
    databaseDB: envs.DATABASE_DATABASE,
    databaseUsername: envs.DATABASE_USERNAME,
    databasePassword: envs.DATABASE_PASSWORD,
    databaseHost: envs.DATABASE_HOST,
    databasePort: envs.DATABASE_PORT,
    databaseSchema: envs.DATABASE_SCHEMA,
    jwtPrivateKey: envs.JWT_PRIVATE_KET,
    accessTokenTtl: envs.ACCESS_TOKEN_TTL,
    refreshTokenTtl: envs.REFRESH_TOKEN_TTL,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFDakMsbUNBQThCO0FBRTlCLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQztBQUVuQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFL0IsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxFQUFFO0lBQ3hCLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ3RCO0tBQU07SUFDTCwyQkFBMkI7SUFDM0IsSUFBQSxhQUFJLEVBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztDQUN0RDtBQUVELGtCQUFlO0lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO0lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtJQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7SUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO0lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO0lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7SUFDeEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtJQUN4QyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWE7SUFDaEMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhO0lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZTtJQUNwQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWU7SUFDbkMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7SUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Q0FDeEMsQ0FBQyJ9