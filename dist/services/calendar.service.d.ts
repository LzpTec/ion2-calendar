import { CalendarDay, CalendarModalOptions, CalendarMonth, CalendarOriginal, CalendarResult } from '../calendar.model';
import * as i0 from "@angular/core";
export declare class CalendarService {
    private readonly defaultOpts;
    constructor(defaultOpts: CalendarModalOptions);
    get DEFAULT_STEP(): number;
    safeOpt(calendarOptions?: any): CalendarModalOptions;
    createOriginalCalendar(time: number): CalendarOriginal;
    findDayConfig(day: any, opt: CalendarModalOptions): any;
    createCalendarDay(time: number, opt: CalendarModalOptions, month?: number): CalendarDay;
    createCalendarMonth(original: CalendarOriginal, opt: CalendarModalOptions): CalendarMonth;
    createMonthsByPeriod(startTime: number, monthsNum: number, opt: CalendarModalOptions): Array<CalendarMonth>;
    wrapResult(original: CalendarDay[], pickMode: string): any;
    multiFormat(time: number): CalendarResult;
    static ɵfac: i0.ɵɵFactoryDef<CalendarService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CalendarService>;
}
