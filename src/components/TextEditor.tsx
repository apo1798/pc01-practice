// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* eslint-disable @typescript-eslint/promise-function-async */
import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Controller, type UseFormRegister } from 'react-hook-form';

import { type Editor as TinyMceEditor } from 'tinymce';
import { type FormValuesType } from '@/src/components/page/Index';

// Dynamically imports tinymce, making only available in client side
const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor) as any,
  {
    ssr: false,
    loading: () => <div className="py-64 text-center">🤖 編輯器載入中...</div>
  }
);

type Props = {
  register: UseFormRegister<FormValuesType>;
};

const TextEditor = ({ register, control }: Props) => {
  const editorRef = useRef<TinyMceEditor>(null);
  const formIsReset = useRef(false);

  // 為了解決 onEditorChange 編譯 HTML entity 導致 form 變成 dirty,但如果進來的 html 不需要轉譯時，又會導致 resetForm 被呼叫，因此在這再加上 useEffect。在時間內就限制 restform 不能被觸發。
  // useEffect(() => {
  //   if (formIsReset.current) return;
  //   const timer = setTimeout(() => {
  //     formIsReset.current = true;
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div>
      <Controller
        name="pageHtml"
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <>
              <Editor
                tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
                // make mce package available on our package
                apiKey={process.env.TINYMCE_API_KEY}
                onInit={(_, editor) => (editorRef.current = editor)}
                // value={values.descriptionHtml}
                onEditorChange={(value) => {
                  console.log(value);
                  onChange(value);
                  // setFieldValue('descriptionHtml', value);
                  // if (formIsReset.current) return;
                  // resetForm();
                  // formIsReset.current = true;
                }}
                init={{
                  entity_encoding: 'raw',
                  height: 600,
                  menubar: false,
                  plugins: [
                    'codesample',
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount'
                  ],
                  toolbar:
                    'undo redo | blocks |  ' +
                    'bold italic forecolor backcolor image link preview | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent code | ' +
                    'removeformat wordcount help ',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};
export default TextEditor;

// [Elegance of dynamic imports in TypeScript](https://github.com/vercel/next.js/issues/4515)
// [Self hosted TinyMCE 6.x in NextJS 12.x - Javascript version](https://iiiyu.com/2022/08/28/self-hosted-tinymce-6-x-in-nextjs-12-x-javascript-version/)
