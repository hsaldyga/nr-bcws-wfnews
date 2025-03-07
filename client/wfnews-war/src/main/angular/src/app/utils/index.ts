import { APP_BOOTSTRAP_LISTENER, Inject, InjectionToken, Type } from '@angular/core';
import { EffectSources } from '@ngrx/effects';
import { SortDirection } from '@wf1/core-ui';
import { PagingInfoRequest } from '../store/application/application.state';

export enum ResourcesRoutes {
    LANDING = '',
    ACTIVEWILDFIREMAP = 'activeWildfireMap',
    WILDFIRESLIST = 'wildFiresList',
    CURRENTSTATISTICS = 'currentStatistics',
    RESOURCES = 'resources',
    UNAUTHORIZED = 'unauthorized',
    SIGN_OUT = 'sign-out-page',
    ERROR_PAGE = 'error-page',
    ADMIN = 'admin',
    ADMIN_INCIDENT = 'incident'
}

export function getPageInfoRequestForSearchState(searchState: any): PagingInfoRequest {
    return {
        pageRowCount: searchState.pageSize,
        pageNumber: searchState.pageIndex,
        sortColumn: searchState.sortParam,
        sortDirection: searchState.sortDirection,
        query: searchState.query
    };
}

export const BOOTSTRAP_EFFECTS = new InjectionToken('Bootstrap Effects');

export function createInstances(...instances: any[]) {
    return instances;
}

export function bootstrapEffects(effects: Type<any>[], sources: EffectSources) {
    return () => {
        effects.forEach(effect => sources.addEffects(effect));
    };
}


export function provideBootstrapEffects(effects: Type<any>[]): any {
    return [
        effects,
        {
            provide: BOOTSTRAP_EFFECTS, deps: effects, useFactory: createInstances
        },
        {
            provide: APP_BOOTSTRAP_LISTENER,
            multi: true,
            useFactory: bootstrapEffects,
            deps: [[new Inject(BOOTSTRAP_EFFECTS)], EffectSources]
        }
    ];
}

export const DATE_FORMATS = {
    fullPickerInput: 'Y-MM-DD HH:mm',
    datePickerInput: 'Y-MM-DD',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'Y-MM',
    dateA11yLabel: 'Y-MMM-DD',
    monthYearA11yLabel: 'YYYY-MMM',
    simplifiedDate: 'MMM DD',
    simplifiedMonthDate: 'MM-DD',
    fullPickerInputWithSlash: 'Y-MM-DD/ HH:mm',
    API_DATE: 'Y-MM-DD',
    API_TIMESTAMP: 'Y-MM-DD HH:mm:ss',
    API_TIMESTAMP_WITH_SEP: 'Y-MM-DDTHH:mm:ss'
};

export function getElementInnerText(el: HTMLElement): string {
    return el.innerText;
}

export  const hasValues = (obj) => Object.values(obj).some(v => v !== null && typeof v !== 'undefined');

export function isElementTruncated(el: HTMLElement): boolean {
    return el.offsetWidth < el.scrollWidth;
}

export const CONSTANTS= {
    NO_RECORDS_MESSAGE: "No records to display.",
}

export function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export const formatSort = (param: string, direction: SortDirection) => param && direction ? `${param} ${direction}` : undefined;

export const WF_SNACKBAR_TYPES = {SUCCESS: "success", ERROR: "error", WARNING: "warning", INFO: "info", UPDATE: "update"};

