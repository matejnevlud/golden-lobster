'use client'


import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic, vh } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import { useState } from "react";

export type AddToOrderStripProps = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroup: DBT_MealGroups
    variants: DBT_Variants[]
    setSelectedMealId: (id: bigint | null) => void
}

export default function AddToOrderStrip(props: AddToOrderStripProps) {

    const { setSelectedMealId, languages, layouts, meals, mealGroup, variants } = props;

    const headLayout = layouts.find((layout) => layout.Type == "Head");
    const mealGroupLayout = layouts.find((layout) => layout.ID == mealGroup?.ID_Layout);


    const parser = new XMLParser({ ignoreAttributes : false });
    let mealJsonObj = parser.parse(mealGroupLayout?.Xml ?? "");
    let headJsonObj = parser.parse(headLayout?.Xml ?? "");
    console.log('mealGroupLayout headJsonObj', headJsonObj?.Head.PopUpWindow)




    return (
        <div>
            {renderMeals()}
        </div>
    );

}
