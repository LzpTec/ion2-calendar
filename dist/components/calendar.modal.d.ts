import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IonContent, ModalController, NavParams } from '@ionic/angular';
import { CalendarDay, CalendarModalOptions, CalendarMonth } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import * as i0 from "@angular/core";
export declare class CalendarModal implements OnInit, AfterViewInit {
    private _renderer;
    _elementRef: ElementRef;
    params: NavParams;
    modalCtrl: ModalController;
    ref: ChangeDetectorRef;
    calSvc: CalendarService;
    content: IonContent;
    monthsEle: ElementRef;
    ionPage: boolean;
    options: CalendarModalOptions;
    datesTemp: Array<CalendarDay>;
    calendarMonths: Array<CalendarMonth>;
    step: number;
    showYearPicker: boolean;
    year: number;
    years: Array<number>;
    _scrollLock: boolean;
    _d: CalendarModalOptions;
    actualFirstTime: number;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, params: NavParams, modalCtrl: ModalController, ref: ChangeDetectorRef, calSvc: CalendarService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(): void;
    initDefaultDate(): void;
    findCssClass(): void;
    onChange(data: any): void;
    onCancel(): void;
    done(): void;
    canDone(): boolean;
    clear(): void;
    canClear(): boolean;
    nextMonth(event: any): void;
    backwardsMonth(): void;
    scrollToDate(date: Date): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    repaintDOM(): Promise<void>;
    findInitMonthNumber(date: Date): number;
    _getDayTime(date: any): number;
    _monthFormat(date: any): string;
    trackByIndex(index: number, momentDate: CalendarMonth): number;
    static ɵfac: i0.ɵɵFactoryDef<CalendarModal, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CalendarModal, "ion-calendar-modal", never, { "options": "options"; }, {}, never, ["[sub-header]"]>;
}
