
//留言数据对象
const comments = [
  {
    name: 'Danny',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    time: 'Thu Jan 12 2022'
  },
  {
    name: 'Jackson',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    time: 'Thu Jan 11 2022'
  }
];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = () => {
  let mycomments = document.getElementById('comments');
  while (mycomments.firstChild) {
    mycomments.removeChild(mycomments.firstChild);
  }//移除所有子节点
  comments.forEach(item => {
    mycomments.insertAdjacentHTML('beforeend', `<hr />
<h4>
  <span>${item.name}</span>
  <span class="date">${item.time}</span>
</h4>
<p>${item.comment}</p>
`);
  });
}

// 调用
renderComments();

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = () => {
  let date = new Date();
  let myname = document.getElementById('name');
  let mycomment = document.getElementById('comment');
  myname.textContent = myname.value;
  mycomment.textContent = mycomment.value;
  comments.unshift({
    name: myname.textContent,
    comment: mycomment.textContent,
    time: date.toDateString()
  });
  renderComments();
}


/**
 * @description 切换关闭留言和开启留言两种模式
 */
const toggleComment = () => {
  let myname = document.getElementById('name');
  let mycomment = document.getElementById('comment');
  let closeButton = document.querySelector(".close");
  let submitButton = document.querySelector("form button");
  [myname.disabled, mycomment.disabled, submitButton.disabled] = [!myname.disabled, !mycomment.disabled, !submitButton.disabled];
  closeButton.textContent = myname.disabled ? '开启留言' : '关闭留言';
}
