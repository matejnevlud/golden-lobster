import Image from "next/image";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import { DBT_Languages } from "@prisma/client";
import { getLanguages, getLayouts, getMealGroups, getMeals, getMealsInGroups, getMenuSetUp, getVariants, prisma } from "@/db";
import InteractiveMenu from "@/app/menu/InteractiveMenu";

const DEMO_XML_HEAD = `
<?xml version="1.0" encoding="utf-8" ?>

<Head>
    <Logo>
        <Left> 1 </Left>
        <Top> 1 </Top>
        <Width> 3.5 </Width>
        <Height> 3.5 </Height>
    </Logo>

    <LanguageBar>
        <Left> 80.5 </Left>
        <Top> 1 </Top>
        <Width> 18.5 </Width>
        <TextAlignment> Right </TextAlignment>
        <Font>
            <Name> "Segoe UI" </Name>
            <Size> 3 </Size>
            <Bold> True </Bold>
            <Italic> True </Italic>
            <Underline> False </Underline>
            <StrikeOut> False </StrikeOut>
            <Color> ARGB(100,100,100,100) </Color>
        </Font>
    </LanguageBar>

    <MealGroups>
        <Left> 1.5 </Left>
        <Top> 10 </Top>
        <Width> 95.5 </Width>
        <TextAlignment> Middle </TextAlignment>
        <Font>
            <Name> "Segoe UI" </Name>
            <Size> 2 </Size>
            <Bold> True </Bold>
            <Italic> False </Italic>
            <Underline> False </Underline>
            <StrikeOut> False </StrikeOut>
            <Color> ARGB(100,100,100,100) </Color>
        </Font>
        <Background>
            <Color> ARGB(255,0,230,100) </Color>
        </Background>
    </MealGroups>

    <HeaderText>
        <Left> 23.5 </Left>
        <Top> 1 </Top>
        <Width> 13.5 </Width>
        <TextAlignment> Middle </TextAlignment>
        <Font>
            <Name> Segoe UI </Name>
            <Size> 2 </Size>
            <Bold> True </Bold>
            <Italic> False </Italic>
            <Underline> False </Underline>
            <StrikeOut> False </StrikeOut>
            <Color> ARGB(100,100,100,100) </Color>
        </Font>
    </HeaderText>

    <FooterText>
        <Left> 34.5 </Left>
        <Top> 96 </Top>
        <Width> 13.5 </Width>
        <TextAlignment> Middle </TextAlignment>
        <Font>
            <Name> "Segoe UI" </Name>
            <Size> 2 </Size>
            <Bold> True </Bold>
            <Italic> False </Italic>
            <Underline> False </Underline>
            <StrikeOut> False </StrikeOut>
            <Color> ARGB(100,100,100,100) </Color>
        </Font>
    </FooterText>

    <Workspace>
        <Left> 2.5 </Left>
        <Top> 20 </Top>
        <Width> 95 </Width>
        <Height> 70 </Height>
    </Workspace>

</Head>
`


const LANGUAGES: DBT_Languages[] = [
    { ID: 1, DisplayText: "English", Language: "en" },
    { ID: 2, DisplayText: "Deutsch", Language: "de" },
    { ID: 3, DisplayText: "Français", Language: "fr" },
]



export default async  function Menu() {


    const languages = await getLanguages();
    const layouts = await getLayouts();
    const mealGroups = await getMealGroups();
    const meals = await getMeals();
    const mealsInGroups = await getMealsInGroups();
    const variants = await getVariants();
    const menuSetUp = await getMenuSetUp();
    const headLayout = layouts.find((layout) => layout.Type === "Head");






    return (
        <main className="min-h-screen min-w-full">
            <InteractiveMenu {...{ languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp }} />
        </main>
    );
}
