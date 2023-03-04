function waitForElementToDisplay(selector, time) {
    if (document.getElementsByClassName(selector) != null) {
        const height = 72;
        var chatList = document.querySelector('[data-testid="chat-list"]');

        var myElement = Array.from(document.getElementsByClassName("_3YS_f _2A1R8"));

        if (myElement[0] != undefined) {


            console.log(myElement.at(0))
            const childLength = (myElement.at(0).childNodes.length);
            var newChat = myElement.at(0).lastChild.cloneNode(true);
            myElement.at(0).setAttribute("aria-rowcount", (childLength + 1));
            myElement.at(0).style = "height: " + (childLength + 1) * height + "px";

            newChat.style = myElement.at(0).lastChild.style.cssText;

            newChat.setAttribute("data-testid", "list-item-" + (childLength));

            if (newChat.getElementsByClassName("tvf2evcx gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr").length != 0) {
                newChat.getElementsByClassName("tvf2evcx gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr")[0].innerText = "Test3333";
                newChat.getElementsByClassName("ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr")[0].innerText = "Test333334";
            } else {
                newChat.getElementsByClassName("ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr")[0].innerText = "Test3333";
                newChat.getElementsByClassName("ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr")[1].innerText = "Test333334";
            }

            newChat.style = "z-index: " + (childLength + 1) + "; transition: none 0s ease 0s; height: 72px; transform: translateY(" + (72 * (childLength)) + "px);";

            myElement.at(0).appendChild(newChat);


            ItemControl(myElement);
            ItemControl(myElement);


        } else {
            setTimeout(function () {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }
}

waitForElementToDisplay(
    "ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr",
    100
);



function ItemControl(myElement) {
    for (const item of myElement.at(0).children) {
        const t = item.querySelector('[data-testid="chatlist-status-v3-ring"]');

        console.log(t);
        if (t != null || t != undefined) {
            item.remove();
        }
    }
}