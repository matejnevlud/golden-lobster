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
    translatedData: {
        [key: number]: {
            mealGroups: DBT_MealGroups[]
            meals: DBT_Meals[]
            variants: DBT_Variants[]
            menuSetUp: DBT_MenuSetUp
            layouts: DBT_Layouts[]
        }
    }
}


function InteractiveMenu(props: InteractiveMenuProps) {

    const { languages, mealsInGroups } = props;
    const { translatedData } = props;

    const [reloadClickCounter, setReloadClickCounter] = useState(0);


    const [mealGroups, setMealGroups] = useState<DBT_MealGroups[]>(props.mealGroups);
    const [meals, setMeals] = useState<DBT_Meals[]>(props.meals);
    const [variants, setVariants] = useState<DBT_Variants[]>(props.variants);
    const [menuSetUp, setMenuSetUp] = useState<DBT_MenuSetUp>(props.menuSetUp);
    const [layouts, setLayouts] = useState<DBT_Layouts[]>(props.layouts);

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

        const translated = translatedData[id];
        setMealGroups(translated.mealGroups);
        setMeals(translated.meals);
        setVariants(translated.variants);
        setMenuSetUp(translated.menuSetUp);
        setLayouts(translated.layouts);

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
        const descriptionText = meals.find((m) => m.ID == selectedMealId)?.PictureDescription ?? '';

        if (imageUrl == '' && descriptionText == '') return null;

        // Load image and determine aspect ratio


        return (
            <a onClick={() => setSelectedMealId(null)}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 997 }}></div>

                {imageUrl != '' && <img src={imageUrl} style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, zIndex: 998 }}/>}

                {descriptionText != '' &&
                    <div style={{ borderRadius: '4px', position: 'absolute', top: description.top, left: description.left, width: description.width, height: description.height, backgroundColor: 'white', zIndex: 1000, padding: '1em' }}>
                        <p>{descriptionText}</p>
                    </div>
                }
            </a>
        );
    }


    const renderBG = () => {
        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));

        return <img src={base64DataUri(mealGroup?.BackgroudPicture)} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />
    }


    const renderMealGroupTextBox = () => {
        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));
        const mealGroupLayout = layouts.find((layout) => layout.ID == mealGroup?.ID_Layout);
        if (!mealGroupLayout) return null;

        const mealJsonObj = parser.parse(mealGroupLayout?.Xml ?? "");
        if (!mealJsonObj?.FoodComponent?.TextBox) return null;

        const text = mealGroupLayout.TextBox;
        if (!text) return null;


        const container = parseBasic(mealJsonObj?.FoodComponent?.TextBox);
        return (
            <div style={{ position: 'absolute', top: container.top, left: container.left, width: container.width, height: container.height, textAlign: container.textAlign, font: container.font.font, color: container.font.color }} key={text}>
                <p>{text}</p>
            </div>
        );
    }

    const renderRefresh = () => {
        return (
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '32px', height: '32px', zIndex: 999, opacity: 0.2}}>
                <button onClick={() => reloadClickCounter >= 5 ? location.reload() : setReloadClickCounter(reloadClickCounter + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="white">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                </button>
            </div>
        );
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
            {renderMealGroupTextBox()}

            {renderRefresh()}
        </div>
    );






}


const InteractiveMenuNoSSR = dynamic(() => Promise.resolve(InteractiveMenu), { ssr: false })
export default InteractiveMenuNoSSR
