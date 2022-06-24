export * from './itemController.service';
import { ItemControllerService } from './itemController.service';
export * from './messageController.service';
import { MessageControllerService } from './messageController.service';
export * from './pictureController.service';
import { PictureControllerService } from './pictureController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [ItemControllerService, MessageControllerService, PictureControllerService, UserControllerService];
