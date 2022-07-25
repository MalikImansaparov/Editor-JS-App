import {editor} from "./index.";
import * as docx from "docx";

export const generateParagraph = () => {
  editor.save().then((outputData) => {
    outputData.blocks.map((item) => {
      if (item.type === 'paragraph') {
       const res = new docx.Paragraph(item.data.text);
       console.log(res);
       return res;
      }
    });
  });
};
