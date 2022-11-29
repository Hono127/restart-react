/*  eslint react-hooks/exhaustive-deps: off  */
// 上記文でeslintのエラー検知をオフにしてくれる
import React, { useEffect, useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage';

// ファイルの中身がコンポーネントだよと明示する場合はファイルの拡張子はjsxにする
const AppSample = () => {
  const [num, setNum] = useState(0);
  const [faceShowFalg, setFaceShowFlag] = useState(false);
  const onClickCountButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFalg);
  }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFalg || setFaceShowFlag(true) //  ||は左側の式がfalseだったら右側の処理を走らせる
      } else {
        faceShowFalg && setFaceShowFlag(false) //  &&は左側の式がtrueだったら右側の処理を走らせる
      }
    }
    //eslintオフの記述は一文のみへの適用も可能
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);// 変数をセットすると、セットした変数が変化したときにのみ、処理が走る



  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!!</h1>
      <p style={contentStyle}>ハロー！！</p>
      <ColorfulMessage color="blue"> お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です" />

      <button onClick={onClickCountButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFalg && <p>(#^.^#)</p>}
    </>
  )

}

export default AppSample;