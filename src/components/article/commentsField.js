import getAllComments from './getAllComments';

export default async (e) => {
  let comments = await getAllComments(id);
  const commentsField = document.createElement('div');

  commentsField.appendChild(outputList);
  commentsField.style.width = '600px';
  commentsField.style.height = '600px';
  commentsField.style.marginTop = '-650px';
  commentsField.style.marginLeft = '-60px';
  commentsField.style.border = '1px solid grey';
  commentsField.style.borderRadius = '5px';
  commentsField.style.zIndex = '2';
  commentsField.style.position = 'relative';
  commentsField.style.backgroundColor = 'whitesmoke';
  // body.style.overflow = 'hidden';
  currentComments.appendChild(commentsField);

  commentsField.onclick = () => {
    body.style.overflow = 'visible';
    commentsField.style.display = 'none';
  };
};
