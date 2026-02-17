//selecting elements in the html
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        //create a list elelement that will hold each entry's chapter
        const liElement = document.createElement("li");


        //create a delete button
        const deleteButton = document.createElement("button");

        //populating the list element into input
        //we takE what the typed in the input box to be the text of list element
        liElement.textContent = input.value;

        // the delete button must have this sign
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

         //append delete button to the list item
        liElement.append(deleteButton)

        //appending the the liElement to the unordered list
        list.append(liElement);

        //ADDEVENT BUTTON FOR DELETEBUTON
        deleteButton.addEventListener("click", function () {
            list.removeChild(liElement);
            input.focus();
        });

        //CLEARS THE INPUT AFTER ADDING 
        input.value = '';

        //FOCUS BACK TO THE INPUT ALWAYS
        input.focus();
    }

    });