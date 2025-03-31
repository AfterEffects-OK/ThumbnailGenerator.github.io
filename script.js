(function() {
    // JavaScript コード (ここから)

    // HTML要素の取得
    const imageUpload = document.getElementById('imageUpload');
    const logoUpload = document.getElementById('logoUpload');
    // ロゴのシャドウ設定用の要素を取得
    const showLogoShadowSettingsCheckbox = document.getElementById('showLogoShadowSettingsCheckbox'); // ロゴのシャドウの表示/非表示を切り替えるチェックボックス
    const logoShadowSettingsDiv = document.getElementById('logoShadowSettings'); // ロゴのシャドウの設定項目を囲むdiv
    const logoShadowColorButtons = document.querySelectorAll('.logo-shadow-color-button'); // ロゴのシャドウの色選択ボタン
    const customLogoShadowColorInput = document.getElementById('customLogoShadowColor'); // ロゴのカスタムシャドウカラーピッカー
    const logoShadowBlurInput = document.getElementById('logoShadowBlur'); // ロゴのシャドウのぼかし
    const logoShadowOffsetXInput = document.getElementById('logoShadowOffsetX'); // ロゴのシャドウのXオフセット
    const logoShadowOffsetYInput = document.getElementById('logoShadowOffsetY'); // ロゴのシャドウのYオフセット
    const showLogoEdgeSettingsCheckbox = document.getElementById('showLogoEdgeSettingsCheckbox'); // ロゴのエッジの表示/非表示を切り替えるチェックボックス
    const logoEdgeSettingsDiv = document.getElementById('logoEdgeSettings'); // ロゴのエッジの設定項目を囲むdiv
    const logo2Upload = document.getElementById('logo2Upload');
    const logo2DropArea = document.getElementById('logo2DropArea');
    const logo2ScaleInput = document.getElementById('logo2Scale');
    const logo2XInput = document.getElementById('logo2X');
    const logo2YInput = document.getElementById('logo2Y');
    const resetLogo2Button = document.getElementById('resetLogo2Button');
    const logo2EdgeColorButtons = document.querySelectorAll('.logo-edge-color-button'); // ロゴのエッジの色選択ボタン
    const customLogo2EdgeColorInput = document.getElementById('customLogo2EdgeColor'); // ロゴのカスタムエッジカラーピッカー
    const logo2EdgeWidthInput = document.getElementById('logo2EdgeWidth'); // ロゴのエッジの太さ
    const showLogo2EdgeSettingsCheckbox = document.getElementById('showLogo2EdgeSettingsCheckbox'); // ロゴのエッジの表示/非表示を切り替えるチェックボックス
    const logo2EdgeSettingsDiv = document.getElementById('logo2EdgeSettings'); // ロゴのエッジの設定項目を囲むdiv
    const showLogo2ShadowSettingsCheckbox = document.getElementById('showLogo2ShadowSettingsCheckbox'); // ロゴのシャドウの表示/非表示を切り替えるチェックボックス
    const logo2ShadowSettingsDiv = document.getElementById('logo2ShadowSettings'); // ロゴのシャドウの設定項目を囲むdiv
    const logo2ShadowColorButtons = document.querySelectorAll('.logo-shadow-color-button'); // ロゴのシャドウの色選択ボタン
    const customLogo2ShadowColorInput = document.getElementById('customLogo2ShadowColor'); // ロゴのカスタムシャドウカラーピッカー
    const logo2ShadowBlurInput = document.getElementById('logo2ShadowBlur'); // ロゴのシャドウのぼかし
    const logo2ShadowOffsetXInput = document.getElementById('logo2ShadowOffsetX'); // ロゴのシャドウのXオフセット
    const logo2ShadowOffsetYInput = document.getElementById('logo2ShadowOffsetY'); // ロゴのシャドウのYオフセット
    const resetLogo2ShadowButton = document.getElementById('resetLogo2ShadowButton');
    const textInput1 = document.getElementById('textInput1'); // 1つ目のテキスト入力欄
    const textInput2 = document.getElementById('textInput2'); // 2つ目のテキスト入力欄
    const generateButton = document.getElementById('generateButton');
    const generateCopyButton = document.getElementById('generateCopyButton');
    const thumbnailCanvas = document.getElementById('thumbnailCanvas');
    const fontSizeInput1 = document.getElementById('fontSize1'); // 1つ目のテキストのフォントサイズ
    const fontSizeInput2 = document.getElementById('fontSize2'); // 2つ目のテキストのフォントサイズ
    const textXInput1 = document.getElementById('textX1'); // 1つ目のテキストのX座標
    const textXInput2 = document.getElementById('textX2'); // 2つ目のテキストのX座標
    const textYInput1 = document.getElementById('textY1'); // 1つ目のテキストのY座標
    const textYInput2 = document.getElementById('textY2'); // 2つ目のテキストのY座標
    const ctx = thumbnailCanvas.getContext('2d');
    const colorButtons1 = document.querySelectorAll('.color-button1'); // 1つ目のテキストの色選択ボタン
    const colorButtons2 = document.querySelectorAll('.color-button2'); // 2つ目のテキストの色選択ボタン
    const customColorInput1 = document.getElementById('customColor1'); // 1つ目のテキストのカスタムカラーピッカー
    const customColorInput2 = document.getElementById('customColor2'); // 2つ目のテキストのカスタムカラーピッカー
    const fontFamilySelect1 = document.getElementById('fontFamily1'); // 1つ目のテキストのフォント選択
    const fontFamilySelect2 = document.getElementById('fontFamily2'); // 2つ目のテキストのフォント選択
    const imageDropArea = document.getElementById('imageDropArea');
    const logoDropArea = document.getElementById('logoDropArea');
    const edgeColorButtons1 = document.querySelectorAll('.edge-color-button1'); // 1つ目のテキストのエッジの色選択ボタン
    const edgeColorButtons2 = document.querySelectorAll('.edge-color-button2'); // 2つ目のテキストのエッジの色選択ボタン
    const customEdgeColorInput1 = document.getElementById('customEdgeColor1'); // 1つ目のテキストのカスタムエッジカラーピッカー
    const customEdgeColorInput2 = document.getElementById('customEdgeColor2'); // 2つ目のテキストのカスタムエッジカラーピッカー
    const edgeWidthInput1 = document.getElementById('edgeWidth1'); // 1つ目のテキストのエッジの太さ
    const edgeWidthInput2 = document.getElementById('edgeWidth2'); // 2つ目のテキストのエッジの太さ
    const customOuterEdgeColorInput1 = document.getElementById('customOuterEdgeColor1'); // 1つ目のテキストのカスタム外側エッジカラーピッカー
    const outerEdgeWidthInput1 = document.getElementById('outerEdgeWidth1'); // 1つ目のテキストの外側エッジの太さ
    const outerEdgeColorButtons1 = document.querySelectorAll('.outer-edge-color-button1'); // 1つ目のテキストの外側エッジの色選択ボタン
    const customShadowColorInput1 = document.getElementById('customShadowColor1'); // 1つ目のテキストのカスタムシャドウカラーピッカー
    const showShadowSettingsCheckbox1 = document.getElementById('showShadowSettings1'); // シャドウ設定の表示/非表示を切り替えるチェックボックス
    const shadowSettingsDiv1 = document.getElementById('shadowSettings1'); // シャドウ設定項目を囲むdiv
    const showTextBackgroundSettingsCheckbox1 = document.getElementById('showTextBackgroundSettings1'); // テキスト背景の表示/非表示を切り替えるチェックボックス
    const textBackgroundSettingsDiv1 = document.getElementById('textBackgroundSettings1'); // テキスト背景設定項目を囲むdiv
    const shadowBlurInput1 = document.getElementById('shadowBlur1'); // 1つ目のテキストのシャドウのぼかし
    const shadowOffsetXInput1 = document.getElementById('shadowOffsetX1'); // 1つ目のテキストのシャドウのXオフセット
    const shadowOffsetYInput1 = document.getElementById('shadowOffsetY1'); // 1つ目のテキストのシャドウのYオフセット
    const shadowColorButtons1 = document.querySelectorAll('.shadow-color-button1'); // 1つ目のテキストのシャドウの色選択ボタン
    const customOuterEdgeColorInput2 = document.getElementById('customOuterEdgeColor2'); // 2つ目のテキストのカスタム外側エッジカラーピッカー
    const outerEdgeWidthInput2 = document.getElementById('outerEdgeWidth2'); // 2つ目のテキストの外側エッジの太さ
    const outerEdgeColorButtons2 = document.querySelectorAll('.outer-edge-color-button2'); // 2つ目のテキストの外側エッジの色選択ボタン
    const customShadowColorInput2 = document.getElementById('customShadowColor2'); // 2つ目のテキストのカスタムシャドウカラーピッカー
    const showShadowSettingsCheckbox2 = document.getElementById('showShadowSettings2'); // 2つ目のテキストのシャドウ設定の表示/非表示を切り替えるチェックボックス
    const shadowSettingsDiv2 = document.getElementById('shadowSettings2'); // 2つ目のテキストのシャドウ設定項目を囲むdiv
    const shadowBlurInput2 = document.getElementById('shadowBlur2'); // 2つ目のテキストのシャドウのぼかし
    const shadowOffsetXInput2 = document.getElementById('shadowOffsetX2'); // 2つ目のテキストのシャドウのXオフセット
    const shadowOffsetYInput2 = document.getElementById('shadowOffsetY2'); // 2つ目のテキストのシャドウのYオフセット
    const shadowColorButtons2 = document.querySelectorAll('.shadow-color-button2'); // 2つ目のテキストのシャドウの色選択ボタン
    const textRotationSlider1 = document.getElementById('textRotation1'); // 1つ目のテキストの回転角度
    const textRotationSlider2 = document.getElementById('textRotation2'); // 2つ目のテキストの回転角度
    const resetRotationButton1 = document.getElementById('resetRotationButton1'); // 1つ目のテキストの回転リセットボタン
    const resetRotationButton2 = document.getElementById('resetRotationButton2'); // 2つ目のテキストの回転リセットボタン
    const showStylePanel = document.getElementById('showStylePanel'); // スタイルパネルの表示/非表示を切り替えるチェックボックス
    const textPresetPanel = document.getElementById('textPresetPanel'); // スタイルプリセットパネルを囲むdiv
    const showStylePanelButton = document.getElementById('showStylePanelButton');
    // テキストの背景色選択ボタンのイベントリスナー
    const textBackgroundColorButtons1 = document.querySelectorAll('.text-background-color-button1'); // 1つ目のテキストの背景色選択ボタン
    const textBackgroundColorButtons2 = document.querySelectorAll('.text-background-color-button2'); // 2つ目のテキストの背景色選択ボタン
    const customTextBackgroundColorInput1 = document.getElementById('customTextBackgroundColor1'); // 1つ目のテキストのカスタム背景カラーピッカー
    const customTextBackgroundColorInput2 = document.getElementById('customTextBackgroundColor2'); // 2つ目のテキストのカスタム背景カラーピッカー
    const textBackgroundOpacityInput1 = document.getElementById('textBackgroundOpacity1'); // 1つ目のテキストの背景の不透明度
    const textBackgroundOpacityInput2 = document.getElementById('textBackgroundOpacity2'); // 2つ目のテキストの背景の不透明度
    const textBackgroundWidthInput1 = document.getElementById('textBackgroundWidth1'); // 1つ目のテキストの背景の幅
    const textBackgroundWidthInput2 = document.getElementById('textBackgroundWidth2'); // 2つ目のテキストの背景の幅
    const textBackgroundHeightInput1 = document.getElementById('textBackgroundHeight1'); // 1つ目のテキストの背景の高さ
    const textBackgroundHeightInput2 = document.getElementById('textBackgroundHeight2'); // 2つ目のテキストの背景の高さ
    const textBackgroundPaddingInput1 = document.getElementById('textBackgroundPadding1'); // 1つ目のテキストの背景のパディング
    const textBackgroundPaddingInput2 = document.getElementById('textBackgroundPadding2'); // 2つ目のテキストの背景のパディング
    // 画像のスケールと位置調整用のスライダーを取得
    const imageScaleInput = document.getElementById('imageScale');
    const imageXInput = document.getElementById('imageX');
    const imageYInput = document.getElementById('imageY');
    const resizeImageButton = document.getElementById('resizeImageButton');
    // 動画関連の要素を取得
    const videoDropArea = document.getElementById('videoDropArea');
    const videoUpload = document.getElementById('videoUpload');
    const videoFrameSliderContainer = document.getElementById('videoFrameSliderContainer');
    const videoFrameSlider = document.getElementById('videoFrameSlider');
    const resetVideoButton = document.getElementById('resetVideoButton');
    const uploadedVideo = document.getElementById('uploadedVideo');
    const videoSizeSliderContainer = document.getElementById('videoSizeSliderContainer');
    const videoSizeSlider = document.getElementById('videoSizeSlider');
    const videoXSliderContainer = document.getElementById('videoXSliderContainer');
    const videoXSlider = document.getElementById('videoXSlider');
    const videoYSliderContainer = document.getElementById('videoYSliderContainer');
    const videoYSlider = document.getElementById('videoYSlider');
    const videoEdgeSettings = document.getElementById('videoEdgeSettings');
    const customVideoEdgeColor = document.getElementById('customVideoEdgeColor');
    const videoEdgeWidthSliderContainer = document.getElementById('videoEdgeWidthSliderContainer');
    const videoEdgeWidthSlider = document.getElementById('videoEdgeWidthSlider');
    // 動画のリセットボタンとリサイズボタンのコンテナを取得
    const videoButtonContainer = document.querySelector('.video-button-container');
    // 動画のリサイズボタンを取得
    const resizeVideoButton = document.getElementById('resizeVideoButton');    
    // ロゴのスケールと位置調整用のスライダーを取得
    const logoScaleInput = document.getElementById('logoScale');
    const logoXInput = document.getElementById('logoX');
    const logoYInput = document.getElementById('logoY');
    const resetImageButton = document.getElementById('resetImageButton');
    const resetLogoButton = document.getElementById('resetLogoButton');
    const resetLogoShadowButton = document.getElementById('resetLogoShadowButton');
    const logoEdgeColorButtons = document.querySelectorAll('.logo-edge-color-button'); // ロゴのエッジの色選択ボタン
    const customLogoEdgeColorInput = document.getElementById('customLogoEdgeColor'); // ロゴのカスタムエッジカラーピッカー
    const logoEdgeWidthInput = document.getElementById('logoEdgeWidth'); // ロゴのエッジの太さ
    
    let uploadedImage = null;
    let uploadedLogo = null;
    let logoShadowColor = 'black'; // ロゴのシャドウの色の初期値
    let logoShadowBlur = 1; // ロゴのシャドウのぼかしの初期値
    let logoShadowOffsetX = 1; // ロゴのシャドウのXオフセットの初期値
    let logoShadowOffsetY = 1; // ロゴのシャドウのYオフセットの初期値
    logoShadowSettingsDiv.style.display = 'none'; // 初期状態でロゴのシャドウ設定を非表示にする
    let uploadedLogo2 = null;
    let logo2Scale = 1; // ロゴのスケールの初期値
    let logo2X = 10; // ロゴのX座標の初期値
    let logo2Y = 10; // ロゴのY座標の初期値
    let logo2EdgeColor = 'black'; // ロゴのエッジの色の初期値
    let logo2EdgeWidth = 0; // ロゴのエッジの太さの初期値
    let logo2ShadowColor = 'black'; // ロゴのシャドウの色の初期値
    let logo2ShadowBlur = 1; // ロゴのシャドウのぼかしの初期値
    let logo2ShadowOffsetX = 1; // ロゴのシャドウのXオフセットの初期値
    let logo2ShadowOffsetY = 1; // ロゴのシャドウのYオフセットの初期値
    logo2EdgeSettingsDiv.style.display = 'none'; // 初期状態でロゴのエッジ設定を非表示にする
    logo2ShadowSettingsDiv.style.display = 'none'; // 初期状態でロゴのシャドウ設定を非表示にする
    let isLogo2HeightResizeMode = false; // ロゴ2の高さリサイズモードを保持する変数
    let text1 = ''; // 1つ目のテキスト
    let text2 = ''; // 2つ目のテキスト
    let fontSize1 = 120; // 1つ目のテキストのフォントサイズ
    let fontSize2 = 90; // 2つ目のテキストのフォントサイズ
    let textX1 = 50; // 1つ目のテキストのX座標
    let textX2 = 50; // 2つ目のテキストのX座標
    let textY1 = 400; // 1つ目のテキストのY座標
    let textY2 = 600; // 2つ目のテキストのY座標
    let textRotation1 = 0; // 1つ目のテキストの回転角度の初期値
    let textRotation2 = 0; // 2つ目のテキストの回転角度の初期値
    let textColor1 = 'white'; // 1つ目のテキストの色の初期値
    let textColor2 = '#ff8800'; // 2つ目のテキストの色の初期値
    let fontFamily1 = 'keifont'; // 1つ目のテキストのフォントの初期値
    let fontFamily2 = 'Stick'; // 2つ目のテキストのフォントの初期値
    let edgeColor1 = 'red'; // 1つ目のテキストのエッジの色の初期値
    let edgeColor2 = 'white'; // 2つ目のテキストのエッジの色の初期値
    let edgeWidth1 = 13; // 1つ目のテキストのエッジの太さの初期値
    let edgeWidth2 = 15; // 2つ目のテキストのエッジの太さの初期値
    let outerEdgeColor1 = 'black'; // 1つ目のテキストの外側エッジの色の初期値
    let outerEdgeWidth1 = 0; // 1つ目のテキストの外側エッジの太さの初期値
    let outerEdgeColor2 = 'black'; // 2つ目のテキストの外側エッジの色の初期値
    let outerEdgeWidth2 = 0; // 2つ目のテキストの外側エッジの太さの初期値
    shadowSettingsDiv1.style.display = 'none'; // 初期状態でシャドウ設定を非表示にする
    shadowSettingsDiv2.style.display = 'none'; // 初期状態でシャドウ設定を非表示にする
    textBackgroundSettingsDiv1.style.display = 'none'; // 初期状態でテキスト背景設定を非表示にする
    logoEdgeSettingsDiv.style.display = 'none'; // 初期状態でロゴのエッジ設定を非表示にする
    textPresetPanel.style.display = 'none'; // 初期状態でスタイルプリセットパネルを非表示にする
    let shadowColor1 = 'black'; // 1つ目のテキストのシャドウの色の初期値
    let shadowBlur1 = 0; // 1つ目のテキストのシャドウのぼかしの初期値
    let shadowOffsetX1 = 0; // 1つ目のテキストのシャドウのXオフセットの初期値
    let shadowOffsetY1 = 0; // 1つ目のテキストのシャドウのYオフセットの初期値
    let shadowColor2 = 'black'; // 2つ目のテキストのシャドウの色の初期値
    let shadowBlur2 = 0; // 2つ目のテキストのシャドウのぼかしの初期値
    let shadowOffsetX2 = 0; // 2つ目のテキストのシャドウのXオフセットの初期値
    let shadowOffsetY2 = 0; // 2つ目のテキストのシャドウのYオフセットの初期値
    let textBackgroundColor1 = 'black'; // 1つ目のテキストの背景色の初期値
    let textBackgroundColor2 = 'black'; // 2つ目のテキストの背景色の初期値
    let textBackgroundOpacity1 = 0; // 1つ目のテキストの背景の不透明度の初期値
    let textBackgroundOpacity2 = 0; // 2つ目のテキストの背景の不透明度の初期値
    let textBackgroundWidth1 = 0; // 1つ目のテキストの背景の幅の初期値
    let textBackgroundWidth2 = 0; // 2つ目のテキストの背景の幅の初期値
    let textBackgroundHeight1 = -30; // 1つ目のテキストの背景の高さの初期値
    let textBackgroundHeight2 = -30; // 2つ目のテキストの背景の高さの初期値
    let textBackgroundPadding1 = 15; // 1つ目のテキストの背景のパディングの初期値
    let textBackgroundPadding2 = 10; // 2つ目のテキストの背景のパディングの初期値
    // 画像のスケールと位置を保持する変数を追加
    let imageScale = 0.667; // 画像のスケールの初期値
    let imageX = 0; // 画像のX座標の初期値
    let imageY = 0; // 画像のY座標の初期値
    let isWidthResizeMode = true; // 幅リサイズモードが初期値
    // ロゴのスケールと位置を保持する変数を追加
    let logoScale = 1; // ロゴのスケールの初期値
    let logoX = 10; // ロゴのX座標の初期値
    let logoY = 10; // ロゴのY座標の初期値
    let logoEdgeColor = 'black'; // ロゴのエッジの色の初期値
    let logoEdgeWidth = 0; // ロゴのエッジの太さの初期値
    // 動画のフレームとスケールと位置を保持する変数を追加
    let currentVideoFrame = 1; // 現在の動画フレームを保持する変数
    let videoScale = 1.0; // 動画のスケールを保持する変数
    let videoX = 0; // 動画のX座標を保持する変数
    let videoY = 0; // 動画のY座標を保持する変数
    let videoEdgeColor = '#000000'; // 動画のエッジの色を保持する変数
    let videoEdgeWidth = 0; // 動画のエッジの太さを保持する変数
    let isVideoWidthResizeMode = true; // 幅リサイズモードが初期値

    // 利用可能なフォントのリスト
    const fontList = [
        { name: 'Arial', value: 'Arial' },
        { name: 'Impact', value: 'Impact, sans-serif', isBold: true },
        { name: 'Dela Gothic One', value: "'Dela Gothic One', cursive", url: 'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap', isBold: true, isDecorative: true },
        { name: 'DelaSukoGothicOne-R', value: "'DelaSukoGothicOne-R', sans-serif", isBold: false }, // DelaSukoGothicOne-Rを追加
        { name: 'YDWbananaslipplus', value: "'YDWbananaslipplus', sans-serif", isBold: false }, // YDWbananaslipplusを追加
        { name: 'AkazukiPOP', value: "'AkazukiPOP', sans-serif", isBold: false }, // AkazukiPOPを追加
        { name: 'LightNovelPOPv2', value: "'LightNovelPOPv2', sans-serif", isBold: false }, // LightNovelPOPv2を追加
        { name: 'keifont', value: "'keifont', sans-serif", isBold: false }, // keifontを追加
        { name: 'puikko-Regular', value: "'puikko-Regular', sans-serif", isBold: false }, // puikko-Regularを追加
        { name: 'Kaisotai-Next-UP-B', value: "'Kaisotai-Next-UP-B', sans-serif", isBold: false }, // Kaisotai-Next-UP-Bを追加
        { name: 'kurobara-cinderella', value: "'kurobara-cinderella', sans-serif", isBold: false }, // kurobara-cinderellaを追加
        { name: 'GN-KillGothic-U-KanaNA', value: "'GN-KillGothic-U-KanaNA', sans-serif", isBold: false }, // GN-KillGothic-U-KanaNAを追加
        { name: 'GN-KillGothic-U-KanaNB', value: "'GN-KillGothic-U-KanaNB', sans-serif", isBold: false }, // GN-KillGothic-U-KanaNBを追加
        { name: 'cinecaption226', value: "'cinecaption226', sans-serif", isBold: false }, // cinecaption226を追加
        { name: 'KTEGAKI', value: "'KTEGAKI', sans-serif", isBold: false }, // KTEGAKIを追加
        { name: '851MkPOP_101', value: "'851MkPOP_101', sans-serif", isBold: false }, // 851MkPOP_101を追加
        { name: 'GenEiNuGothic-EB', value: "'GenEiNuGothic-EB', sans-serif", isBold: false }, // GenEiNuGothic-EBを追加
        { name: 'GenEiPOPlePw-Bk', value: "'GenEiPOPlePw-Bk', sans-serif", isBold: false }, // GenEiPOPlePw-Bkを追加
        { name: 'GenEiLateGoP_v2', value: "'GenEiLateGoP_v2', sans-serif", isBold: false }, // GenEiLateGoP_v2を追加
        { name: 'GenEiLateMinP_v2', value: "'GenEiLateMinP_v2', sans-serif", isBold: false }, // GenEiLateMinP_v2を追加
        { name: 'genkai-mincho', value: "'genkai-mincho', sans-serif", isBold: false }, // genkai-minchoを追加
        { name: '玉ねぎ楷書激無料版v7改', value: "'玉ねぎ楷書激無料版v7改', sans-serif", isBold: false }, // 玉ねぎ楷書激無料版v7改を追加
        { name: 'f910-shin-comic-2.04', value: "'f910-shin-comic-2.04', sans-serif", isBold: false }, // f910-shin-comic-2.04を追加
        { name: 'ShipporiAntique-Regular', value: "'ShipporiAntique-Regular', sans-serif", isBold: false }, // ShipporiAntique-Regularを追加
        { name: 'ShipporiMincho-ExtraBold', value: "'ShipporiMincho-ExtraBold', sans-serif", isBold: false }, // ShipporiMincho-ExtraBoldを追加
        { name: 'Noto Sans JP', value: "'Noto Sans JP', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"},
        { name: 'M PLUS 1p', value: "'M PLUS 1p', sans-serif" , url: "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&display=swap"},
        { name: 'Roboto', value: "'Roboto', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"},
        { name: 'Oswald', value: "'Oswald', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"},
        { name: 'Pacifico', value: "'Pacifico', cursive" , url: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap", isDecorative: true},
        { name: 'Lobster', value: "'Lobster', cursive" , url: "https://fonts.googleapis.com/css2?family=Lobster&display=swap", isDecorative: true},
        { name: 'Dancing Script', value: "'Dancing Script', cursive" , url: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap", isDecorative: true},
        { name: 'Kosugi Maru', value: "'Kosugi Maru', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"},
        { name: 'Sawarabi Mincho', value: "'Sawarabi Mincho', serif" , url: "https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap"},
        { name: 'Sawarabi Gothic', value: "'Sawarabi Gothic', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap"},
        { name: 'Aoboshi One', value: "'Aoboshi One', serif", url: 'https://fonts.googleapis.com/css2?family=Aoboshi+One&display=swap', isBold: true, isDecorative: true },
        { name: 'Mochiy Pop P One', value: "'Mochiy Pop P One', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap", isBold: true, isDecorative: true},
        { name: 'DotGothic16', value: "'DotGothic16', sans-serif" , url: "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap", isDecorative: true},
        { name: 'Zen Maru Gothic', value: "'Zen Maru Gothic', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700&display=swap"},
        { name: 'Zen Maru Gothic Black 900', value: "'Zen Maru Gothic', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@900&display=swap', isBold: true }, // Zen Maru Gothic Black 900を追加
        { name: 'RocknRoll One', value: "'RocknRoll One', sans-serif" , url: "https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap", isBold: true},
        { name: 'Hina Mincho', value: "'Hina Mincho', serif" , url: "https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap", isDecorative: true},
        { name: 'Train One', value: "'Train One', cursive" , url: "https://fonts.googleapis.com/css2?family=Train+One&display=swap", isBold: true, isDecorative: true},
        { name: 'Shippori Mincho B1', value: "'Shippori Mincho B1', serif" , url: "https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap", isDecorative: true},
        { name: 'Yusei Magic', value: "'Yusei Magic', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap", isDecorative: true},
        { name: 'Kaisei Decol', value: "'Kaisei Decol', serif" , url: "https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap", isDecorative: true},
        { name: 'Kaisei HarunoUmi', value: "'Kaisei HarunoUmi', serif" , url: "https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap", isDecorative: true},
        { name: 'Stick', value: "'Stick', sans-serif" , url: "https://fonts.googleapis.com/css2?family=Stick&display=swap", isBold: true},
        { name: 'Zen Old Mincho', value: "'Zen Old Mincho', serif" , url: "https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap", isDecorative: true},
        { name: 'Rampart One', value: "'Rampart One', cursive", url: 'https://fonts.googleapis.com/css2?family=Rampart+One&display=swap', isBold: true, isDecorative: true },
        { name: 'Reggae One', value: "'Reggae One', cursive", url: 'https://fonts.googleapis.com/css2?family=Reggae+One&display=swap', isBold: true, isDecorative: true },
        { name: 'Potta One', value: "'Potta One', cursive", url: 'https://fonts.googleapis.com/css2?family=Potta+One&display=swap', isBold: true, isDecorative: true },
        { name: 'sans-serif', value: 'sans-serif' },
        { name: 'serif', value: 'serif' },
        { name: 'monospace', value: 'monospace' }
        // 他のフォントもここに追加
    ];
    
    // Webフォントを読み込む関数
    function loadWebFont(font, fontSize, fontFamily, selectElement, fontWeight) {
        if (font && font.url) {
            // linkタグの重複を避けるため、すでに存在するか確認
            if (!document.querySelector(`link[href="${font.url}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = font.url;
                link.onload = () => {
                    console.log(`Webフォント "${font.name}" の読み込みが完了しました。`);
                    // フォントが読み込まれた後にctx.fontを設定
                    ctx.font = `${fontWeight} ${fontSize}px ${font.value}`;
                    // ドロップダウンの表示フォントを設定
                    selectElement.style.fontFamily = font.value;
                    redrawCanvas();
                };
                link.onerror = () => {
                    console.error(`Webフォント "${font.name}" の読み込みに失敗しました。`);
                    // フォントの読み込みに失敗した場合もctx.fontを設定
                    ctx.font = `400 ${fontSize}px Arial`;
                    // ドロップダウンの表示フォントを設定
                    selectElement.style.fontFamily = "Arial";
                    redrawCanvas();
                };
                document.head.appendChild(link);
            } else {
                // フォントがすでに読み込まれている場合もctx.fontを設定
                ctx.font = `${fontWeight} ${fontSize}px ${font.value}`;
                // ドロップダウンの表示フォントを設定
                selectElement.style.fontFamily = font.value;
                redrawCanvas();
            }
        } else {
            // Webフォントでない場合もctx.fontを設定
            ctx.font = `${fontWeight} ${fontSize}px ${font.value}`;
            // ドロップダウンの表示フォントを設定
            selectElement.style.fontFamily = font.value;
            redrawCanvas(); // Webフォントでない場合はすぐに再描画
        }
    }

        // 画像アップロード時の処理
    imageUpload.addEventListener('change', (e) => {
        console.log('画像アップロードイベントが発生しました');
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage = new Image();
                uploadedImage.onload = () => {
                    console.log('画像が読み込まれました');
                    // 画像の幅をプレビュー画面の幅に合わせるため、拡大率または縮小率を計算
                    let calculatedScale = 1; // ここで calculatedScale を定義
                    if (uploadedImage.width > canvas.width) {
                        calculatedScale = canvas.width / uploadedImage.width;
                    } else if (uploadedImage.width < canvas.width) {
                        calculatedScale = canvas.width / uploadedImage.width;
                    } else {
                        calculatedScale = 1;
                    }
                    // 画像の初期位置をプレビュー画面の中央に配置
                    imageX = (canvas.width - uploadedImage.width * calculatedScale) / 2;
                    imageY = (canvas.height - uploadedImage.height * calculatedScale) / 2;
                    // スライダーの最大値を更新
                    imageScaleInput.max = Math.max(5, 1 / calculatedScale);
                    // スライダーの初期値を更新
                    imageScaleInput.value = calculatedScale; // ここでスライダーの値を更新
                    imageScale = calculatedScale; // ここでimageScaleを更新
                    imageXInput.value = imageX;
                    imageYInput.value = imageY;

                    redrawCanvas();
                };
                uploadedImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // ロゴアップロード時の処理 (ファイル選択)
    logoUpload.addEventListener('change', (e) => {
        console.log('ロゴアップロードイベント (ファイル選択) が発生しました');
        handleLogoUpload(e);
    });

    // ロゴ2アップロード時の処理 (ファイル選択)
    logo2Upload.addEventListener('change', (e) => {
        console.log('ロゴ2アップロードイベント (ファイル選択) が発生しました');
        handleLogo2Upload(e);
    });

    // 動画のアップロード処理
function handleVideoFiles(files) {
    ([...files]).forEach(file => {
        const fileType = file.type;
        if (fileType.startsWith('video/')) {
            uploadedVideo.src = URL.createObjectURL(file);
            redrawCanvas(); // 追加：動画のsrcが設定された直後にredrawCanvasを呼び出す
            uploadedVideo.loop = true;
            uploadedVideo.muted = true;
            uploadedVideo.load();

            uploadedVideo.addEventListener('loadedmetadata', () => {
                // スライダーの最大値を動画のフレーム数に設定
                videoFrameSlider.max = Math.floor(uploadedVideo.duration * 30); // 30fpsとして計算
                videoFrameSliderContainer.style.display = 'block';
                videoSizeSliderContainer.style.display = 'block'; // 追加
                videoXSliderContainer.style.display = 'block'; // 追加
                videoYSliderContainer.style.display = 'block'; // 追加
                videoEdgeSettings.style.display = 'block'; // 追加
                videoButtonContainer.style.display = 'flex';
                redrawCanvas();
            });

            uploadedVideo.addEventListener('seeked', () => {
                redrawCanvas();
            });
        }
    });
}
    
    // 動画フレームスライダーの変更イベント
    videoFrameSlider.addEventListener('input', () => {
        currentVideoFrame = parseInt(videoFrameSlider.value);
        uploadedVideo.currentTime = currentVideoFrame / 30; // 30fpsとして計算
    });

    // 動画サイズスライダーの変更イベント
    videoSizeSlider.addEventListener('input', () => {
        videoScale = parseFloat(videoSizeSlider.value) / 100;
        redrawCanvas();
    });
    
    // 動画X座標スライダーの変更イベント
    videoXSlider.addEventListener('input', () => {
        videoX = parseInt(videoXSlider.value);
        redrawCanvas();
    });
    
    // 動画Y座標スライダーの変更イベント
    videoYSlider.addEventListener('input', () => {
        videoY = parseInt(videoYSlider.value);
        redrawCanvas();
    });
    
    // 動画エッジカラーピッカーの変更イベント
    customVideoEdgeColor.addEventListener('input', () => {
        videoEdgeColor = customVideoEdgeColor.value;
        redrawCanvas();
    });
    
    // 動画エッジ幅スライダーの変更イベント
    videoEdgeWidthSlider.addEventListener('input', () => {
        videoEdgeWidth = parseInt(videoEdgeWidthSlider.value);
        redrawCanvas();
    });
    
    // 動画リセットボタンのクリックイベント
    resetVideoButton.addEventListener('click', () => {
        uploadedVideo.src = '';
        videoFrameSliderContainer.style.display = 'none';
        videoSizeSliderContainer.style.display = 'none'; // 追加
        videoXSliderContainer.style.display = 'none'; // 追加
        videoYSliderContainer.style.display = 'none'; // 追加
        videoEdgeSettings.style.display = 'none'; // 追加
        videoButtonContainer.style.display = 'none';
        currentVideoFrame = 0;
        videoScale = 1.0;
        videoX = 0;
        videoY = 0;
        videoEdgeColor = '#000000';
        videoEdgeWidth = 0;
        redrawCanvas();
    });

    // 動画のドロップエリアのイベント
    videoDropArea.addEventListener('dragenter', (e) => {
        e.preventDefault();
        videoDropArea.classList.add('drag-over');
    });

    videoDropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    videoDropArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        videoDropArea.classList.remove('drag-over');
    });

    videoDropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        videoDropArea.classList.remove('drag-over');
        handleVideoFiles(e.dataTransfer.files);
    });

    // 動画のファイル選択イベント
    videoUpload.addEventListener('change', (e) => {
        handleVideoFiles(e.target.files);
    });

    // 動画のドロップエリアのイベント
    videoDropArea.addEventListener('dragenter', (e) => {
        e.preventDefault();
        videoDropArea.classList.add('drag-over');
        videoDropArea.classList.add('highlight');
    });

    videoDropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        videoDropArea.classList.add('drag-over');
        videoDropArea.classList.add('highlight');
    });

    videoDropArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        videoDropArea.classList.remove('drag-over');
        videoDropArea.classList.remove('highlight');
    });

    videoDropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        videoDropArea.classList.remove('drag-over');
        videoDropArea.classList.remove('highlight');
        handleVideoFiles(e.dataTransfer.files);
    });
    
    // ドラッグオーバー時の処理
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        imageDropArea.addEventListener(eventName, preventDefaults, false);
        logoDropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // ドロップエリアのハイライト
    ['dragenter', 'dragover'].forEach(eventName => {
        imageDropArea.addEventListener(eventName, highlight, false);
        logoDropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        imageDropArea.addEventListener(eventName, unhighlight, false);
        logoDropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
        this.classList.add('highlight');
    }

    function unhighlight(e) {
        this.classList.remove('highlight');
    }

    // ドロップ時の処理
    function handleImageDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files, 'imageUpload');
    }

    function handleLogoDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files, 'logoUpload');
    }

    imageDropArea.addEventListener('drop', handleImageDrop, false);
    logoDropArea.addEventListener('drop', handleLogoDrop, false);

    // ドロップエリアクリック時の処理
    imageDropArea.addEventListener('click', () => imageUpload.click());
    logoDropArea.addEventListener('click', () => logoUpload.click());

    // ロゴ2のドロップエリアのイベント
    logo2DropArea.addEventListener('dragenter', (e) => {
        e.preventDefault();
        logo2DropArea.classList.add('drag-over');
    });

    logo2DropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    logo2DropArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        logo2DropArea.classList.remove('drag-over');
    });

    logo2DropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        logo2DropArea.classList.remove('drag-over');
        handleLogo2Files(e.dataTransfer.files);
    });

    // ロゴ2のファイル選択イベント
    logo2Upload.addEventListener('change', (e) => {
        handleLogo2Files(e.target.files);
    });

    // ロゴ2のドロップエリアのイベント
    logo2DropArea.addEventListener('dragenter', (e) => {
        e.preventDefault();
        logo2DropArea.classList.add('drag-over');
        logo2DropArea.classList.add('highlight');
    });

    logo2DropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        logo2DropArea.classList.add('drag-over');
        logo2DropArea.classList.add('highlight');
    });

    logo2DropArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        logo2DropArea.classList.remove('drag-over');
        logo2DropArea.classList.remove('highlight');
    });

    logo2DropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        logo2DropArea.classList.remove('drag-over');
        logo2DropArea.classList.remove('highlight');
        handleLogo2Files(e.dataTransfer.files);
    });

    // 画像アップロード処理
    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log('画像読み込み完了');
                uploadedImage = new Image();
                uploadedImage.onload = () => {
                    console.log('画像オブジェクト読み込み完了');
                    redrawCanvas();
                };
                uploadedImage.src = event.target.result;
                console.log('画像のData URL:', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    // ロゴアップロード処理
    function handleLogoUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log('ロゴ読み込み完了');
                uploadedLogo = new Image();
                uploadedLogo.onload = () => {
                    console.log('ロゴオブジェクト読み込み完了');
                    redrawCanvas();
                };
                uploadedLogo.src = event.target.result;
                console.log('ロゴのData URL:', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    // ファイルハンドリング処理
    function handleFiles(files, uploadType) {
        ([...files]).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (uploadType === 'imageUpload') {
                    console.log('Uploaded image file:', file);
                    uploadedImage = new Image();
                    uploadedImage.src = event.target.result;
                    console.log('Uploaded image src:',  uploadedImage.src);
                    uploadedImage.onload = () => {
                        console.log('画像オブジェクト読み込み完了');
                        imageUpload.dispatchEvent(new Event('change'));
                    };
                } else if (uploadType === 'logoUpload') {
                    console.log('Uploaded logo file:', file);
                    uploadedLogo = new Image();
                    uploadedLogo.onload = () => {
                        console.log('ロゴオブジェクト読み込み完了');
                        redrawCanvas();
                    };
                    uploadedLogo.src = event.target.result;
                    console.log('Uploaded logo src:',  uploadedLogo.src);
                }
            };
            reader.readAsDataURL(file);
        });
    }

    // ロゴのエッジ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showLogoEdgeSettingsCheckbox.addEventListener('change', (e) => {
        console.log('ロゴのエッジ設定の表示/非表示チェックボックスが変更されました');
        if (e.target.checked) {
            logoEdgeSettingsDiv.style.display = 'block'; // 表示
        } else {
            logoEdgeSettingsDiv.style.display = 'none'; // 非表示
        }
    });


    // ロゴのシャドウ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showLogoShadowSettingsCheckbox.addEventListener('change', (e) => {
        console.log('ロゴのシャドウ設定の表示/非表示チェックボックスが変更されました');
        if (e.target.checked) {
            logoShadowSettingsDiv.style.display = 'block'; // 表示
        } else {
            logoShadowSettingsDiv.style.display = 'none'; // 非表示
        }
    });

    // ロゴのシャドウの色選択ボタンのイベントリスナー
    logoShadowColorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('ロゴのシャドウの色選択ボタンがクリックされました');
            logoShadowColor = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // ロゴのカスタムシャドウカラーピッカーのイベントリスナー
    customLogoShadowColorInput.addEventListener('change', (e) => {
        console.log('ロゴのカスタムシャドウカラーピッカーの値が変更されました');
        logoShadowColor = e.target.value;
        redrawCanvas();
    });

    // ロゴのシャドウのぼかし変更時のイベントリスナー
    logoShadowBlurInput.addEventListener('input', (e) => {
        console.log('ロゴのシャドウのぼかし変更イベントが発生しました');
        logoShadowBlur = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴのシャドウのXオフセット変更時のイベントリスナー
    logoShadowOffsetXInput.addEventListener('input', (e) => {
        console.log('ロゴのシャドウのXオフセット変更イベントが発生しました');
        logoShadowOffsetX = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴのシャドウのYオフセット変更時のイベントリスナー
    logoShadowOffsetYInput.addEventListener('input', (e) => {
        console.log('ロゴのシャドウのYオフセット変更イベントが発生しました');
        logoShadowOffsetY = parseInt(e.target.value);
        redrawCanvas();
    });


    // ロゴ2アップロード処理
    function handleLogo2Upload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log('ロゴ2読み込み完了');
                uploadedLogo2 = new Image();
                uploadedLogo2.onload = () => {
                    console.log('ロゴ2オブジェクト読み込み完了');
                    redrawCanvas();
                };
                uploadedLogo2.src = event.target.result;
                console.log('ロゴ2のData URL:', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    // ロゴ2ファイルハンドリング処理
    function handleLogo2Files(files) {
        ([...files]).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log('Uploaded logo2 file:', file);
                uploadedLogo2 = new Image();
                uploadedLogo2.onload = () => {
                    console.log('ロゴ2オブジェクト読み込み完了');
                    logo2Settings.style.display = 'block'; // ロゴ2の設定項目を表示
                    redrawCanvas();
                };
                uploadedLogo2.src = event.target.result;
                console.log('Uploaded logo2 src:',  uploadedLogo2.src);
            };
            reader.readAsDataURL(file);
        });
    }


    // ロゴ2のスケール変更時のイベントリスナー
    logo2ScaleInput.addEventListener('input', (e) => {
        console.log('ロゴ2のスケール変更イベントが発生しました');
        logo2Scale = parseFloat(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のX座標変更時のイベントリスナー
    logo2XInput.addEventListener('input', (e) => {
        console.log('ロゴ2のX座標変更イベントが発生しました');
        logo2X = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のY座標変更時のイベントリスナー
    logo2YInput.addEventListener('input', (e) => {
        console.log('ロゴ2のY座標変更イベントが発生しました');
        logo2Y = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のリセットボタンのイベントリスナー
    resetLogo2Button.addEventListener('click', () => {
        console.log('ロゴ2のリセットボタンがクリックされました');
        if (uploadedLogo2) {
            if (isLogo2HeightResizeMode) {
                // リセット
                logo2Scale = 1;
                logo2X = 10;
                logo2Y = 10;
                logo2EdgeWidth = 0;
                logo2EdgeColor = "rgb(255, 255, 255)"
                logo2ScaleInput.value = logo2Scale;
                logo2XInput.value = logo2X;
                logo2YInput.value = logo2Y;
                logo2EdgeWidthInput.value = logo2EdgeWidth;
                customLogo2EdgeColorInput.value = logo2EdgeColor;
                resetLogo2Button.textContent = 'ロゴを拡大'; // ボタンのテキストを変更
                resetLogo2Button.classList.remove('reset-mode'); // リセットモードのクラスを削除
                resetLogo2Button.classList.add('resize-mode'); // リサイズモードのクラスを追加
                isLogo2HeightResizeMode = false; // モードをリセットに変更
            } else {
                // 高さ720pxにリサイズ
                const targetHeight = 720;
                const heightScale = targetHeight / uploadedLogo2.height;
                const scale = heightScale * 9.59;
                logo2Scale = scale;
                logo2X = 0;
                logo2Y = 0;
                logo2ScaleInput.value = logo2Scale;
                logo2XInput.value = logo2X;
                logo2YInput.value = logo2Y;
                resetLogo2Button.textContent = 'ロゴをリセット'; // ボタンのテキストを変更
                resetLogo2Button.classList.remove('resize-mode'); // リサイズモードのクラスを削除
                resetLogo2Button.classList.add('reset-mode'); // リセットモードのクラスを追加
                isLogo2HeightResizeMode = true; // モードを高さリサイズに変更
            }
            redrawCanvas();
        } else {
            console.log('ロゴ2がアップロードされていません');
            alert('ロゴ2をアップロードしてください');
        }
    });

    // ロゴ2のエッジ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showLogo2EdgeSettingsCheckbox.addEventListener('change', (e) => {
        console.log('ロゴ2のエッジ設定の表示/非表示チェックボックスが変更されました');
        if (e.target.checked) {
            logo2EdgeSettingsDiv.style.display = 'block'; // 表示
        } else {
            logo2EdgeSettingsDiv.style.display = 'none'; // 非表示
        }
    });

    // ロゴ2のシャドウ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showLogo2ShadowSettingsCheckbox.addEventListener('change', (e) => {
        console.log('ロゴ2のシャドウ設定の表示/非表示チェックボックスが変更されました');
        if (e.target.checked) {
            logo2ShadowSettingsDiv.style.display = 'block'; // 表示
        } else {
            logo2ShadowSettingsDiv.style.display = 'none'; // 非表示
        }
    });

    // ロゴ2のシャドウの色選択ボタンのイベントリスナー
    logo2ShadowColorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('ロゴ2のシャドウの色選択ボタンがクリックされました');
            logo2ShadowColor = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // ロゴ2のカスタムシャドウカラーピッカーのイベントリスナー
    customLogo2ShadowColorInput.addEventListener('change', (e) => {
        console.log('ロゴ2のカスタムシャドウカラーピッカーの値が変更されました');
        logo2ShadowColor = e.target.value;
        redrawCanvas();
    });

    // ロゴ2のシャドウのぼかし変更時のイベントリスナー
    logo2ShadowBlurInput.addEventListener('input', (e) => {
        console.log('ロゴ2のシャドウのぼかし変更イベントが発生しました');
        logo2ShadowBlur = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のシャドウのXオフセット変更時のイベントリスナー
    logo2ShadowOffsetXInput.addEventListener('input', (e) => {
        console.log('ロゴ2のシャドウのXオフセット変更イベントが発生しました');
        logo2ShadowOffsetX = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のシャドウのYオフセット変更時のイベントリスナー
    logo2ShadowOffsetYInput.addEventListener('input', (e) => {
        console.log('ロゴ2のシャドウのYオフセット変更イベントが発生しました');
        logo2ShadowOffsetY = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴ2のシャドウのリセットボタンのイベントリスナー
    resetLogo2ShadowButton.addEventListener('click', () => {
        console.log('ロゴ2のリセットボタンがクリックされました');
        logo2ShadowBlur = 0;
        logo2ShadowOffsetX = 0;
        logo2ShadowOffsetY = 0;
        logo2ShadowBlurInput.value = logo2ShadowBlur;
        logo2ShadowOffsetXInput.value = logo2ShadowOffsetX;
        logo2ShadowOffsetYInput.value = logo2ShadowOffsetY;
        redrawCanvas();
    });

    // テキスト入力時の処理
    textInput1.addEventListener('input', (e) => {
        console.log('テキスト1入力イベントが発生しました');
        text1 = e.target.value;
        redrawCanvas();
    });
    textInput2.addEventListener('input', (e) => {
        console.log('テキスト2入力イベントが発生しました');
        const inputText = e.target.value;
        const dateRegex = /^\d{4}\/(1[0-2]|[1-9])\/(3[01]|[12][0-9]|[1-9])$/; // 日付を判定する正規表現
        if (dateRegex.test(inputText)) {
            text2 = `${inputText}配信`; // 日付形式の場合は日付の最後に「配信」を付加
        } else {
            text2 = inputText; // それ以外の場合は入力されたテキストのまま
        }
        redrawCanvas(); // ここでredrawCanvas()を呼び出す
    });

    // フォントサイズ変更時の処理
    fontSizeInput1.addEventListener('input', (e) => {
        console.log('フォントサイズ1変更イベントが発生しました');
        fontSize1 = parseInt(e.target.value);
        redrawCanvas();
    });
    fontSizeInput2.addEventListener('input', (e) => {
        console.log('フォントサイズ2変更イベントが発生しました');
        fontSize2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキストX座標変更時の処理
    textXInput1.addEventListener('input', (e) => {
        console.log('テキストX座標1変更イベントが発生しました');
        textX1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textXInput2.addEventListener('input', (e) => {
        console.log('テキストX座標2変更イベントが発生しました');
        textX2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキストY座標変更時の処理
    textYInput1.addEventListener('input', (e) => {
        console.log('テキストY座標1変更イベントが発生しました');
        textY1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textYInput2.addEventListener('input', (e) => {
        console.log('テキストY座標2変更イベントが発生しました');
        textY2 = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // テキスト回転角度変更時の処理
    textRotationSlider1.addEventListener('input', (e) => {
        console.log('テキスト回転角度1変更イベントが発生しました');
        textRotation1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textRotationSlider2.addEventListener('input', (e) => {
        console.log('テキスト回転角度2変更イベントが発生しました');
        textRotation2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキスト回転リセットボタンのイベントリスナー
    resetRotationButton1.addEventListener('click', () => {
        console.log('テキスト回転リセットボタン1がクリックされました');
        textRotation1 = 0; // 回転角度を0にリセット
        textRotationSlider1.value = 0; // スライダーの値を0にリセット
        redrawCanvas();
    });

    resetRotationButton2.addEventListener('click', () => {
        console.log('テキスト回転リセットボタン2がクリックされました');
        textRotation2 = 0; // 回転角度を0にリセット
        textRotationSlider2.value = 0; // スライダーの値を0にリセット
        redrawCanvas();
    });

    // 色選択ボタンのイベントリスナー
    colorButtons1.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('色選択ボタン1がクリックされました');
            textColor1 = e.target.dataset.color;
            redrawCanvas();
        });
    });
    colorButtons2.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('色選択ボタン2がクリックされました');
            textColor2 = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // カスタムカラーピッカーのイベントリスナー
    customColorInput1.addEventListener('change', (e) => {
        console.log('カスタムカラーピッカー1の値が変更されました');
        textColor1 = e.target.value;
        redrawCanvas();
    });
    customColorInput2.addEventListener('change', (e) => {
        console.log('カスタムカラーピッカー2の値が変更されました');
        textColor2 = e.target.value;
        redrawCanvas();
    });
   // エッジの色選択ボタンのイベントリスナー
    edgeColorButtons1.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('エッジの色選択ボタン1がクリックされました');
            edgeColor1 = e.target.dataset.color;
            redrawCanvas();
        });
    });
    edgeColorButtons2.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('エッジの色選択ボタン2がクリックされました');
            edgeColor2 = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // カスタムエッジカラーピッカーのイベントリスナー
    customEdgeColorInput1.addEventListener('change', (e) => {
        console.log('カスタムエッジカラーピッカー1の値が変更されました');
        edgeColor1 = e.target.value;
        redrawCanvas();
    });
    customEdgeColorInput2.addEventListener('change', (e) => {
        console.log('カスタムエッジカラーピッカー2の値が変更されました');
        edgeColor2 = e.target.value;
        redrawCanvas();
    });
     // エッジの太さ変更時のイベントリスナー
    edgeWidthInput1.addEventListener('input', (e) => {
        console.log('エッジの太さ1変更イベントが発生しました');
        edgeWidth1 = parseInt(e.target.value);
        redrawCanvas();
    });
    edgeWidthInput2.addEventListener('input', (e) => {
        console.log('エッジの太さ2変更イベントが発生しました');
        edgeWidth2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // 外側のエッジの色選択ボタンのイベントリスナー
    outerEdgeColorButtons1.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('外側のエッジの色選択ボタン1がクリックされました');
            outerEdgeColor1 = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // 外側のエッジの色選択ボタンのイベントリスナー
    outerEdgeColorButtons2.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('外側のエッジの色選択ボタン2がクリックされました');
            outerEdgeColor2 = e.target.dataset.color;
            redrawCanvas();
        });
    });
    
    // カスタム外側エッジカラーピッカーのイベントリスナー
    customOuterEdgeColorInput1.addEventListener('change', (e) => {
        console.log('カスタム外側エッジカラーピッカー1の値が変更されました');
        outerEdgeColor1 = e.target.value;
        redrawCanvas();
    });
    
    // カスタム外側エッジカラーピッカーのイベントリスナー
    customOuterEdgeColorInput2.addEventListener('change', (e) => {
        console.log('カスタム外側エッジカラーピッカー2の値が変更されました');
        outerEdgeColor2 = e.target.value;
        redrawCanvas();
    });
    
    // 外側のエッジの太さ変更時のイベントリスナー
    outerEdgeWidthInput1.addEventListener('input', (e) => {
        console.log('外側のエッジの太さ1変更イベントが発生しました');
        outerEdgeWidth1 = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // 外側のエッジの太さ変更時のイベントリスナー
    outerEdgeWidthInput2.addEventListener('input', (e) => {
        console.log('外側のエッジの太さ2変更イベントが発生しました');
        outerEdgeWidth2 = parseInt(e.target.value);
        redrawCanvas();
    });    
    
    // シャドウ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showShadowSettingsCheckbox1.addEventListener('change', (e) => {
        console.log('シャドウ設定の表示/非表示チェックボックス1が変更されました');
        if (e.target.checked) {
            shadowSettingsDiv1.style.display = 'block'; // 表示
        } else {
            shadowSettingsDiv1.style.display = 'none'; // 非表示
        }
    });

    // シャドウの色選択ボタンのイベントリスナー
    shadowColorButtons1.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('シャドウの色選択ボタン1がクリックされました');
            shadowColor1 = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // カスタムシャドウカラーピッカーのイベントリスナー
    customShadowColorInput1.addEventListener('change', (e) => {
        console.log('カスタムシャドウカラーピッカー1の値が変更されました');
        shadowColor1 = e.target.value;
        redrawCanvas();
    });

    // シャドウのぼかし変更時のイベントリスナー
    shadowBlurInput1.addEventListener('input', (e) => {
        console.log('シャドウのぼかし1変更イベントが発生しました');
        shadowBlur1 = parseInt(e.target.value);
        redrawCanvas();
    });

    // シャドウのXオフセット変更時のイベントリスナー
    shadowOffsetXInput1.addEventListener('input', (e) => {
        console.log('シャドウのXオフセット1変更イベントが発生しました');
        shadowOffsetX1 = parseInt(e.target.value);
        redrawCanvas();
    });

    // シャドウのYオフセット変更時のイベントリスナー
    shadowOffsetYInput1.addEventListener('input', (e) => {
        console.log('シャドウのYオフセット1変更イベントが発生しました');
        shadowOffsetY1 = parseInt(e.target.value);
        redrawCanvas();
    });

    // シャドウ設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showShadowSettingsCheckbox2.addEventListener('change', (e) => {
        console.log('シャドウ設定の表示/非表示チェックボックス2が変更されました');
        if (e.target.checked) {
            shadowSettingsDiv2.style.display = 'block'; // 表示
        } else {
            shadowSettingsDiv2.style.display = 'none'; // 非表示
        }
    });
    
    // シャドウの色選択ボタンのイベントリスナー
    shadowColorButtons2.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('シャドウの色選択ボタン2がクリックされました');
            shadowColor2 = e.target.dataset.color;
            redrawCanvas();
        });
    });
    
    // カスタムシャドウカラーピッカーのイベントリスナー
    customShadowColorInput2.addEventListener('change', (e) => {
        console.log('カスタムシャドウカラーピッカー2の値が変更されました');
        shadowColor2 = e.target.value;
        redrawCanvas();
    });
    
    // シャドウのぼかし変更時のイベントリスナー
    shadowBlurInput2.addEventListener('input', (e) => {
        console.log('シャドウのぼかし2変更イベントが発生しました');
        shadowBlur2 = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // シャドウのXオフセット変更時のイベントリスナー
    shadowOffsetXInput2.addEventListener('input', (e) => {
        console.log('シャドウのXオフセット2変更イベントが発生しました');
        shadowOffsetX2 = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // シャドウのYオフセット変更時のイベントリスナー
    shadowOffsetYInput2.addEventListener('input', (e) => {
        console.log('シャドウのYオフセット2変更イベントが発生しました');
        shadowOffsetY2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキストの背景設定の表示/非表示を切り替えるチェックボックスのイベントリスナー
    showTextBackgroundSettingsCheckbox1.addEventListener('change', (e) => {
        console.log('テキストの背景設定の表示/非表示チェックボックス1が変更されました');
        if (e.target.checked) {
            textBackgroundSettingsDiv1.style.display = 'block'; // 表示
        } else {
            textBackgroundSettingsDiv1.style.display = 'none'; // 非表示
        }
    });

    // テキストの背景色選択ボタンのイベントリスナー
    textBackgroundColorButtons1.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('テキストの背景色選択ボタン1がクリックされました');
            textBackgroundColor1 = e.target.dataset.color;
            redrawCanvas();
        });
    });
    textBackgroundColorButtons2.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('テキストの背景色選択ボタン2がクリックされました');
            textBackgroundColor2 = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // テキストのカスタム背景カラーピッカーのイベントリスナー
    customTextBackgroundColorInput1.addEventListener('change', (e) => {
        console.log('テキストのカスタム背景カラーピッカー1の値が変更されました');
        textBackgroundColor1 = e.target.value;
        redrawCanvas();
    });
    customTextBackgroundColorInput2.addEventListener('change', (e) => {
        console.log('テキストのカスタム背景カラーピッカー2の値が変更されました');
        textBackgroundColor2 = e.target.value;
        redrawCanvas();
    });

    // テキストの背景の不透明度変更時のイベントリスナー
    textBackgroundOpacityInput1.addEventListener('input', (e) => {
        console.log('テキストの背景の不透明度1変更イベントが発生しました');
        textBackgroundOpacity1 = parseFloat(e.target.value);
        redrawCanvas();
    });
    textBackgroundOpacityInput2.addEventListener('input', (e) => {
        console.log('テキストの背景の不透明度2変更イベントが発生しました');
        textBackgroundOpacity2 = parseFloat(e.target.value);
        redrawCanvas();
    });

    // テキストの背景の幅変更時のイベントリスナー
    textBackgroundWidthInput1.addEventListener('input', (e) => {
        console.log('テキストの背景の幅1変更イベントが発生しました');
        textBackgroundWidth1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textBackgroundWidthInput2.addEventListener('input', (e) => {
        console.log('テキストの背景の幅2変更イベントが発生しました');
        textBackgroundWidth2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキストの背景の高さ変更時のイベントリスナー
    textBackgroundHeightInput1.addEventListener('input', (e) => {
        console.log('テキストの背景の高さ1変更イベントが発生しました');
        textBackgroundHeight1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textBackgroundHeightInput2.addEventListener('input', (e) => {
        console.log('テキストの背景の高さ2変更イベントが発生しました');
        textBackgroundHeight2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // テキストの背景のパディング変更時のイベントリスナー
    textBackgroundPaddingInput1.addEventListener('input', (e) => {
        console.log('テキストの背景のパディング1変更イベントが発生しました');
        textBackgroundPadding1 = parseInt(e.target.value);
        redrawCanvas();
    });
    textBackgroundPaddingInput2.addEventListener('input', (e) => {
        console.log('テキストの背景のパディング2変更イベントが発生しました');
        textBackgroundPadding2 = parseInt(e.target.value);
        redrawCanvas();
    });

    // 画像のスケール変更時のイベントリスナー
    imageScaleInput.addEventListener('input', (e) => {
        console.log('画像のスケール変更イベントが発生しました');
        imageScale = parseFloat(e.target.value);
        redrawCanvas();
    });

    // 画像のX座標変更時のイベントリスナー
    imageXInput.addEventListener('input', (e) => {
        console.log('画像のX座標変更イベントが発生しました');
        imageX = parseInt(e.target.value);
        redrawCanvas();
    });

    // 画像のY座標変更時のイベントリスナー
    imageYInput.addEventListener('input', (e) => {
        console.log('画像のY座標変更イベントが発生しました');
        imageY = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // 画像のリサイズボタンのイベントリスナー
    resizeImageButton.addEventListener('click', () => {
        console.log('画像のリサイズボタンがクリックされました');
        if (uploadedImage) {
            if (isWidthResizeMode) {
                // 幅1280pxにリサイズ
                const targetWidth = 1280;
                const scale = targetWidth / uploadedImage.width;
                imageScale = scale;
                imageX = 0; // X座標を0に設定
                imageY = 0; // Y座標を0に設定
                imageScaleInput.value = imageScale;
                imageXInput.value = imageX;
                imageYInput.value = imageY;
                resizeImageButton.textContent = '高さ720pxにリサイズ'; // ボタンのテキストを変更
                resizeImageButton.classList.add('height-resize'); // ボタンのクラスを追加
                isWidthResizeMode = false; // モードを高さリサイズに変更
            } else {
                // 高さ720pxにリサイズ
                const targetHeight = 720;
                const scale = targetHeight / uploadedImage.height;
                imageScale = scale;
                imageX = 0; // X座標を0に設定
                imageY = 0; // Y座標を0に設定
                imageScaleInput.value = imageScale;
                imageXInput.value = imageX;
                imageYInput.value = imageY;
                resizeImageButton.textContent = '幅1280pxにリサイズ'; // ボタンのテキストを変更
                resizeImageButton.classList.remove('height-resize'); // ボタンのクラスを削除
                isWidthResizeMode = true; // モードを幅リサイズに変更
            }
            redrawCanvas();
        } else {
            console.log('画像がアップロードされていません');
            alert('画像をアップロードしてください');
        }
    });

    // ロゴのスケール変更時のイベントリスナー
    logoScaleInput.addEventListener('input', (e) => {
        console.log('ロゴのスケール変更イベントが発生しました');
        logoScale = parseFloat(e.target.value);
        redrawCanvas();
    });

    // ロゴのX座標変更時のイベントリスナー
    logoXInput.addEventListener('input', (e) => {
        console.log('ロゴのX座標変更イベントが発生しました');
        logoX = parseInt(e.target.value);
        redrawCanvas();
    });

    // ロゴのY座標変更時のイベントリスナー
    logoYInput.addEventListener('input', (e) => {
        console.log('ロゴのY座標変更イベントが発生しました');
        logoY = parseInt(e.target.value);
        redrawCanvas();
    });
    
    // ロゴのエッジの色選択ボタンのイベントリスナー
    logoEdgeColorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('ロゴのエッジの色選択ボタンがクリックされました');
            logoEdgeColor = e.target.dataset.color;
            redrawCanvas();
        });
    });

    // ロゴのカスタムエッジカラーピッカーのイベントリスナー
    customLogoEdgeColorInput.addEventListener('change', (e) => {
        console.log('ロゴのカスタムエッジカラーピッカーの値が変更されました');
        logoEdgeColor = e.target.value;
        redrawCanvas();
    });

    // ロゴのエッジの太さ変更時のイベントリスナー
    logoEdgeWidthInput.addEventListener('input', (e) => {
        console.log('ロゴのエッジの太さ変更イベントが発生しました');
        logoEdgeWidth = parseInt(e.target.value);
        redrawCanvas();
    });

    // スタイルパネルの表示/非表示を切り替えるチェックボックスのイベントリスナー
    showStylePanel.addEventListener('change', (e) => {
        console.log('スタイルパネルの表示/非表示チェックボックスが変更されました');
        if (e.target.checked) {
            textPresetPanel.style.display = 'block'; // 表示
        } else {
            textPresetPanel.style.display = 'none'; // 非表示
        }
    });
    // スタイルパネルの表示/非表示を切り替えるボタンのイベントリスナー
    showStylePanelButton.addEventListener('click', () => {
        const isChecked = !showStylePanelButton.classList.contains('active');
        showStylePanelButton.classList.toggle('active', isChecked);
        textPresetPanel.style.display = isChecked ? 'block' : 'none';
    });

    // 画像のリセットボタンのイベントリスナー
    resetImageButton.addEventListener('click', () => {
        console.log('画像のリセットボタンがクリックされました');
        imageScale = 0.667;
        imageX = 0;
        imageY = 0;
        imageScaleInput.value = imageScale;
        imageXInput.value = imageX;
        imageYInput.value = imageY;
        redrawCanvas();
    });

    // ロゴのリセットボタンのイベントリスナー
    resetLogoButton.addEventListener('click', () => {
        console.log('ロゴのリセットボタンがクリックされました');
        logoScale = 1;
        logoX = 10;
        logoY = 10;
        logoEdgeWidth = 0;
        logoEdgeColor = "rgb(255, 255, 255)"
        logoScaleInput.value = logoScale;
        logoXInput.value = logoX;
        logoYInput.value = logoY;
        logoEdgeWidthInput.value = logoEdgeWidth;
        customLogoEdgeColorInput.value = logoEdgeColor;
        redrawCanvas();
    });
    
    // ロゴのシャドウのリセットボタンのイベントリスナー
    resetLogoShadowButton.addEventListener('click', () => {
        console.log('ロゴのリセットボタンがクリックされました');
        logoShadowBlur = 0;
        logoShadowOffsetX = 0;
        logoShadowOffsetY = 0;
        logoShadowBlurInput.value = logoShadowBlur;
        logoShadowOffsetXInput.value = logoShadowOffsetX;
        logoShadowOffsetYInput.value = logoShadowOffsetY;
        redrawCanvas();
    });

    // ロゴのプリセットボタンのイベントリスナー
    presetLogoButton.addEventListener('click', () => {
        console.log('プリセットボタンがクリックされました');
        logoScale = 4;
        logoX = 40;
        logoY = 50;
        logoEdgeWidth = 15;
        logoEdgeColor = "rgb(240, 220, 2)";
        textY1 = 490;
        textY2 = 650;
        fontSize2 = 85;
        outerEdgeWidth1 = 16;        
        outerEdgeColor1 = "#FFFFFF";
        outerEdgeWidth2 = 10;        
        textBackgroundOpacity2 = 1;
        textBackgroundHeight2 = -80;
        textBackgroundColor2 = "green";
        textBackgroundPadding2 = 20;
        shadowColor1 = 'red';
        shadowBlur1 = 30;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        shadowColor2 = 'black';
        shadowBlur2 = 5;
        shadowOffsetX2 = 5;
        shadowOffsetY2 = 3;
        logoScaleInput.value = logoScale;
        logoXInput.value = logoX;
        logoYInput.value = logoY;
        logoEdgeWidthInput.value = logoEdgeWidth;
        customLogoEdgeColorInput.value = logoEdgeColor;
        textYInput1.value = textY1;
        textYInput2.value = textY2;
        fontSizeInput2.value = fontSize2;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        textBackgroundOpacityInput2.value = textBackgroundOpacity2;
        textBackgroundHeightInput2.value = textBackgroundHeight2;
        customTextBackgroundColorInput2.value = textBackgroundColor2;
        textBackgroundPaddingInput2.value = textBackgroundPadding2;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    
    // 動画のプリセットボタンのイベントリスナー
    presetVideoButton.addEventListener('click', () => {
        console.log('動画のプリセットボタンがクリックされました');
        videoScale = videoScale * 0.62;
        videoEdgeWidth = 15;
        videoEdgeColor = "rgb(240, 220, 2)";
        videoX = -195;
        videoY = -65;
        textY1 = 490;
        textY2 = 650;
        fontSize2 = 85;
        outerEdgeWidth1 = 16;        
        outerEdgeColor1 = "#FFFFFF";        
        outerEdgeWidth2 = 15;
        textBackgroundOpacity2 = 1;
        textBackgroundHeight2 = -80;
        textBackgroundColor2 = "green";
        textBackgroundPadding2 = 20;
        shadowColor1 = 'red';
        shadowBlur1 = 30;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        shadowColor2 = 'black';
        shadowBlur2 = 8;
        shadowOffsetX2 = 12;
        shadowOffsetY2 = -5;
        videoSizeSlider.value = videoScale * 100; // スライダーの値を更新
        videoXSlider.value = videoX;
        videoYSlider.value = videoY;
        videoEdgeWidthSlider.value = videoEdgeWidth;
        customVideoEdgeColor.value = videoEdgeColor;
        textYInput1.value = textY1;
        textYInput2.value = textY2;
        fontSizeInput2.value = fontSize2;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        textBackgroundOpacityInput2.value = textBackgroundOpacity2;
        textBackgroundHeightInput2.value = textBackgroundHeight2;
        customTextBackgroundColorInput2.value = textBackgroundColor2;
        textBackgroundPaddingInput2.value = textBackgroundPadding2;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        redrawCanvas();
    });

    // 動画のリサイズボタンのイベントリスナー
    resizeVideoButton.addEventListener('click', () => {
        console.log('動画のリサイズボタンがクリックされました');
        if (uploadedVideo) {
            if (isVideoWidthResizeMode) {
                // 幅1280pxにリサイズ
                const targetWidth = 1280;
                const scale = targetWidth / uploadedVideo.videoWidth;
                videoScale = scale;
                videoX = 0; // X座標を0に設定
                videoY = 0; // Y座標を0に設定
                videoSizeSlider.value = videoScale * 100; // スライダーの値を更新
                videoXSlider.value = videoX;
                videoYSlider.value = videoY;
                resizeVideoButton.textContent = '高さ720pxにリサイズ'; // ボタンのテキストを変更
                resizeVideoButton.classList.add('height-resize'); // ボタンのクラスを追加
                isVideoWidthResizeMode = false; // モードを高さリサイズに変更
            } else if (!isVideoWidthResizeMode && resizeVideoButton.textContent === '高さ720pxにリサイズ') {
                // 高さ720pxにリサイズ
                const targetHeight = 720;
                const scale = targetHeight / uploadedVideo.videoHeight;
                videoScale = scale;
                videoX = 0; // X座標を0に設定
                videoY = 0; // Y座標を0に設定
                videoSizeSlider.value = videoScale * 100; // スライダーの値を更新
                videoXSlider.value = videoX;
                videoYSlider.value = videoY;
                resizeVideoButton.textContent = '元のサイズに戻す'; // ボタンのテキストを変更
                resizeVideoButton.classList.remove('height-resize'); // ボタンのクラスを削除
                isVideoWidthResizeMode = false; // モードを高さリサイズに変更
            } else {
                // 元のサイズに戻す
                videoScale = 1.0; // スケールを1.0に戻す
                videoX = 0; // X座標を0に設定
                videoY = 0; // Y座標を0に設定
                videoSizeSlider.value = videoScale * 100; // スライダーの値を更新
                videoXSlider.value = videoX;
                videoYSlider.value = videoY;
                resizeVideoButton.textContent = '幅1280pxにリサイズ'; // ボタンのテキストを変更
                resizeVideoButton.classList.remove('height-resize'); // ボタンのクラスを削除
                isVideoWidthResizeMode = true; // モードを幅リサイズに変更
            }
            redrawCanvas();
        } else {
            console.log('動画がアップロードされていません');
            alert('動画をアップロードしてください');
        }
    });

    // タイトル／テキストプリセットボタンのイベントリスナー
    // タイトルデフォルト
    textPresetButtonA0.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(255, 255, 255)";
        edgeWidth1 = 13;
        edgeColor1 = "rgb(244, 5, 5)";
        outerEdgeWidth1 = 14;        
        outerEdgeColor1 = "rgb(255, 255, 255)";
        shadowColor1 = "rgb(255, 255, 255)";
        shadowBlur1 = 0;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル１
    textPresetButtonA1.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(255, 255, 255)";
        edgeWidth1 = 15;
        edgeColor1 = "rgb(240, 6, 2)";
        outerEdgeWidth1 = 26;        
        outerEdgeColor1 = "rgb(255, 215, 15)";
        shadowColor1 = 'red';
        shadowBlur1 = 0;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });    
    // タイトル２
    textPresetButtonA2.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(255, 255, 255)";
        edgeWidth1 = 0;
        edgeColor1 = "rgb(240, 6, 2)";
        outerEdgeWidth1 = 0;        
        outerEdgeColor1 = "rgb(255, 215, 15)";
        shadowColor1 = 'black';
        shadowBlur1 = 20;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル３
    textPresetButtonA3.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(224, 7, 7)";
        edgeWidth1 = 8;
        edgeColor1 = "rgb(255, 255, 255)";
        outerEdgeWidth1 = 20;        
        outerEdgeColor1 = "rgb(253, 39, 39)";
        shadowColor1 = "rgb(224, 7, 7)";
        shadowBlur1 = 0;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル４
    textPresetButtonA4.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(255, 255, 255)";
        edgeWidth1 = 1;
        edgeColor1 = "rgb(0, 0, 0)";
        outerEdgeWidth1 = 0;        
        outerEdgeColor1 = "rgb(255, 255, 255)";
        shadowColor1 = 'black';
        shadowBlur1 = 5;
        shadowOffsetX1 = 5;
        shadowOffsetY1 = 5;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル５
    textPresetButtonA5.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(253, 173, 1)";
        edgeWidth1 = 16;
        edgeColor1 = "rgb(255, 255, 255)";
        outerEdgeWidth1 = 17;        
        outerEdgeColor1 = "rgb(107, 57, 0)";
        shadowColor1 = "rgb(107, 57, 0)";
        shadowBlur1 = 5;
        shadowOffsetX1 = 12;
        shadowOffsetY1 = 12;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル６
    textPresetButtonA6.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(253, 232, 1)";
        edgeWidth1 = 6;
        edgeColor1 = "rgb(0, 0, 0)";
        outerEdgeWidth1 = 20;        
        outerEdgeColor1 = "rgb(255, 255, 255)";
        shadowColor1 = "rgb(255, 255, 255)";
        shadowBlur1 = 0;
        shadowOffsetX1 = 0;
        shadowOffsetY1 = 0;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });
    // タイトル７
    textPresetButtonA7.addEventListener('click', () => {
        console.log('タイトルプリセットボタンがクリックされました');
        textColor1 = "rgb(255, 69, 205)";
        edgeWidth1 = 12;
        edgeColor1 = "rgb(105, 0, 0)";
        outerEdgeWidth1 = 25;        
        outerEdgeColor1 = "rgb(255, 255, 255)";
        shadowColor1 = "rgb(255, 0, 0)";
        shadowBlur1 = 30;
        shadowOffsetX1 = 5;
        shadowOffsetY1 = 8;
        edgeWidthInput1.value = edgeWidth1;
        customEdgeColorInput1.value = edgeColor1;
        outerEdgeWidthInput1.value = outerEdgeWidth1;
        customOuterEdgeColorInput1.value = outerEdgeColor1;
        customShadowColorInput1.value = shadowColor1;
        shadowBlurInput1.value = shadowBlur1;
        shadowOffsetXInput1.value = shadowOffsetX1;
        shadowOffsetYInput1.value = shadowOffsetY1;
        
        redrawCanvas();
    });

    // タイトル位置デフォルト
    textPresetButtonA0P.addEventListener('click', () => {
        console.log('タイトル位置プリセットボタンがクリックされました');
        textX1 = 50;
        textY1 = 400;
        textYInput1.value = textX1;
        textYInput1.value = textY1;

        redrawCanvas();
    });

    // タイトル位置１
    textPresetButtonA1P.addEventListener('click', () => {
        console.log('タイトル位置プリセットボタンがクリックされました');
        textX1 = 50;
        textY1 = 490;
        textYInput1.value = textX1;
        textYInput1.value = textY1;

        redrawCanvas();
    });

    // タイトル位置２
    textPresetButtonA2P.addEventListener('click', () => {
        console.log('タイトル位置プリセットボタンがクリックされました');
        textX1 = 50;
        textY1 = 340;
        textYInput1.value = textX1;
        textYInput1.value = textY1;

        redrawCanvas();
    });

    // テキストデフォルト
    textPresetButtonB0.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(255, 136, 0)";
        edgeWidth2 = 10;
        edgeColor2 = "rgb(255, 255, 255)";
        outerEdgeWidth2 = 11;        
        outerEdgeColor2 = "rgb(255, 136, 0)";
        shadowColor2 = 'black';
        shadowBlur2 = 8;
        shadowOffsetX2 = 8;
        shadowOffsetY2 = -5;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト１
    textPresetButtonB1.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(255, 255, 255)";
        edgeWidth2 = 8;
        edgeColor2 = "rgb(247, 168, 11)";
        outerEdgeWidth2 = 17;        
        outerEdgeColor2 = "rgb(255, 255, 255)";
        shadowColor2 = "rgb(255, 207, 151)";
        shadowBlur2 = 5;
        shadowOffsetX2 = 12;
        shadowOffsetY2 = 12;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト２
    textPresetButtonB2.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(255, 242, 0)";
        edgeWidth2 = 5;
        edgeColor2 = "rgb(10, 10, 10)";
        outerEdgeWidth2 = 15;        
        outerEdgeColor2 = "rgb(255, 255, 255)";
        shadowColor2 = "rgb(255, 239, 14)";
        shadowBlur2 = 0;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト３
    textPresetButtonB3.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(0, 0, 0)";
        edgeWidth2 = 0;
        edgeColor2 = "rgb(255, 255, 255)";
        outerEdgeWidth2 = 4;        
        outerEdgeColor2 = "rgb(255, 255, 255)";
        shadowColor2 = "rgb(255, 255, 255)";
        shadowBlur2 = 12;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト４
    textPresetButtonB4.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(255, 255, 255)";
        edgeWidth2 = 1;
        edgeColor2 = "rgb(135, 135, 135)";
        outerEdgeWidth2 = 0;        
        outerEdgeColor2 = "rgb(255, 255, 255)";
        shadowColor2 = "rgb(0, 0, 0)";
        shadowBlur2 = 12;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト５
    textPresetButtonB5.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(37, 219, 255)";
        edgeWidth2 = 10;
        edgeColor2 = "rgb(255, 255, 255)";
        outerEdgeWidth2 = 15;        
        outerEdgeColor2 = "rgb(37, 219, 255)";
        shadowColor2 = "rgb(255, 255, 255)";
        shadowBlur2 = 12;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト６
    textPresetButtonB6.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(19, 188, 0)";
        edgeWidth2 = 10;
        edgeColor2 = "rgb(255, 255, 255)";
        outerEdgeWidth2 = 15;        
        outerEdgeColor2 = "rgb(2, 89, 1)";
        shadowColor2 = "rgb(85, 255, 0)";
        shadowBlur2 = 25;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });
    // テキスト７
    textPresetButtonB7.addEventListener('click', () => {
        console.log('テキストプリセットボタンがクリックされました');
        textColor2 = "rgb(255, 47, 220)";
        edgeWidth2 = 10;
        edgeColor2 = "rgb(255, 255, 255)";
        outerEdgeWidth2 = 15;        
        outerEdgeColor2 = "rgb(205, 0, 171)";
        shadowColor2 = "rgb(255, 0, 174)";
        shadowBlur2 = 25;
        shadowOffsetX2 = 0;
        shadowOffsetY2 = 0;
        edgeWidthInput2.value = edgeWidth2;
        customEdgeColorInput2.value = edgeColor2;
        outerEdgeWidthInput2.value = outerEdgeWidth2;
        customOuterEdgeColorInput2.value = outerEdgeColor2;
        customShadowColorInput2.value = shadowColor2;
        shadowBlurInput2.value = shadowBlur2;
        shadowOffsetXInput2.value = shadowOffsetX2;
        shadowOffsetYInput2.value = shadowOffsetY2;
        
        redrawCanvas();
    });


    // テキスト背景デフォルト
    textPresetButtonB0B.addEventListener('click', () => {
        console.log('テキスト背景プリセットボタンがクリックされました');
        textBackgroundOpacity2 = 0;
        textBackgroundHeight2 = 0;
        textBackgroundColor2 = "black";
        textBackgroundPadding2 = 0;
        textBackgroundOpacityInput2.value = textBackgroundOpacity2;
        textBackgroundHeightInput2.value = textBackgroundHeight2;
        customTextBackgroundColorInput2.value = textBackgroundColor2;
        textBackgroundPaddingInput2.value = textBackgroundPadding2;
        
        redrawCanvas();
    });

    // テキスト背景１
    textPresetButtonB1B.addEventListener('click', () => {
        console.log('テキスト背景プリセットボタンがクリックされました');
        textBackgroundOpacity2 = 1;
        textBackgroundHeight2 = -80;
        textBackgroundColor2 = "green";
        textBackgroundPadding2 = 20;
        textBackgroundOpacityInput2.value = textBackgroundOpacity2;
        textBackgroundHeightInput2.value = textBackgroundHeight2;
        customTextBackgroundColorInput2.value = textBackgroundColor2;
        textBackgroundPaddingInput2.value = textBackgroundPadding2;
        
        redrawCanvas();
    });

    // テキスト背景２
    textPresetButtonB2B.addEventListener('click', () => {
        console.log('テキスト背景プリセットボタンがクリックされました');
        textBackgroundOpacity2 = 1;
        textBackgroundHeight2 = -120;
        textBackgroundColor2 = "green";
        textBackgroundPadding2 = 20;
        textBackgroundOpacityInput2.value = textBackgroundOpacity2;
        textBackgroundHeightInput2.value = textBackgroundHeight2;
        customTextBackgroundColorInput2.value = textBackgroundColor2;
        textBackgroundPaddingInput2.value = textBackgroundPadding2;
        
        redrawCanvas();
    });


    // Canvasの再描画
    function redrawCanvas() {
        console.log('redrawCanvas() が呼び出されました');

        // Canvasをクリア
        ctx.clearRect(0, 0, thumbnailCanvas.width, thumbnailCanvas.height);

        // 画像の描画
        if (uploadedImage) {
            console.log('画像をCanvasに描画します');
            // スライダーの値を使って画像のサイズと位置を計算
            const imageWidth = uploadedImage.width * imageScale;
            const imageHeight = uploadedImage.height * imageScale;
            ctx.drawImage(uploadedImage, imageX, imageY, imageWidth, imageHeight);
        } else {
            console.log('画像はまだアップロードされていません');
        }
        
        // 動画がアップロードされている場合、現在のフレームを描画
        if (uploadedVideo.src) {
            console.log("動画を描画します");
            const videoWidth = uploadedVideo.videoWidth * videoScale;
            const videoHeight = uploadedVideo.videoHeight * videoScale;
            // drawXとdrawYをここで計算
            const drawX = (thumbnailCanvas.width - videoWidth) / 2 + videoX;
            const drawY = (thumbnailCanvas.height - videoHeight) / 2 + videoY;

            // エッジの描画
            if (videoEdgeWidth > 0) {
                ctx.strokeStyle = videoEdgeColor;
                ctx.lineWidth = videoEdgeWidth;
                ctx.strokeRect(drawX, drawY, videoWidth, videoHeight);
            }
            ctx.drawImage(uploadedVideo, drawX, drawY, videoWidth, videoHeight);
        }

        // ロゴの描画
        if (uploadedLogo) {
            console.log('ロゴをCanvasに描画します');
            // スライダーの値を使ってロゴのサイズと位置を計算
            const logoWidth = logoScale * 200; // ロゴの幅をスケールに合わせて変更
            const logoHeight = uploadedLogo.height * (logoWidth / uploadedLogo.width); // 縦横比を維持した高さ

            // シャドウ描画用の一時的な Canvas を作成
            const shadowTempCanvas = document.createElement('canvas');
            shadowTempCanvas.width = logoWidth;
            shadowTempCanvas.height = logoHeight;
            const shadowTempCtx = shadowTempCanvas.getContext('2d');

            // シャドウの設定
            shadowTempCtx.shadowColor = logoShadowColor; // シャドウの色を設定
            shadowTempCtx.shadowBlur = logoShadowBlur; // シャドウのぼかしを設定
            shadowTempCtx.shadowOffsetX = logoShadowOffsetX; // シャドウのXオフセットを設定
            shadowTempCtx.shadowOffsetY = logoShadowOffsetY; // シャドウのYオフセットを設定

            // ロゴ画像をシャドウ描画用の一時的な Canvas に描画
            shadowTempCtx.drawImage(uploadedLogo, 0, 0, logoWidth, logoHeight);

            // シャドウが描画された一時的な Canvas をメインの Canvas に描画
            ctx.drawImage(shadowTempCanvas, logoX, logoY);

            // シャドウのリセット
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            // エッジの描画
            if (logoEdgeWidth > 0) {
                ctx.strokeStyle = logoEdgeColor;
                ctx.lineWidth = logoEdgeWidth;
                ctx.strokeRect(logoX, logoY, logoWidth, logoHeight);
            }

            // ロゴ画像をメインのCanvasに描画
            ctx.drawImage(uploadedLogo, logoX, logoY, logoWidth, logoHeight);

        } else {
            console.log('ロゴはまだアップロードされていません');
        }

        // ロゴ2の描画
        if (uploadedLogo2) {
            console.log('ロゴ2をCanvasに描画します');
            // スライダーの値を使ってロゴのサイズと位置を計算
            const logo2Width = logo2Scale * 200; // ロゴの幅をスケールに合わせて変更
            const logo2Height = uploadedLogo2.height * (logo2Width / uploadedLogo2.width); // 縦横比を維持した高さ

            // シャドウ描画用の一時的な Canvas を作成
            const shadowTempCanvas = document.createElement('canvas');
            shadowTempCanvas.width = logo2Width;
            shadowTempCanvas.height = logo2Height;
            const shadowTempCtx = shadowTempCanvas.getContext('2d');

            // シャドウの設定
            shadowTempCtx.shadowColor = logo2ShadowColor; // シャドウの色を設定
            shadowTempCtx.shadowBlur = logo2ShadowBlur; // シャドウのぼかしを設定
            shadowTempCtx.shadowOffsetX = logo2ShadowOffsetX; // シャドウのXオフセットを設定
            shadowTempCtx.shadowOffsetY = logo2ShadowOffsetY; // シャドウのYオフセットを設定

            // ロゴ画像をシャドウ描画用の一時的な Canvas に描画
            shadowTempCtx.drawImage(uploadedLogo2, 0, 0, logo2Width, logo2Height);

            // シャドウが描画された一時的な Canvas をメインの Canvas に描画
            ctx.drawImage(shadowTempCanvas, logo2X, logo2Y);

            // シャドウのリセット
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            // エッジの描画
            if (logo2EdgeWidth > 0) {
                ctx.strokeStyle = logo2EdgeColor;
                ctx.lineWidth = logo2EdgeWidth;
                ctx.strokeRect(logo2X, logo2Y, logo2Width, logo2Height);
            }

            // ロゴ画像をメインのCanvasに描画
            ctx.drawImage(uploadedLogo2, logo2X, logo2Y, logo2Width, logo2Height);

        } else {
            console.log('ロゴ2はまだアップロードされていません');
        }

        // テキストの描画
        console.log('テキストを描画します');
        // テキスト1の背景を描画
        ctx.fillStyle = textBackgroundColor1;
        ctx.globalAlpha = textBackgroundOpacity1;
        const textLines1 = text1.split('\n'); // 改行でテキストを分割
        const lineHeight1 = fontSize1; // 行の高さをフォントサイズとする
        ctx.font = `${fontSize1}px ${fontFamily1}`; // フォントとフォントサイズを設定
        // テキストの幅を計算
        const textWidth1 = Math.max(...textLines1.map(line => ctx.measureText(line).width));
        // 背景の幅をテキストの幅に合わせて調整
        const backgroundWidth1 = textWidth1 + textBackgroundPadding1 * 2;
        const backgroundX1 = textX1 - textBackgroundPadding1;
        // テキスト全体の高さを計算
        const textHeight1 = lineHeight1 * textLines1.length;
        // 背景のY座標を調整
        const backgroundY1 = textY1 - lineHeight1;
        ctx.fillRect(backgroundX1, backgroundY1 - textBackgroundPadding1 - textBackgroundHeight1, textBackgroundWidth1 + backgroundWidth1, textHeight1 + textBackgroundPadding1 * 2 + textBackgroundHeight1);
        ctx.globalAlpha = 1.0; // 不透明度をリセット
        // シャドウの設定
        ctx.shadowColor = shadowColor1;
        ctx.shadowBlur = shadowBlur1;
        ctx.shadowOffsetX = shadowOffsetX1;
        ctx.shadowOffsetY = shadowOffsetY1;
        
        // テキスト1のシャドウを描画（テキストと同じ色で描画）
        ctx.fillStyle = shadowColor1; // シャドウの色で塗りつぶす
        // 回転の中心を設定
        ctx.translate(textX1, textY1);
        // テキストを回転
        ctx.rotate(textRotation1 * Math.PI / 180);
        textLines1.forEach((line, index) => {
            ctx.fillText(line, 0, index * lineHeight1);
        });
        // 回転をリセット
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        // シャドウのリセット
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // 外側のエッジの描画
        if (outerEdgeWidth1 > 0) {
            ctx.strokeStyle = outerEdgeColor1;
            ctx.lineWidth = outerEdgeWidth1;
            // 回転の中心を設定
            ctx.translate(textX1, textY1);
            // テキストを回転
            ctx.rotate(textRotation1 * Math.PI / 180);
            textLines1.forEach((line, index) => {
                ctx.strokeText(line, 0, index * lineHeight1);
            });
            // 回転をリセット
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        // シャドウのリセット
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // エッジの描画
        if (edgeWidth1 > 0) {
            ctx.strokeStyle = edgeColor1;
            ctx.lineWidth = edgeWidth1;
            // 回転の中心を設定
            ctx.translate(textX1, textY1);
            // テキストを回転
            ctx.rotate(textRotation1 * Math.PI / 180);
            textLines1.forEach((line, index) => {
                ctx.strokeText(line, 0, index * lineHeight1);
            });
            // 回転をリセット
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        ctx.fillStyle = textColor1; // テキストの色を設定
        // 回転の中心を設定
        ctx.translate(textX1, textY1);
        // テキストを回転
        ctx.rotate(textRotation1 * Math.PI / 180);
        textLines1.forEach((line, index) => {
            ctx.fillText(line, 0, index * lineHeight1);
        });
        // 回転をリセット
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // テキスト2の背景を描画
        ctx.fillStyle = textBackgroundColor2;
        ctx.globalAlpha = textBackgroundOpacity2;
        const textLines2 = text2.split('\n'); // 改行でテキストを分割
        const lineHeight2 = fontSize2; // 行の高さをフォントサイズとする
        ctx.font = `${fontSize2}px ${fontFamily2}`; // フォントとフォントサイズを設定
        // テキストの幅を計算
        const textWidth2 = Math.max(...textLines2.map(line => ctx.measureText(line).width));
        // 背景の幅をテキストの幅に合わせて調整
        const backgroundWidth2 = textWidth2 + textBackgroundPadding2 * 2;
        const backgroundX2 = textX2 - textBackgroundPadding2;
        // テキスト全体の高さを計算
        const textHeight2 = lineHeight2 * textLines2.length;
        // 背景のY座標を調整
        const backgroundY2 = textY2 - lineHeight2;
        ctx.fillRect(backgroundX2, backgroundY2 - textBackgroundPadding2 - textBackgroundHeight2, textBackgroundWidth2 + backgroundWidth2, textHeight2 + textBackgroundPadding2 * 2 + textBackgroundHeight2);
        ctx.globalAlpha = 1.0; // 不透明度をリセット
        
        // シャドウの設定
        ctx.shadowColor = shadowColor2;
        ctx.shadowBlur = shadowBlur2;
        ctx.shadowOffsetX = shadowOffsetX2;
        ctx.shadowOffsetY = shadowOffsetY2;
        
        
        // テキスト2のシャドウを描画（テキストと同じ色で描画）
        ctx.fillStyle = shadowColor2; // シャドウの色で塗りつぶす
        // 回転の中心を設定
        ctx.translate(textX2, textY2);
        // テキストを回転
        ctx.rotate(textRotation2 * Math.PI / 180);
        textLines2.forEach((line, index) => {
            ctx.fillText(line, 0, index * lineHeight2);
        });
        // 回転をリセット
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        // シャドウのリセット
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // 外側のエッジの描画
        if (outerEdgeWidth2 > 0) {
            ctx.strokeStyle = outerEdgeColor2;
            ctx.lineWidth = outerEdgeWidth2;
            // 回転の中心を設定
            ctx.translate(textX2, textY2);
            // テキストを回転
            ctx.rotate(textRotation2 * Math.PI / 180);
            textLines2.forEach((line, index) => {
                ctx.strokeText(line, 0, index * lineHeight2);
            });
            // 回転をリセット
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        // シャドウのリセット
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // エッジの描画
        if (edgeWidth2 > 0) {
            ctx.strokeStyle = edgeColor2;
            ctx.lineWidth = edgeWidth2;
            // 回転の中心を設定
            ctx.translate(textX2, textY2);
            // テキストを回転
            ctx.rotate(textRotation2 * Math.PI / 180);
            textLines2.forEach((line, index) => {
                ctx.strokeText(line, 0, index * lineHeight2);
            });
            // 回転をリセット
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        ctx.fillStyle = textColor2; // テキストの色を設定
        // 回転の中心を設定
        ctx.translate(textX2, textY2);
        // テキストを回転
        ctx.rotate(textRotation2 * Math.PI / 180);
        textLines2.forEach((line, index) => {
            ctx.fillText(line, 0, index * lineHeight2);
        });
        // 回転をリセット
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    // ウィンドウのリサイズイベントを監視
    window.addEventListener('resize', () => {
        console.log('ウィンドウのリサイズイベントが発生しました');
        // Canvasのサイズを再計算
        const previewWidth = document.querySelector('.preview').offsetWidth;
        const previewHeight = document.querySelector('.preview').offsetHeight;
        const aspectRatio = 1280 / 720; // アスペクト比を計算

        if (previewWidth / previewHeight > aspectRatio) {
            thumbnailCanvas.style.width = `${previewHeight * aspectRatio}px`;
            thumbnailCanvas.style.height = `${previewHeight}px`;
        } else {
            thumbnailCanvas.style.width = `${previewWidth}px`;
            thumbnailCanvas.style.height = `${previewWidth / aspectRatio}px`;
        }

        redrawCanvas();
    });

    // DOMContentLoaded イベントで redrawCanvas() を呼び出す
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded イベントが発生しました');
        redrawCanvas();
    });

    // 生成ボタンクリック時の処理 (ダウンロード機能)
    generateButton.addEventListener('click', async () => {
        console.log('ダウンロードボタンがクリックされました');

        // ダウンロード機能
        console.log('ダウンロード処理を開始します');
        const dataURL = thumbnailCanvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'thumbnail.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        console.log('ダウンロード処理が完了しました');
        // alert('ダウンロードできました！');
    });
    // 生成ボタンクリック時の処理 (クリップボードコピー機能)
    generateCopyButton.addEventListener('click', async () => {
        console.log('クリップボードコピーボタンがクリックされました');
        // クリップボードコピー機能
    console.log('クリップボードコピー処理を開始します');
    try {
        // CanvasからBlobを作成
        const blob = await new Promise(resolve => thumbnailCanvas.toBlob(resolve, 'image/png'));

        // ImageBitmapを作成 (非同期)
        const bitmap = await createImageBitmap(blob);

        // Clipboard APIを使ってコピー
        await navigator.clipboard.write([
            new ClipboardItem({
                'image/png': blob
            })
        ]);

        alert('クリップボードにコピーしました！');
        console.log('クリップボードコピー処理が完了しました');

    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました: ', err);
        alert('クリップボードへのコピーに失敗しました。\n' + err);
    }
    });

    function handleFiles(files, uploadType) {
        ([...files]).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (uploadType === 'imageUpload') {
                   console.log('Uploaded image file:', file);
                    uploadedImage = new Image();
                    uploadedImage.onload = () => {
                        console.log('画像オブジェクト読み込み完了');
                        redrawCanvas();
                    };
                    uploadedImage.src = event.target.result;
                     console.log('Uploaded image src:',  uploadedImage.src);
                } else if (uploadType === 'logoUpload') {
                    console.log('Uploaded logo file:', file);
                    uploadedLogo = new Image();
                    uploadedLogo.onload = () => {
                        console.log('ロゴオブジェクト読み込み完了');
                        redrawCanvas();
                    };
                    uploadedLogo.src = event.target.result;
                    console.log('Uploaded logo src:',  uploadedLogo.src);
                }
            };
            reader.readAsDataURL(file);
        });
    }
      // Webフォントを読み込む関数
    function loadWebFont(font, fontSize, fontFamily, selectElement, fontWeight) {
        if (font && font.url) {
            // linkタグの重複を避けるため、すでに存在するか確認
            if (!document.querySelector(`link[href="${font.url}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = font.url;
                link.onload = () => {
                    console.log(`Webフォント "${font.name}" の読み込みが完了しました。`);
                    // フォントが読み込まれた後にctx.fontを設定
                    ctx.font = `${fontWeight} ${fontSize}px ${font.value}`;
                    // ドロップダウンの表示フォントを設定
                    selectElement.style.fontFamily = font.value;
                    redrawCanvas();
                };
                link.onerror = () => {
                    console.error(`Webフォント "${font.name}" の読み込みに失敗しました。`);
                    // フォントの読み込みに失敗した場合もctx.fontを設定
                    ctx.font = `400 ${fontSize}px Arial`;
                    // ドロップダウンの表示フォントを設定
                    selectElement.style.fontFamily = font.value;
                    redrawCanvas();
                };
                document.head.appendChild(link);
            } else {
                // フォントがすでに読み込まれている場合もctx.fontを設定
                ctx.font = `${fontWeight} ${fontSize}px ${font.value}`;
                // ドロップダウンの表示フォントを設定
                selectElement.style.fontFamily = font.value;
                redrawCanvas();
            }
        } else {
            // Webフォントでない場合もctx.fontを設定
            ctx.font = `400 ${fontSize}px Arial`;
            // ドロップダウンの表示フォントを設定
            selectElement.style.fontFamily = "Arial";
            redrawCanvas(); // Webフォントでない場合はすぐに再描画
        }
    }
      // フォントリストを動的に生成
    function populateFontList(selectElement, initialFont) {
        fontList.forEach(font => {
            const option = document.createElement('option');
            option.value = font.value;
            option.textContent = font.name;
            option.style.fontFamily = font.value;
            selectElement.appendChild(option);
            // 初期値が設定されている場合、selected属性を追加
            if (font.value === initialFont) {
                option.selected = true;
                // ドロップダウンの表示フォントを設定
                selectElement.style.fontFamily = font.value;
            }
        });
    }

    // 初期フォントリストの生成
    populateFontList(fontFamilySelect1, fontFamily1); // テキスト1の初期フォントを指定
    populateFontList(fontFamilySelect2, fontFamily2); // テキスト2の初期フォントを指定

    // フォント選択のイベントリスナー
    fontFamilySelect1.addEventListener('change', (e) => {
        console.log('フォント1が選択されました');
        const selectedFont = fontList.find(font => font.value === e.target.value);
        if (selectedFont) {
            fontFamily1 = selectedFont.value;
            // loadWebFontを呼び出す前にctx.fontを設定
            ctx.font = `${selectedFont.isBold ? '900' : '400'} ${fontSize1}px ${fontFamily1}`;
            loadWebFont(selectedFont, fontSize1, fontFamily1, fontFamilySelect1, selectedFont.isBold ? '900' : '400'); // fontFamilySelect1 を渡す
        } else {
            fontFamily1 = 'Dela Gothic One';
            // loadWebFontを呼び出す前にctx.fontを設定
            ctx.font = `900 ${fontSize1}px ${fontFamily1}`;
            loadWebFont({ value: 'Dela Gothic One' }, fontSize1, fontFamily1, fontFamilySelect1, '900'); // fontFamilySelect1 を渡す
        }
        redrawCanvas();
    });

    fontFamilySelect2.addEventListener('change', (e) => {
        console.log('フォント2が選択されました');
        const selectedFont = fontList.find(font => font.value === e.target.value);
        if (selectedFont) {
            fontFamily2 = selectedFont.value;
            // loadWebFontを呼び出す前にctx.fontを設定
            ctx.font = `${selectedFont.isBold ? '900' : '400'} ${fontSize2}px ${fontFamily2}`;
            loadWebFont(selectedFont, fontSize2, fontFamily2, fontFamilySelect2, selectedFont.isBold ? '900' : '400'); // fontFamilySelect2 を渡す
        } else {
            fontFamily2 = 'Stick';
            // loadWebFontを呼び出す前にctx.fontを設定
            ctx.font = `700 ${fontSize2}px ${fontFamily2}`;
            loadWebFont({ value: 'Stick' }, fontSize2, fontFamily2, fontFamilySelect2, '700'); // fontFamilySelect2 を渡す
        }
        redrawCanvas();
    });
    

    // テキストのグラデーションを適用する関数
    function applyTextGradient(ctx, text, x, y, fontSize, fontFamily, startColor, endColor, rotation) {
        ctx.font = `${fontSize}px ${fontFamily}`;
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const textHeight = fontSize; // 簡易的にフォントサイズを高さとする

        // グラデーションの作成
        const gradient = ctx.createLinearGradient(x, y - textHeight, x, y);
        gradient.addColorStop(0, startColor); // 上部の色
        gradient.addColorStop(1, endColor);   // 下部の色

        // グラデーションをfillStyleに設定
        ctx.fillStyle = gradient;

        // 回転の中心を設定
        ctx.translate(x, y);
        // テキストを回転
        ctx.rotate(rotation * Math.PI / 180);
        // テキストを描画
        ctx.fillText(text, 0, 0);
        // 回転をリセット
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    // JavaScript コード (ここまで)
})();