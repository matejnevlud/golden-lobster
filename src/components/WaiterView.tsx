'use client';

import AddToOrderStrip from "@/components/AddToOrderStrip";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import Workspace from "@/components/Workspace";
import { useState } from "react";

export default function WaiterView(props) {

    const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp } = props;

    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));
    const [selectedMealId, setSelectedMealId] = useState<bigint | null>(null);
    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);
    const parser = new XMLParser({ ignoreAttributes : false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");


    window.addEventListener('storage', function(event) {
        alert('storage event');
    });


    const renderWorkspace = (o: any) => {
        const container = parseBasic(o);


        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));
        const mealsInGroup = mealsInGroups.filter((mig) => (mig.ID_Group == currentMealGroupID)) ?? [];
        console.log('mealsInGroup', mealsInGroup)
        const mealsFilter = meals.filter((m) => (mealsInGroup.some((mig) => mig.ID_Meal == m.ID)));



        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, overflow: 'hidden' }} key='w'>
                <AddToOrderStrip languages={languages} layouts={layouts} meals={mealsFilter} mealGroup={mealGroup} variants={variants} setSelectedMealId={setSelectedMealId} />
            </div>
        );
    }


    return (
        <>
        <div style={{ flex: 1, backgroundColor: 'black' }}>
            {renderWorkspace(jsonObj.Head?.Workspace)}

        </div>
        <div style={{ flex: 1, backgroundColor: 'white' }}>

        </div>
        </>
    )
}
