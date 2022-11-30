// 入力された値を取得して初期化
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // 追加ボタンを押したらテキストを消す
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  // class名付与
  li.className = "list_item";

  // pタグ生成
  const p = document.createElement("p");
  // pタグの中身の設定
  p.innerText = inputText;
  // class名付与
  p.className = "list_name";

  // liタグの中にpタグを生成するよう設定
  li.appendChild(p);

  // ulタグの中にliタグを生成するよう設定
  document.getElementById("inComplete_list").appendChild(li);

  // buttonタグ（完了ボタン）の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // buttonタグ（削除ボタン）の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // liタグの中にpタグとbutton2個生成
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 完了ボタンを押したらliタグごと消す関数
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode; // <li class="list_item"></li>これを指している
    const text = addTarget.firstElementChild.innerText; // <p class="list_name">TODOです</p>これを取得してる

    addTarget.textContent = null; // li以下を初期化

    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button"); //ボタンタグの生成
    backButton.innerText = "戻す";

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    // console.log(addTarget);
    document.getElementById("complete_list").appendChild(addTarget);
  });

  // 削除ボタンを押したらliタグごと消す
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 未完了のリストから削除する機能
  const deleteFromIncompleteList = (target) => {
    document.getElementById("inComplete_list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
