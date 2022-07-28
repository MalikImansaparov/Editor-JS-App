import React from 'react';
import {Document, Paragraph, TextRun, Header, HeadingLevel, AlignmentType} from 'docx';
import { saveAs } from 'file-saver';
import * as docx from 'docx';
import {editor} from "./editor";

const Editor = () => {
  const onSave = () => {
    editor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);

          const doc = new Document({
            sections: [
              {
                children: outputData.blocks.map((e) => {
                  console.log(e);
                  switch (e.type) {
                    case "paragraph":
                      let data = e.data.text.split(/(<b>|<\/b>)/).filter((u) => u !== '</b>');
                      let children = []

                      for (let i = 0; i < data.length - 1; i++) {
                        if (data[i] === "<b>") {
                          children.push(new TextRun({
                            text: data[i + 1],
                            bold: true
                          }))
                          console.log('c', children)
                          i += 1;
                        } else {
                          children.push(new TextRun({
                            text: data[i],
                          }))
                        }
                      }
                      if (data[data.length - 2] !== "<b>") {
                        children.push(new TextRun({
                          text: data[data.length - 1],
                        }))
                      }

                      return new Paragraph({
                        children,
                      })

                    default:
                      return new Paragraph({
                        children: [
                          new TextRun({
                            text: "NOT IMPLEMENT",
                            bold: true,
                          }),
                        ]
                      });
                  }
                }),
              },
            ],
          });

          docx.Packer.toBlob(doc).then((blob) => {
            saveAs(blob, 'example.docx');
            console.log('Document created successfully');
          });
        })
        .catch((error) => {
          console.log('Saving failed: ', error);
        });
  };

  return (
      <div>
        <h1>My Editor</h1>
        <button onClick={onSave}>Download</button>
        <div id="editorjs" />
      </div>
  );
};

export default Editor;
