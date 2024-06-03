'use client'
import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import { useState } from "react";

import Cookies from 'js-cookie'
import Workspace from "@/app/menu/Workspace";

export type InteractiveMenuProps = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroups: DBT_MealGroups[]
    mealsInGroups: DBT_MealsInGroups[]
    variants: DBT_Variants[]
    menuSetUp: DBT_MenuSetUp
}

export default function InteractiveMenu(props: InteractiveMenuProps) {

    const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp } = props;


    const headLayout = layouts.find((layout) => layout.Type === "Head");


    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(mealGroups[1].ID ?? 1);



    const parser = new XMLParser({ ignoreAttributes : false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");


    const renderLogo = (o: any) => {
        const rect = parseBasic(o);
        return (
            <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height }}>
                <img src={base64DataUri(menuSetUp.LogoImage)} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
        );
    }

    const renderLanguageBar = (o: any) => {
        const container = parseBasic(o);

        return (
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', top: container.top, left: container.left, width: container.width, height: container.height, backgroundColor: container.background.color }}>
                {languages.map((lang) => {
                    return (
                        <div key={lang.ID} style={{ flex: 1, textAlign: container.textAlign, font: container.font.font, color: container.font.color }}>
                            <button onClick={() => { Cookies.set('language', lang.ID) && location.reload()}}>{lang.DisplayText}</button>
                        </div>
                    );
                })}
            </div>
        );
    }

    const renderMealGroups = (o: any) => {
        const container = parseBasic(o);

        return (
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', top: container.top, left: container.left, width: container.width, height: container.height, backgroundColor: container.background.color }}>
                {mealGroups.map((lang) => {
                    return (
                        <div key={lang.ID} style={{ flex: 1, textAlign: container.textAlign, font: container.font.font, color: container.font.color }}>
                            <a>{lang.MealGroup}</a>
                        </div>
                    );
                })}
            </div>
        );
    }

    const renderText = (o: any, text: any) => {
        const container = parseBasic(o);
        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, textAlign: container.textAlign, font: container.font.font, color: container.font.color }}>
                <p>{text}</p>
            </div>
        );
    }

    const renderWorkspace = (o: any) => {
        const container = parseBasic(o);

        console.log(currentMealGroupID, meals, mealGroups, variants)

        const mealGroup = mealGroups.find((mg) => (mg.ID === currentMealGroupID));
        const mealsFilter = meals.filter((meal) => (meal.ID_MealGroup === currentMealGroupID));

        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, overflow: 'hidden' }}>
                <Workspace languages={languages} layouts={layouts} meals={mealsFilter} mealGroup={mealGroup} variants={variants} />
            </div>
        );
    }



    return (
        <div className="min-w-full min-h-screen" style={{ backgroundColor: numberToRGBAString(menuSetUp.BackgroundColor)}}>
            {renderLogo(jsonObj.Head?.Logo)}
            {renderText(jsonObj.Head?.HeaderText, menuSetUp.HeaderText)}
            {renderLanguageBar(jsonObj.Head?.LanguageBar)}

            {renderMealGroups(jsonObj.Head?.MealGroups)}

            {renderWorkspace(jsonObj.Head?.Workspace)}



            {renderText(jsonObj.Head?.FooterText, menuSetUp.FooterText)}
        </div>
    );






}