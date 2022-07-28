import CustomVariable from './Editor/custom-variable';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Link from '@editorjs/link';
import ImageTool from '@editorjs/image';

const Configuration = () => {
  return {
    holder: 'editorjs',
    autofocus: true,

    tools: {
      paragraph: {
        config: {
          placeholder: 'Enter something',
        },
      },

      variable: {
        class: CustomVariable,
        inlineToolbar: true,
      },

      header: {
        class: Header,
        inlineToolbar: ['link'],
        config: {
          placeholder: 'Header',
        },
        shortcut: 'CMD+SHIFT+H',
      },

      image: ImageTool,

      list: {
        class: List,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L',
      },

      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },

      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: "Quote's author",
        },
        shortcut: 'CMD+SHIFT+O',
      },

      warning: Warning,

      marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M',
      },

      // code: {
      //   class: CodeTool,
      //   shortcut: 'CMD+SHIFT+C',
      // },

      delimiter: Delimiter,

      linkTool: Link,

      embed: Embed,

      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T',
      },
    },

    /**
     * Internationalzation config
     */
    i18n: {
      messages: {
        ui: {
          blockTunes: {
            toggler: {
              'Click to tune': 'Нажмите, чтобы настроить',
              'or drag to move': 'или перетащите',
            },
          },
          inlineToolbar: {
            converter: {
              'Convert to': 'Конвертировать в',
            },
          },
          toolbar: {
            toolbox: {
              Add: 'Добавить',
            },
          },
        },

        /**
         * Section for translation Tool Names: both block and inline tools
         */
        toolNames: {
          Text: 'Параграф',
          Heading: 'Заголовок',
          List: 'Список',
          Warning: 'Примечание',
          Checklist: 'Чеклист',
          Quote: 'Цитата',
          Code: 'Код',
          Delimiter: 'Разделитель',
          'Raw HTML': 'HTML-фрагмент',
          Table: 'Таблица',
          Link: 'Ссылка',
          Marker: 'Маркер',
          Bold: 'Полужирный',
          Italic: 'Курсив',
          InlineCode: 'Моноширинный',
          Image: 'Изображения',
          Ordered: 'Упорядоченный',
          Unordered: 'Неупорядоченный',
          Filter: 'Филтрация',
          CustomVariable: 'Переменный',
        },

        /**
         * Section for passing translations to the external tools classes
         */
        tools: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
           * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
           */
          warning: {
            // <-- 'Warning' tool will accept this dictionary section
            Title: 'Название',
            Message: 'Сообщение',
          },

          /**
           * Link is the internal Inline Tool
           */
          link: {
            'Add a link': 'Вставьте ссылку',
          },
          /**
           * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
           */
          stub: {
            'The block can not be displayed correctly.':
              'Блок не может быть отображен',
          },
        },

        /**
         * Section allows to translate Block Tunes
         */
        blockTunes: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
           * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
           *
           * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
           */
          ordered: {
            Ordered: 'Упорядоченный',
          },
          unordered: {
            Unordered: 'Неупорядоченный',
          },
          delete: {
            Delete: 'Удалить',
          },
          moveUp: {
            'Move up': 'Переместить вверх',
          },
          moveDown: {
            'Move down': 'Переместить вниз',
          },
        },
      },
    },

    data: {
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Editor.js',
            level: 2,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.',
          },
        },
        {
          type: 'header',
          data: {
            text: 'Key features',
            level: 3,
          },
        },
        {
          type: 'list',
          data: {
            items: [
              'It is a block-styled editor',
              'It returns clean data output in JSON',
              'Designed to be extendable and pluggable with a simple API',
            ],
            style: 'unordered',
          },
        },
        {
          type: 'header',
          data: {
            text: 'What does it mean «block-styled editor»',
            level: 3,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: `There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.`,
          },
        },
        {
          type: 'header',
          data: {
            text: 'What does it mean clean data output',
            level: 3,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: `Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.`,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Clean data is useful to sanitize, validate and process on the backend.',
          },
        },
        {
          type: 'delimiter',
          data: {},
        },
        {
          type: 'paragraph',
          data: {
            text: 'We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make its core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏',
          },
        },
      ],
    },
  };
};

export default Configuration;
