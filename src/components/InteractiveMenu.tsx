'use client'
import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic, vh, vw } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import { useState } from "react";
import { useLocalStorage } from 'usehooks-ts'
import Cookies from 'js-cookie'
import Workspace from "@/components/Workspace";
import dynamic from "next/dynamic";

export type InteractiveMenuProps = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroups: DBT_MealGroups[]
    mealsInGroups: DBT_MealsInGroups[]
    variants: DBT_Variants[]
    menuSetUp: DBT_MenuSetUp
}


function InteractiveMenu(props: InteractiveMenuProps) {

    const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp } = props;


    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);


    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));
    const [currentLanguageID, setCurrentLanguageID] = useState<bigint>(BigInt(localStorage.getItem('language') ?? '1'));

    const [selectedMealId, setSelectedMealId] = useState<bigint | null>(null);

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
                <img src={base64DataUri(menuSetUp?.LogoImage)} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
        const mealsInGroup = mealsInGroups.filter((mig) => (mig.ID_Group == currentMealGroupID)) ?? [];
        const mealsFilter = mealsInGroup.map((mig) => ({...(meals.find((m) => m.ID == mig.ID_Meal)), order: mig.Order })).filter((m) => m != null);
        const mealsOrdered = mealsFilter.sort((a, b) => a.order - b.order)  as DBT_Meals[];


        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, overflow: 'visible' }} key='w'>
                <Workspace languages={languages} layouts={layouts} meals={mealsOrdered} mealGroup={mealGroup} variants={variants} setSelectedMealId={setSelectedMealId} />
            </div>
        );
    }

    const renderPopUpWindow = (o: any) => {
        const container = parseBasic(o);
        const description = parseBasic(o?.Description);
        // add container to description
        //description.left = vw(o?.Left + o?.Description?.Left, null);
        //description.top = vh(o?.Top + o?.Description?.Top, null);

        if (!selectedMealId) return null;

        const imageUrl = base64DataUri(meals.find((m) => m.ID == selectedMealId)?.Picture ?? '');

        // Load image and determine aspect ratio


        return (
            <a onClick={() => setSelectedMealId(null)}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 997 }}></div>

                <img src={imageUrl} style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, zIndex: 998 }}/>
                <div style={{ position: 'absolute', top: description.top, left: description.left, width: description.width, height: description.height, backgroundColor: 'white', zIndex: 1000 }}>
                    <p>{meals.find((m) => m.ID == selectedMealId)?.PictureDescription}</p>
                </div>
            </a>
        );
    }


    const renderBG = () => {
        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));

        return <img src={base64DataUri(mealGroup?.BackgroudPicture)} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />
    }

    return (
        <div className="min-w-full min-h-screen" style={{ backgroundColor: numberToRGBAString(menuSetUp.BackgroundColor) }}>
            {renderBG()}
            {renderPopUpWindow(jsonObj.Head?.PopUpWindow)}
            {renderLogo(jsonObj.Head?.Logo)}
            {renderText(jsonObj.Head?.HeaderText, menuSetUp.HeaderText)}
            {renderLanguageBar(jsonObj.Head?.LanguageBar)}

            {renderMealGroups(jsonObj.Head?.MealGroups)}

            {renderWorkspace(jsonObj.Head?.Workspace)}


            {renderText(jsonObj.Head?.FooterText, menuSetUp.FooterText)}
        </div>
    );






}


const InteractiveMenuNoSSR = dynamic(() => Promise.resolve(InteractiveMenu), { ssr: false })
export default InteractiveMenuNoSSR
