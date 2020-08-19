import { ModuleWithProviders } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarController } from './calendar.controller';
import { CalendarModalOptions } from './calendar.model';
import { CalendarService } from './services/calendar.service';
export declare function calendarController(modalCtrl: ModalController, calSvc: CalendarService): CalendarController;
export declare class CalendarModule {
    static forRoot(defaultOptions?: CalendarModalOptions): ModuleWithProviders<CalendarModule>;
}
