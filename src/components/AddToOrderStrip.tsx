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

    const renderHText = (o: any, text: any, strike: boolean = false) => {
        const container = parseBasic(o, null);
        const positionStyle = {
            marginLeft: container.left,
            width: container.width,
            marginBottom: vh(o?.BottomSpace ?? 0, null )
        }


        return (
            <div key={text} style={{ textAlign: container.textAlign, font: container.font.font, color: container.font.color, ...positionStyle, ...(strike ? { textDecoration: 'line-through' } : {}) }}>
                <p>{text}</p>
            </div>
        );
    }

    const renderPrice = (o: any, text: any) => {
        const isPriceTitleLine = !!o?.TitleLine && o?.TitleLine == 'True';

        const float = parseFloat(text);
        console.log('float', float)

        // format price in format OMR 0.000
        const formattedPrice = `OMR ${float.toFixed(3)}`;

        if (!isPriceTitleLine) return renderHText(o, formattedPrice);


        const container = parseBasic(o, null);
        return (
            <div style={{ position: 'absolute', top: 0, left: container.left, width: container.width, height: container.height, textAlign: container.textAlign, font: container.font.font, color: container.font.color }} key={text}>
                <p>{formattedPrice}</p>
            </div>
        );
    }

    const renderSingleMeal = (o: any, idx: number, meal: DBT_Meals, variants: DBT_Variants[]) => {

        return (
            <div key={idx} style={{
                marginTop: idx == 0 ? vh(o?.FoodComponent?.FirstTopSpace, null) : 0,
                marginBottom: vh(o?.FoodComponent?.BlockBottomSpace ?? 0, null),
                position: 'relative'
            }}>
                <a onClick={() => setSelectedMealId(meal.ID)} style={{ cursor: 'pointer' }}>
                {renderHText(o.FoodComponent?.Title, meal.Meal)}
                </a>
                {renderHText(o.FoodComponent?.Description, meal.MealDescription)}
                {variants.map((variant) => renderHText(o.FoodComponent?.Versions, variant.MealVariant, !variant.Available))}
                {renderPrice(o.FoodComponent?.Price, meal.Price)}
            </div>
        )
    }

    const renderMeals = () => {

        const render = [];

        for (let i = 0; i < meals.length; i++) {
            const meal = meals[i];
            const meal_variants = variants.filter((v) => v.ID_Meal === meal.ID);
            render.push(renderSingleMeal(mealJsonObj, i, meal, meal_variants));
        }

        return render;
    }


    return (
        <div>
            {renderMeals()}
        </div>
    );

}