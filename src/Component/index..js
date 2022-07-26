import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { generateParagraph } from './utils';
import * as docx from 'docx';

export const editor = new EditorJS(Configuration());

const generateWordDocument = async () => {
  let doc;
  const paragraph = await generateParagraph();
  console.log('paragraph', paragraph);

  // const paragraph = paragraph.map(i => i.data.text)
  // console.log('paragraph', paragraphElem)

  for(let i=0; i<paragraph.length; i++){
    console.log('paragraphElement-----', paragraph[i].data.text)

    doc = new docx.Document({
      sections: [
        {
          properties: {},
          children: [
            new docx.Paragraph({
              children: [ new TextRun( `${paragraph[i].data.text}`)],
            }),
          ],
        },
      ],
    });
  }


  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'example.docx');
  });
};

const Editor = () => {
  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
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
