/*  tslint:disable:max-classes-per-file */
export {debugOverride} from '../../../config';
export enum HierType {
    FLAT='flat',
    RECURSIVE='recursive'
} 
export enum Status { 'notpossible', 'notset', 'set', 'hidden' }

export interface Options {
    bgColor: string;
    dashboardListenersEnabled: boolean;
    debug: boolean;
    debounce: number;
    fontFamily: string;
    fontColor: string;
    fontSize: string;
    highlightColor: string;
    searchEnabled: boolean;
    title: string;
    titleEnabled: boolean;
    warningEnabled: boolean;
}
export interface HierarchyProps {
    configComplete: boolean;
    options: Options;
    separator: string;
    type: HierType;
    paramSuffix: string;
    worksheet: SelectedWorksheet,
    parameters: SelectedParameters;
    dashboardItems: AvailableProps;
}
export interface SelectedParameters {
    childId: string;
    childIdEnabled: boolean;
    childLabel: string;
    childLabelEnabled: boolean;
    fields: string[];
    level: string;
}
export interface AvailableProps {
    parameters: string[], // all available dashboard parameters
    flatParameters: string[], // parameters available for flat hierarchy child label (excludes level, id, field+suffix array)
    worksheets: string[]; // list of available worksheets 
    allCurrentWorksheetItems: AvailableWorksheet;
}
export interface AvailableWorksheet {
    // worksheetObject: any;
    filters: string[],
    fields: string[]; // store all worksheet names and fields for selecting hierarchy
}
export interface SelectedWorksheet {
    name: string,
    filter: string,
    filterEnabled: boolean,
    parentId: string,
    childId: string,
    childLabel: string;
    enableMarkSelection: boolean;
    fields: string[]; // used for flat hierarchy
    status: Status;
}

export const defaultSelectedProps: HierarchyProps={
    configComplete: false,
    dashboardItems: {
        allCurrentWorksheetItems: {
            fields: [],
            filters: []
        },
        flatParameters: [],
        parameters: [],
        worksheets: [],
    },
    options: {
        bgColor: '#F3F3F3',
        dashboardListenersEnabled: false,
        debounce: 250,
        debug: false,
        fontColor: 'rgba(0, 0, 0, 0.8)',
        fontFamily: '"Benton Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;',
        fontSize: '12px',
        highlightColor: '#d1d1d1',
        searchEnabled: true,
        title: 'Hierarchy Navigator',
        titleEnabled: true,
        warningEnabled: true,
    },
    paramSuffix: ' Param',
    parameters:
    {
        childId: '',
        childIdEnabled: false,
        childLabel: '',
        childLabelEnabled: false,
        fields: [], // for flat hier, auto-generated field+suffix parameters
        level: 'Level Param',
    },
    separator: '|',
    type: HierType.FLAT,
    worksheet:
    {
        childId: '',
        childLabel: '',
        enableMarkSelection: false,
        fields: [],
        filter: '',
        filterEnabled: false,
        name: '',
        parentId: '',
        status: Status.notpossible
    }
};