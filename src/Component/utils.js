import * as docx from "docx";
import {editor} from "./editor";

export const generateParagraph = () => {
    return editor.save().then((outputData) => {
        return outputData.blocks.filter((item) => {
            if (item.type === "paragraph") {
                const res = new docx.Paragraph(item);
                console.log(res)
                return res;
            }
        });
    });
};

export const generateHeader = () => {
    return editor.save().then((outputData) => {
        return outputData.blocks.filter((item) => {
            if (item.type === "header") {
                const res = new docx.Paragraph(item);
                console.log(res)
                return res;
            }
        });
    });
};

export const generateImage = () => {
    return editor.save().then((outputData) => {
        return outputData.blocks.filter((item) => {
            if (item.type === "image") {
                const res = new docx.Paragraph(item);
                console.log(res)
                return res;
            }
        });
    });
};



