'use client';

import React, { forwardRef, useEffect } from "react";
import { DataGrid, GridFooter, GridFooterContainer, useGridApiRef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/models/api/gridApiCommunity";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { createUILayout, getUILayouts, saveUILayout } from "@/db";


// @ts-ignore
// eslint-disable-next-line react/display-name
export const LayoutFooter = forwardRef((props, ref: React.MutableRefObject<GridApiCommunity>) => {
    const { viewName, refresh } = props;
    const [layoutId, setLayoutId] = React.useState('');

    const [newLayoutName, setNewLayoutName] = React.useState('');

    // get data using getUILayouts
    const [savedLayouts, setSavedLayouts] = React.useState([]);
    // get data using getUILayouts
    useEffect(() => {
        (async () => {
            const data = await getUILayouts(viewName);
            setSavedLayouts(data);
            let lastClickedLayoutId = localStorage.getItem('lastClickedLayoutId_' + viewName);
            if (!lastClickedLayoutId || lastClickedLayoutId === '') return;

            lastClickedLayoutId = parseInt(lastClickedLayoutId);
            setLayoutId(lastClickedLayoutId || '');

            const layout = data.find((layout: any) => layout.id === lastClickedLayoutId);
            applyLayout(lastClickedLayoutId, layout?.state);
        })()
    }, []);


    const handleChange = (event: SelectChangeEvent) => {
        setLayoutId(event.target.value);
        localStorage.setItem('lastClickedLayoutId_' + viewName, event.target.value);

        const layout = savedLayouts.find((layout: any) => layout.id === event.target.value);
        applyLayout(event.target.value, layout?.state);
    };

    const applyLayout = async (id: number | string, state?: string) => {
        console.log('Applying layout', id)
        if (!state && typeof id !== 'number') {
            console.log('No state to apply, resetting')
            refresh();
            return;
        }



        const parsedState = JSON.parse(state);
        ref.current?.restoreState(parsedState);
    }


    const getStateForStorage = () => {
        let exportedState = ref.current?.state;

        console.log('Exported state', ref.current?.exportState())
        let newDimensionsMap = {};
        for (const [key, value] of Object.entries(exportedState.columns.lookup)) {
            newDimensionsMap[key] = { width: value.width, minWidth: value.minWidth, maxWidth: -1 , flex: value.flex }
        }


        const neccessaryState = {
            columns: {
                columnVisibilityModel: exportedState.columns.columnVisibilityModel,
                dimensions: newDimensionsMap,
                orderedFields: exportedState.columns.orderedFields
            } ,
            filter: {
                filterModel: exportedState.filter.filterModel
            },
            sorting: {
                sortModel: exportedState.sorting.sortModel
            }
        }
        console.log('Neccessary state', neccessaryState)

        return neccessaryState;
    }
    const onSave = async () => {
        let neccessaryState = getStateForStorage();

        console.log('Saving existing layout', layoutId)
        let savedLay = await saveUILayout(layoutId, JSON.stringify(neccessaryState))
        setSavedLayouts(savedLayouts.map((layout: any) => layout.id === layoutId ? savedLay : layout));
    }

    const onCreate = async () => {
        let neccessaryState = getStateForStorage();


        console.log('Creating new layout', newLayoutName)
        let newLayoutek = await createUILayout(viewName, newLayoutName, JSON.stringify(neccessaryState));
        setSavedLayouts([...savedLayouts, newLayoutek]);
        setLayoutId(newLayoutek.id);
        localStorage.setItem('lastClickedLayoutId_' + viewName, newLayoutek.id);

        setNewLayoutName('');
    }

    return (
        <GridFooterContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Layout</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={layoutId}
                        label="Layout"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None / NEW</em>
                        </MenuItem>
                        {savedLayouts.map((layout: any) => <MenuItem key={layout.id} value={layout.id}>{layout.name}</MenuItem>)}
                    </Select>
                </FormControl>
                {layoutId !== '' && <Button sx={{marginRight: '10px'}} onClick={onSave}>{'Save'}</Button>}
                <TextField size="small" label="Layout name" variant="outlined" value={newLayoutName} onChange={(e) => setNewLayoutName(e.target.value)} />
                <Button onClick={onCreate}>{'Create new'}</Button>

            </Box>

            <GridFooter sx={{
                border: 'none', // To delete double border.
            }}/>
        </GridFooterContainer>
    )
});
 
export const LayoutDataGrid = (props: any) => {
    const apiRef = useGridApiRef()
    const [randomKey, setRandomKey] = React.useState(Math.random());

    function refresh() {
        setRandomKey(Math.random());
    }
    return <DataGrid key={randomKey} apiRef={apiRef} slots={{ footer: () => <LayoutFooter refresh={refresh} viewName={props.viewName} ref={apiRef} initialState={props.initialState}/> }} {...props} />
}
