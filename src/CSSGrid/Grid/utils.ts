import {TStyledProps, TCol, IGridProps, TGridGap, TGridCol, TGridTemplate, TGridGaps} from '../../types';
import {mediaSizes, themeName} from '../../config';
import media from '../../media';
import {css} from 'styled-components';




interface ICSSGetterCss {
    columns: (columns: TGridTemplate) => string
    rows: (rows: TGridTemplate) => string
    gap: (gapNum: TGridGaps) => string
    columnGap: (gapNum: TGridGap) => string
    rowGap: (gapNum: TGridGap) => string
}

export const cssGetter: ICSSGetterCss = {
    columns: (columns) => {
        if(typeof columns === 'string'){
            return `
            --bear-columns: ${columns};
            `;
        }
        return `
            --bear-columns: repeat(${columns}, 1fr)
        `;
    },
    rows: (rows) => {
        if(typeof rows === 'string'){
            return `
            --bear-rows: ${rows};
            `;
        }
        return `
            --bear-rows: repeat(${rows}, 1fr)
        `;
    },
    gap: (gapNum) => {
        return `
        --bear-gap: ${gapNum};
        `;
    },
    columnGap: (gapNum) => {
        return `
        column-gap: ${gapNum};
        `;
    },
    rowGap: (gapNum) => {
        return `
        row-gap: ${gapNum};
        `;
    },
};



/**
 * 產生 RWD 樣式
 * @param props
 */
export const generateRWDStyled = (props: TStyledProps<IGridProps>) => {
    return mediaSizes
        .map(sizeName => {
            return media[sizeName]`
            ${typeof props.columns === 'object' && typeof props.columns[sizeName] !== 'undefined' && css`
                ${cssGetter.columns(props.columns[sizeName])};
            `}
            ${typeof props.rows === 'object' && typeof props.rows[sizeName] !== 'undefined' && css`
                ${cssGetter.rows(props.rows[sizeName])};
            `}
        `;
        });
};
