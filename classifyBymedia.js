//「媒体ごとに分ける」をクリックしたら発動
function classifyTriger() {
	const sheetByMedia = callSheets();//シートを特定
	deleteData(sheetByMedia);//以前のデータを削除
	const valueOfInputData = getInputData(),//データを取得
	listByMedia = generateExportData(valueOfInputData);//各媒体ごとにデータを分ける
	organizeList(sheetByMedia, listByMedia);//書き込む先のシートと書き込むデータを組み合わせて、書き込み用の関数に渡す
	getEroorCell();//転記漏れ件数を検知
}

//媒体ごとのシートを呼ぶ
function callSheets() {
	const lhSheet = getLhSheet(),//請求書（明細別）_lifehackerのシートを特定
	gizSheet = getGizSheet(),//請求書（明細別）_GIZMODOのシートを特定
	fuzeSheet = getFuzeSheet(),//請求書（明細別）_FUZEのシートを特定
	mlSheet = getMlSheet(),//請求書（明細別）_MYLOHASのシートを特定
	roSheet = getRoSheet(),//請求書（明細別）_ROOMIEのシートを特定
	biSheet = getBiSheet(),//請求書（明細別）_Business Insider Japanのシートを特定
	biPrimeSheet = getBiPrimeSheet(),//請求書（明細別）_Business Insider Japan（PRIME記事）のシートを特定
	digiSheet = getDigiSheet(),//請求書（明細別）_DIGIDAYのシートを特定
	ecSheet = getEcSheet(),//請求書（明細別）_ecのシートを特定
	muSheet = getMuSheet(),//請求書（明細別）_MASHING UPのシートを特定
	sixsSheet = getSixsSheet(),//請求書（明細別）_6&SENSEのシートを特定
	businessGrowhSheet = getBusinessGrowhSheet(),//請求書（明細別）_メディアグロースユニットのシートを特定
	mediaDevelopmentSheet = getMediaDevelopmentSheet();//請求書（明細別）_メディア開発ユニットのシートを特定
	return {
		'1': lhSheet,
		'2': gizSheet,
		'3': fuzeSheet,
		'4': mlSheet,
		'5': roSheet,
		'6': biSheet,
		'7': biPrimeSheet,
		'8': digiSheet,
		'9': ecSheet,
		'10': muSheet,
		'11': sixsSheet,
		'12': businessGrowhSheet,
		'13': mediaDevelopmentSheet	
	}
}

//媒体ごとのシートに転記する前に以前のデータを削除する
function deleteData(sheetByMedia) {
	let lastRow;//各媒体シートの最終行を格納するための変数

	for (let i = 1; Object.keys(sheetByMedia).length > i; i++) {//シートの数だけ
		lastRow =  sheetByMedia[i].getLastRow();//各シートの最終行を取得
		sheetByMedia[i].getRange(2,1,lastRow,44).clear();//各シートの見出し行を除いたデータを削除
	}
}


//「請求書(明細別)」に入力されているデータを取得する
function getInputData() {
	const inputDataSheet = getInputDataSheet(),//「請求書(明細別)」シートを特定
	valueOfInputData = inputDataSheet.getDataRange().getValues();//「請求書(明細別)」シートの全データを取得
	inputDataSheet.getRange(3,1,inputDataSheet.getLastRow(),1).setBackground(null);//A列のセルの色をnull(なし)にする(A列が赤色の場合があるため)
	return valueOfInputData;//
}

//各媒体ごとにデータを分ける
//各媒体データを格納するために配列を用意する
function generateExportData(valueOfInputData) {
	let lhListbySpecification = [],
		gizListbySpecification = [],
		fuzeListbySpecification = [],
		mlListbySpecification = [],
		roListbySpecification = [],
		biListbySpecification = [],
		biPrimeListbySpecification = [],
		digiListbySpecification = [],
		ecListbySpecification = [],
		muListbySpecification = [],
		sixsListbySpecification = [],
		businessGrowhListbySpecification = [],
		mediaDevelopmentListbySpecification = [];


		for (let i = 2; valueOfInputData.length > i; i++) {
			if (valueOfInputData[i][3] === '-') {//プロジェクト名が「-」の場合は
				valueOfInputData[i][3] = valueOfInputData[i - 1][3];//前行のデータを補完
			}
	
			if (
				valueOfInputData[i][3] === 'lifehacker（通常記事）' ||
				valueOfInputData[i][3] === 'lifehacker（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				lhListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'lifehacker（広告記事）' ||
				valueOfInputData[i][3] === 'lifehacker（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				lhListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'GIZMODO（通常記事）' ||
				valueOfInputData[i][3] === 'GIZMODO（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				gizListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'GIZMODO（広告記事）' ||
				valueOfInputData[i][3] === 'GIZMODO（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				gizListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'FUZE（通常記事）') {
				valueOfInputData[i].push('通常');
				fuzeListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'FUZE（広告記事）') {
				valueOfInputData[i].push('広告');
				fuzeListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'MYLOHAS（通常記事）' ||
				valueOfInputData[i][3] === 'MYLOHAS（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				mlListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'MYLOHAS（広告記事）' ||
				valueOfInputData[i][3] === 'MYLOHAS（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				mlListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'ROOMIE（通常記事）' ||
				valueOfInputData[i][3] === 'ROOMIE（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				roListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'ROOMIE（広告記事）' ||
				valueOfInputData[i][3] === 'ROOMIE（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				roListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'Business Insider Japan（通常記事）' ||
				valueOfInputData[i][3] === 'Business Insider Japan（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				biListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'Business Insider Japan（広告記事）' ||
				valueOfInputData[i][3] === 'Business Insider Japan（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				biListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'Business Insider Japan（PRIME記事）' ||
				valueOfInputData[i][3] === 'Business Insider Japan（PRIME記事_業務委託編集費）') {
				valueOfInputData[i].push('Prime');
				biPrimeListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'DIGIDAY（通常記事）' ||
				valueOfInputData[i][3] === 'DIGIDAY（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				digiListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'DIGIDAY（広告記事）' ||
				valueOfInputData[i][3] === 'DIGIDAY（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				digiListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'EC/事業戦略部門（通常記事/machi-ya案件/システム費）' ||
				valueOfInputData[i][3] === 'EC/事業戦略部門（通常記事/machi-ya案件_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				ecListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'MASHING UP（通常記事）' ||
				valueOfInputData[i][3] === 'MASHING UP（通常記事_業務委託編集費）') {
				valueOfInputData[i].push('通常');
				muListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === 'MASHING UP（広告記事）' ||
				valueOfInputData[i][3] === 'MASHING UP（広告記事_業務委託編集費）') {
				valueOfInputData[i].push('広告');
				muListbySpecification.push(valueOfInputData[i]);
	
			} else if (
				valueOfInputData[i][3] === '6&SENSE') {
				valueOfInputData[i].push('通常');
				sixsListbySpecification.push(valueOfInputData[i]);
			} else if (
				valueOfInputData[i][3] === 'プロダクト部門/メディア開発ユニット') {
				valueOfInputData[i].push('通常');
				mediaDevelopmentListbySpecification.push(valueOfInputData[i]);
			} else if (
				valueOfInputData[i][3] === 'プロダクト部門/メディアグロースユニット') {
				valueOfInputData[i].push('通常');
				businessGrowhListbySpecification.push(valueOfInputData[i]);
			} else {
				getInputDataSheet().getRange(i + 1, 1).setBackground("red");
			}
		}
	return {
		'1': lhListbySpecification,
		'2': gizListbySpecification,
		'3': fuzeListbySpecification,
		'4': mlListbySpecification,
		'5': roListbySpecification,
		'6': biListbySpecification,
		'7': biPrimeListbySpecification,
		'8': digiListbySpecification,
		'9': ecListbySpecification,
		'10': muListbySpecification,
		'11': sixsListbySpecification,
		'12': businessGrowhListbySpecification,
		'13': mediaDevelopmentListbySpecification
	}
}

//シート情報と書き込むデータの組み合わせ、書き込み用の関数に送る
function organizeList(sheetByMedia, listByMedia) {
	for (let i = 1; Object.keys(listByMedia).length >= i; i++) {
		if (listByMedia[i].length !== 0) {
			exportListByMedia(sheetByMedia[i], listByMedia[i]);
		}
	}
}

//各シートに書き込む
function exportListByMedia(exportToSheet, exportData) {
	exportToSheet.getRange(2, 1, exportData.length, 43).setValues(exportData);
}

//転記漏れ件数を検知
function getEroorCell() {
	const inputDataSheet = getInputDataSheet();//「請求書(明細別)」シートを特定
	let lastRow          = inputDataSheet.getLastRow(),//「請求書(明細別)」シートのデータが入っている最終行を取得
	colorArr             = inputDataSheet.getRange(`A3:A${lastRow}`).getBackgrounds(),//「請求書(明細別)」シートのA3からA(最終行)セルの色情報を取得
	errorCellCount       = 0;//転記漏れの件数をカウントする用の変数

	Object.keys(colorArr).forEach(i => {
		if(colorArr[i] == '#ff0000'){//赤色があれば
			errorCellCount++;//error件数を1プラスする
		}
});
	exportEroorCellCount(errorCellCount);//errorCellCountをexportEroorCellCountに渡す
}

//転記漏れ件数を「請求書(明細別)」シートのE1セルに出力
function exportEroorCellCount(errorCellCount) {
	const inputDataSheet = getInputDataSheet();//「請求書(明細別)」シートを取得
	inputDataSheet.getRange(1,5).setValue(errorCellCount);//転記漏れ件数を「請求書(明細別)」のE1セルに出力
}