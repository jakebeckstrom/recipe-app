

// const ingredientsRe = new RegExp("^[0-9].*");


// export const formatRecipe = ({name, text}) => {
//     const lines = getLines(text)
//     // console.log(lines)
//     console.log(lines.length)
//     var stage = "start";
//     for (var i = 0; i < lines.length; i++) {
//         switch (stage) {
//             case "start":
//                 if (ingredientsRe.test(lines[i])) {
//                     stage = "ingredients";
//                 }
//                 break;
//             case "ingredients":
//                 parseIngredientLine(lines[i])
//         }
//     }
// }

// const getLines = (text) => {
//     var textLines = text.split("\n");
//     textLines = textLines.map((line) => {
//         return line.trim();
//     })
//     textLines = textLines.filter((line) => {
//       return line !== ""
//     })
//     return textLines;
// }

// const parseIngredientLine = (line) => {
//     let amountRe = RegExp("[0-9/-]")
//     let i = 1;
//     while (amountRe.test(line[i])) {
//         amountRe = RegExp("[0-9/ -]")
//         i++;
//     }
//     console.log(i)
//     const amount = line.substring(0,i)
//     var rest = line.substring(i)
//     console.log(amount)
//     console.log(rest)
// }