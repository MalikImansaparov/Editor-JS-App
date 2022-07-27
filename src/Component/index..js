import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import {Document, Packer, Paragraph, TextRun, Header, HeadingLevel, AlignmentType} from 'docx';
import { saveAs } from 'file-saver';
import {generateHeader, generateImage, generateParagraph} from './utils';
import * as docx from 'docx';

export const editor = new EditorJS(Configuration());

const generateWordDocument = async () => {
  const data = await generateParagraph();
  const header = await generateHeader();
  const image = await generateImage();
  console.log('data', data);

  const doc = new Document({
    sections: [
      {
          headers: {
              default: new Header({
                  children: [
                      new docx.Paragraph({
                          children: [...header.map(i => new TextRun({
                              text: i.data.text,
                              bold: true,
                              heading: HeadingLevel.TITLE,
                              alignment: AlignmentType.CENTER,
                              pageBreakBefore: true,
                          } ))],
                      }),
                  ],
              }),
          },
        children: [
          new docx.Paragraph({
            children: [...data.map(i => new docx.Paragraph(i.data.text ))],
          }),
            new Paragraph({
                children: [image],
            }),
        ],

      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'example.docx');
    console.log('Document created successfully');
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
