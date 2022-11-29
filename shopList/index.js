
//TODO:实现购物清单的添加和删除
let form = document.querySelector('form');
form.addEventListener("submit", (event) => {//阻止表单提交默认事件
  event.preventDefault();
});
let btn = document.querySelector('.btn');
let shopList = document.querySelector('#shopping-list');
let itemName = document.querySelector('#item-name');
btn.onclick = addItemToList;
function addItemToList () {
  shopList.insertAdjacentHTML('afterbegin', `<li>
<p>${itemName.value}</p>
<button>删除</button>
</li>`);
  itemName.value = '';
}
//事件委托
shopList.onclick = removeItemFromList;

function removeItemFromList (e) {
  let li = e.target.closest('li');
  if (!li) return;
  if (!shopList.contains(li)) return;
  li.remove();
}
