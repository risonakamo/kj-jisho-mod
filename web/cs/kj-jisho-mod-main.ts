import {searchPageHide, wordPageLinkShortcuts} from "@/lib/jisho";

function main():void
{
    console.log("applying search page mods");
    searchPageHide();

    console.log("applying word page mods");
    wordPageLinkShortcuts();
}

main();