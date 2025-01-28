'use client'
import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic, vh, vw } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie'
import Workspace from "@/components/Workspace";
import dynamic from "next/dynamic";
import {CircularProgress} from "@mui/material";
import {getAllData} from "@/db";

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


function InteractiveMenu() {

    const [isWaiter, setIsWaiter] = useState(false);
    const [reloadClickCounter, setReloadClickCounter] = useState(0);
    const [devMenuClickCounter, setDevMenuClickCounter] = useState(0);
    const [showDevMenu, setShowDevMenu] = useState(false);
    const [hiddenMealGroups, setHiddenMealGroups] = useState<bigint[]>([]);
    const [ogMealGroups, setOgMealGroups] = useState<DBT_MealGroups[]>([]);


    const [loading, setLoading] = useState(true);


    window.addEventListener('storage', function (event) {
        //console.log('storage event', event)
        if (event.key === 'currentUser') {
            fetchData();
        }

    });

    useEffect(() => {

        fetchData();
    }, []);

    function fetchData() {
        setLoading(true);

        console.log('fetching data');
        getAllData().then((data) => {
            let _isWaiter = typeof localStorage.getItem('currentUser') === 'string';
            setIsWaiter(_isWaiter);
            console.log('isWaiter', _isWaiter)
            console.log('mealGroups', data.mealGroups)
            setLanguages(data.languages);
            setMealsInGroups(data.mealsInGroups);
            setTranslatedData(data.translatedData);
            setOgMealGroups(data.mealGroups.filter((mg) => mg.VisibleInMenu || _isWaiter));
            setMealGroups(data.mealGroups.filter((mg) => mg.VisibleInMenu || _isWaiter));
            setMeals(data.meals);
            setVariants(data.variants);
            setMenuSetUp(data.menuSetUp);
            setLayouts(data.layouts);
            setLoading(false);
        }).catch((err) => {
            console.error(err);
        });
    }

    const [languages, setLanguages] = useState<DBT_Languages[]>([]);
    const [mealsInGroups, setMealsInGroups] = useState<DBT_MealsInGroups[]>([]);
    const [translatedData, setTranslatedData] = useState<{ [key: number]: { mealGroups: DBT_MealGroups[]; meals: DBT_Meals[]; variants: DBT_Variants[]; menuSetUp: DBT_MenuSetUp; layouts: DBT_Layouts[]; }; }>([]);
    const [mealGroups, setMealGroups] = useState<DBT_MealGroups[]>([]);
    const [meals, setMeals] = useState<DBT_Meals[]>([]);
    const [variants, setVariants] = useState<DBT_Variants[]>([]);
    const [menuSetUp, setMenuSetUp] = useState<DBT_MenuSetUp>({});
    const [layouts, setLayouts] = useState<DBT_Layouts[]>([]);

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
        let _isWaiter = typeof localStorage.getItem('currentUser') === 'string';
        setMealGroups(translated.mealGroups.filter((mg) => mg.VisibleInMenu || _isWaiter));
        setOgMealGroups(translated.mealGroups.filter((mg) => mg.VisibleInMenu || _isWaiter));
        setHiddenMealGroups([]);
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
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '32px', height: '72px', zIndex: 999, opacity: 0.2}}>
                <button onClick={() => reloadClickCounter >= 4 ? location.reload() : setReloadClickCounter(reloadClickCounter + 1)} style={{ padding: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="white">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                </button>
            </div>
        );
    }

    const renderDevMenu = () => {
        return [
            <div key={'buttondev'} style={{ position: 'absolute', bottom: '0', right: '0', width: '72px', height: '72px', zIndex: 999, opacity: 0.2}}>
                <button onClick={() => devMenuClickCounter >= 4 ? setShowDevMenu(true) : setDevMenuClickCounter(devMenuClickCounter + 1)} style={{padding: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#00">
                        <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z"/>
                    </svg>
                </button>
            </div>,
            (showDevMenu && 
                <div key="hiddenMenu" style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', width: 'calc(100vw - 40px)', height: 'calc(100vh - 40px)', backgroundColor: 'white', zIndex: 1000, padding: '20px', overflow: 'auto' }}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Meal Groups Visibility</h2>
                            <button 
                                onClick={() => {
                                    setShowDevMenu(false);
                                    setDevMenuClickCounter(0);
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {ogMealGroups.map((mg) => (
                                <label key={mg.ID} className="flex items-center gap-2">
                                    <input 
                                        type="checkbox"
                                        style={{width: '6rem', height: '3rem' }}
                                        checked={mg.VisibleInMenu && !hiddenMealGroups.includes(mg.ID)}
                                        onChange={(e) => {
                                            const isTicked = e.target.checked;
                                            if (isTicked) {
                                                const tmp = hiddenMealGroups.filter((id) => id != mg.ID);
                                                setHiddenMealGroups(tmp);
                                                setMealGroups([...mealGroups, mg]);
                                            } else {
                                                const tmp = [...hiddenMealGroups, mg.ID];
                                                setHiddenMealGroups(tmp);
                                                setMealGroups(ogMealGroups.filter((mg) => !tmp.includes(mg.ID)));
                                            }
                                        }}
                                    />
                                    <span>{mg.MealGroup}</span>
                                </label>
                            ))}
                            <button
                                onClick={() => {
                                    setShowDevMenu(false);
                                    setDevMenuClickCounter(0);
                                }}
                                className="p-6 bg-blue-500 text-white rounded-full"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )
        ];
    }


    if (loading) {
        return (
            <div className="min-w-full min-h-screen flex flex-col items-center justify-center bg-black">
                <img className=" preload-me pb-4"
                     src="https://golden-lobster.com/wp-content/uploads/2024/07/logo-web-transparent.png"
                     srcSet="https://golden-lobster.com/wp-content/uploads/2024/07/logo-web-transparent.png 185w"
                     width="140" height="140"  alt="Golden Lobster"/>
                <h1 className="pb-4 text-white">Loading menu...</h1>
                <CircularProgress size="4rem" />
            </div>
        );
    }

    return (
        <div className="min-w-full min-h-screen"
             style={{backgroundColor: numberToRGBAString(menuSetUp.BackgroundColor)}}>
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
            {renderDevMenu()}
        </div>
    );






}


const InteractiveMenuNoSSR = dynamic(() => Promise.resolve(InteractiveMenu), { ssr: false })
export default InteractiveMenuNoSSR
