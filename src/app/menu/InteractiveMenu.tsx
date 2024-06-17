'use client'
import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import { useState } from "react";
import { useLocalStorage } from 'usehooks-ts'
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


    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);


    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));
    const [currentLanguageID, setCurrentLanguageID] = useState<bigint>(BigInt(localStorage.getItem('language') ?? '1'));



    const parser = new XMLParser({ ignoreAttributes : false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");
    console.log('headLayout', jsonObj)

    const setLanguageFunc = (id: number) => {
        Cookies.set('language', id);
        localStorage.setItem('language', id);
        setCurrentLanguageID(id);
        location.reload();
    }

    const setMealGroupFunc = (id: number) => {
        localStorage.setItem('mealGroup', id);
        setCurrentMealGroupID(id);
    }


    const renderLogo = (o: any) => {
        const rect = parseBasic(o);
        return (
            <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height }} key='l'>
                <img src={base64DataUri(menuSetUp.LogoImage)} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
        );
    }

    const renderLanguageBar = (o: any) => {
        const container = parseBasic(o);

        return (
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', top: container.top, left: container.left, width: container.width, height: container.height, backgroundColor: container.background.color }} key='lb'>
                {languages.map((lang) => {
                    return (
                        <div key={lang.ID} style={{ flex: 1, textAlign: container.textAlign, font: container.font.font, color: currentLanguageID == lang.ID ? container.font?.highlightColor : container.font.color }}>
                            <button onClick={() => setLanguageFunc(lang.ID)}>{lang.DisplayText}</button>
                        </div>
                    );
                })}
            </div>
        );
    }

    const renderMealGroups = (o: any) => {
        const container = parseBasic(o, null);

        return (
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', top: container.top, left: container.left, width: container.width, height: container.height, backgroundColor: container.background.color }} key='mg'>
                {mealGroups.map((mg) => {
                    return (
                        <div key={mg.ID} style={{ flex: 1, textAlign: container.textAlign, font: container.font.font, color: currentMealGroupID == mg.ID ? container.font?.highlightColor : container.font.color }}>
                            <button onClick={() => setMealGroupFunc(mg.ID) && location.reload()}>{mg.MealGroup}</button>
                        </div>
                    );
                })}
            </div>
        );
    }

    const renderText = (o: any, text: any) => {
        const container = parseBasic(o);
        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, textAlign: container.textAlign, font: container.font.font, color: container.font.color }} key={text}>
                <p>{text}</p>
            </div>
        );
    }

    const renderWorkspace = (o: any) => {
        const container = parseBasic(o);


        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));
        const mealsFilter = meals.filter((meal) => (meal.ID_MealGroup == currentMealGroupID));

        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, overflow: 'hidden' }} key='w'>
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