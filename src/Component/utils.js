import { editor } from "./index.";
import * as docx from "docx";

export const generateParagraph = () => {
    return editor.save().then((outputData) => {
        return outputData.blocks.filter((item) => {
            if (item.type === "paragraph") {
                const res = new docx.Paragraph(item);
                return res;
            }
        });
    });
};


// function generateWordDocument() {
//   const doc = new Document({
//     creator: 'Clippy',
//     title: 'Sample Document',
//     description: 'A brief example of using docx',
//   });
//
//   const p = [];
//   editor.save().then((outputData) => {
//     outputData.blocks.map((item) => {
//       console.log(item.data);
//       // switch (item.type) {
//       //   case 'paragraph':
//       p.push(
//           new Paragraph({
//             text: `${item.data}`, // это для проверки
//           })
//       );
//       console.log(p);
//
//       //     break;
//       // }
//     });

// doc.addSection({
//   children: [p] })
