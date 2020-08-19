import { ModalController } from '@ionic/angular';
import { CalendarModalOptions, ModalOptions } from './calendar.model';
import { CalendarService } from './services/calendar.service';
import * as i0 from "@angular/core";
export declare class CalendarController {
    modalCtrl: ModalController;
    calSvc: CalendarService;
    constructor(modalCtrl: ModalController, calSvc: CalendarService);
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    openCalendar(calendarOptions: CalendarModalOptions, modalOptions?: ModalOptions): Promise<{}>;
    static ɵfac: i0.ɵɵFactoryDef<CalendarController, never>;
    static ɵprov: i0.ɵɵInjectableDef<CalendarController>;
}
