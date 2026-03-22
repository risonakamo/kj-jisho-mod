// funcs for modding jisho site

/** insert style block to hide items on search page
 *  for use on jisho search pages https://jisho.org/search/*
 */
export function searchPageHide():void
{
    const style:HTMLStyleElement=document.createElement("style");

    style.textContent=`
        .concept_light-representation .furigana {
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .concept_light-representation:hover .furigana {
            opacity: 1;
        }

        .concept_light-meanings {
            opacity: 0;
        }

        .concept_light-meanings:hover {
            opacity: 1;
        }
    `;

    document.head.appendChild(style);
}

/** insert quick links for searching for common words of kanjis on search page */
export function wordPageLinkShortcuts():void
{
    const kanjiBoxes:NodeListOf<Element>=document.querySelectorAll(".entry");

    kanjiBoxes.forEach((kanjiBox:Element)=>{
        const kanji:string|undefined=kanjiBox.querySelector(".literal")?.textContent;

        if (!kanji)
        {
            console.log("kanji text extraction problem");
            return;
        }

        kanjiBox.insertAdjacentHTML("beforeend",`
            <a href="https://jisho.org/search/*${kanji}* #common" class="light-details_link">
                Word Search
            </a>
        `);
    });
}