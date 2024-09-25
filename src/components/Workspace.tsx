'use client'


import { DBT_Languages, DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Variants } from "../../generated/prisma-client";
import { XMLParser } from "fast-xml-parser";
import { parseBasic, vh } from "@/utils/xmlParser";
import Image from "next/image";
import { base64DataUri, numberToRGBAString } from "@/utils/utils";
import { Component, createRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';


const Eye = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        viewBox="0 0 24 24"
        width={20}
        {...props}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill={props.color ?? 'black'} d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
);

class SizeableAcko extends Component {

    divRef = createRef(null);

    componentDidMount() {
        const meal = this.props.meal as DBT_Meals;
        const mealGroup = this.props.mealgroup as DBT_MealGroups;
        const idx = this.props.idx as number;
        const div = this.divRef.current;
        if (div) {
            const rect = div.getBoundingClientRect();
            //console.log('mealDidMount', meal, mealGroup, rect)
            if (rect.height > 0 && meal.Meal != ' ')
                localStorage.setItem(`mg_${mealGroup?.ID}_m_${meal.ID}_idx_${idx}`, rect.y.toString());
        }

    }


    render() {

        return (
            <a ref={this.divRef} {...this.props} />
        )
    }
}

export type WorkspaceProps = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroup: DBT_MealGroups
    variants: DBT_Variants[]
    setSelectedMealId: (id: bigint | null) => void
}
export default function Workspace(props: WorkspaceProps) {

    const { setSelectedMealId, languages, layouts, meals, mealGroup, variants } = props;

    const headLayout = layouts.find((layout) => layout.Type == "Head");
    const mealGroupLayout = layouts.find((layout) => layout.ID == mealGroup?.ID_Layout);


    const parser = new XMLParser({ ignoreAttributes: false });
    let mealJsonObj = parser.parse(mealGroupLayout?.Xml ?? "");
    let headJsonObj = parser.parse(headLayout?.Xml ?? "");
    console.log('mealGroupLayout headJsonObj', mealJsonObj)
    // delete all mg_ keys from local storage
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('mg_')) {
            localStorage.removeItem(key);
        }
    });
    const renderMealNameText = (o: any, text: any, strike: boolean, meal: DBT_Meals) => {
        const container = parseBasic(o, null);
        const positionStyle = {
            marginLeft: container.left,
            width: container.width,
            marginBottom: vh(o?.BottomSpace ?? 0, null)
        }

        if (!text) return null;

        const showEye = meal.PictureDescription || meal.Picture

        return (
            <div key={text} style={{ textAlign: container.textAlign, font: container.font.font, color: container.font.color, ...positionStyle, ...(strike ? { textDecoration: 'line-through' } : {}) }}>
                {showEye && <Eye style={{ position: 'absolute', marginLeft: '-32px' }} color={container.font.color} />}
                <p>{text}</p>
            </div>
        );
    }
    const renderHText = (o: any, text: any, strike: boolean = false) => {
        const container = parseBasic(o, null);
        const positionStyle = {
            marginLeft: container.left,
            width: container.width,
            marginBottom: vh(o?.BottomSpace ?? 0, null)
        }

        if (!text) return null;

        return (
            <div key={text} style={{ textAlign: container.textAlign, font: container.font.font, color: container.font.color, ...positionStyle, ...(strike ? { textDecoration: 'line-through' } : {}) }}>
                <p>{text}</p>
            </div>
        );
    }

    const renderPrice = (o: any, text: any) => {
        const isPriceTitleLine = !!o?.TitleLine && o?.TitleLine == 'True';

        const float = parseFloat(text);

        if (!text || isNaN(float)) return null;

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
                <SizeableAcko
                    key={`mg_${mealGroup?.ID}_m_${meal.ID}_idx_${idx}_lang_${localStorage.getItem('language')}`}
                    onClick={() => setSelectedMealId(meal.ID)}
                    style={{ cursor: 'pointer' }}
                    className={"mealName"}
                    meal={meal}
                    mealgroup={mealGroup}
                    idx={idx}
                >
                    {renderMealNameText(o.FoodComponent?.Title, meal.Meal, !meal.Active || !meal.Available, meal)}
                </SizeableAcko>
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
            const meal_variants = variants.filter((v) => v.ID_Meal === meal.ID)

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
