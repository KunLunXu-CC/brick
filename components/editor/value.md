const useStateHook = props => {
  const dispatch = useDispatch();

  const editorBodyRef = useRef(null);

  const article = useSelector(state => {
    const articles = _.get(state, 'editor.articles');
    return articles.find(v => v.id === props.work.article);
  });

  const immutable = useMemo(() => ({
    codeMirror: null,
  }), []);

  // 保存
  const onSave = async () => {
    const content = immutable.codeMirror.getValue();
    dispatch({
      id: article.id,
      body: { content },
      type: 'editor/updateArticle',
    });
  };

  // 监听 ctrl + s
  const onKeyDown = event => {
    const downCtrrl = event.ctrlKey || event.metaKey;
    if (event.keyCode !== 83 || !downCtrrl) {
      return false;
    }
    event.preventDefault();
    onSave();
  };

  // 上传图片
  const uploadPhone = async ({ file }) => {
    const data = await uploadPhotos({
      files: [file],
      payload: article.id,
      spin: SPIN_CODE.APP_EDITOR,
      type: PHOTO_TYPE.ARTICLE.VALUE,
    });
    const url = _.get(data, '[0].url', '');
    url && immutable.codeMirror.replaceSelection(`![插入图片](${url})`);
  };

  // 上传： 统一处理上传操作
  const onUpload = file => {
    const handlers = [
      { test: /^image\/.*/ig, fun: uploadPhone },
    ];
    const hande = handlers.find(v => (v.test.test(file.type)));
    hande && hande.fun({ file });
  };

  // 监听粘贴动作: 实现图片的粘贴上传
  const onPaste = event => {
    if (!event.clipboardData || !event.clipboardData.items) {
      return false;
    }
    const [item] = event.clipboardData.items;
    item.kind === 'file' && onUpload(item.getAsFile());
  };

  // 监听拖动事件(注意和 onDrap 区分开)：实现图片的粘贴拖拽上传
  const onDrop = event => {
    event.preventDefault();
    const file = _.get(event, 'dataTransfer.files.[0]', null);
    file && onUpload(file);
  };

  // 内容改变
  const onChange = useCallback(() => {
    const content = immutable.codeMirror.getValue();
    dispatch({
      work: { content },
      type: 'editor/setWork',
      article: props.work.article,
    });
  }, [props.work]);

  // 初始化 codeMirror
  useEffect(() => {
    if (!immutable.codeMirror) {
      immutable.codeMirror = codeMirror(editorBodyRef.current, {
        tabSize: 2,
        indentUnit: 2,
        mode: 'markdown',
        lineNumbers: true,
        lineWrapping: true,
        theme: 'oceanic-next',
        cursorScrollMargin: 200, // 该参数受限于 .CodeMirror-lines padding 值
        value: article.content || '',
      });
      immutable.codeMirror.on('change', onChange);
    }
  }, [article, immutable, onChange]);

  return { editorBodyRef, onKeyDown, onPaste, onDrop };
};
