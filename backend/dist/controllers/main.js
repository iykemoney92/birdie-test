"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.mainController = void 0;
const express_1 = __importDefault(require("express"));
const eventModel = __importStar(require("../models/event"));
const mainController = express_1.default.Router();
exports.mainController = mainController;
mainController.get("/api", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    eventModel.findAll((err, mood_events) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        return res.status(200).json({ "data": mood_events });
    });
}));
mainController.get("/api/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const event_id = req.params.id;
    eventModel.findOne(event_id, (err, mood_event) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        return res.status(200).json({ "data": mood_event });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXFEO0FBQ3JELDREQUE4QztBQUU5QyxNQUFNLGNBQWMsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBc0IvQix3Q0FBYztBQXBCdkIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBTyxDQUFVLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVUsRUFBRSxXQUF3QixFQUFFLEVBQUU7UUFDMUQsSUFBRyxHQUFHLEVBQUM7WUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25FLE1BQU0sUUFBUSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBVSxFQUFFLFVBQXFCLEVBQUUsRUFBRTtRQUNqRSxJQUFHLEdBQUcsRUFBQztZQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgKiBhcyBldmVudE1vZGVsIGZyb20gXCIuLi9tb2RlbHMvZXZlbnRcIjtcclxuaW1wb3J0IHsgTW9vZEV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL2V2ZW50XCI7XHJcbmNvbnN0IG1haW5Db250cm9sbGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbm1haW5Db250cm9sbGVyLmdldChcIi9hcGlcIiwgYXN5bmMgKF86IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBldmVudE1vZGVsLmZpbmRBbGwoKGVycjogRXJyb3IsIG1vb2RfZXZlbnRzOiBNb29kRXZlbnRbXSkgPT4ge1xyXG4gICAgaWYoZXJyKXtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcImVycm9yTWVzc2FnZVwiOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgfVxyXG4gICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1wiZGF0YVwiOiBtb29kX2V2ZW50c30pO1xyXG4gIH0pXHJcbn0pO1xyXG5cclxubWFpbkNvbnRyb2xsZXIuZ2V0KFwiL2FwaS86aWRcIiwgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IGV2ZW50X2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLmlkO1xyXG4gIGV2ZW50TW9kZWwuZmluZE9uZShldmVudF9pZCwgKGVycjogRXJyb3IsIG1vb2RfZXZlbnQ6IE1vb2RFdmVudCkgPT4ge1xyXG4gICAgaWYoZXJyKXtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcImVycm9yTWVzc2FnZVwiOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcImRhdGFcIjogbW9vZF9ldmVudH0pO1xyXG4gIH0pXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCB7IG1haW5Db250cm9sbGVyIH07XHJcbiJdfQ==