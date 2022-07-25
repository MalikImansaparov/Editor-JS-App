import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { generateParagraph } from './utils';
import * as docx from 'docx';

export const editor = new EditorJS(Configuration());

const generateWordDocument = async () => {
  const item = await generateParagraph();
  console.log('i',item);
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [item],
          }),
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, 'example.docx');
    console.log('Document created successfully');
  });
}

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
//   children: [p],

const Editor = () => {
  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  };

  return (
    <div>
      <h1>My Editor</h1>
      <button onClick={onSave}>Save</button>
      <button onClick={generateWordDocument}>Download</button>
      <div id="editorjs" />
    </div>
  );
};

export default Editor;
