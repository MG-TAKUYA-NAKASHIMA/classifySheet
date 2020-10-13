function classifyTriger() {
	const sheetByMedia = callSheets();
	deleteData(sheetByMedia);
	const valueOfInputData = getInputData();
	const listByMedia = generateExportData(valueOfInputData);
	organizeList(sheetByMedia, listByMedia);
	getEroorCell();
}

function deleteData(sheetByMedia) {
	let lastRow;

	for (let i = 1; Object.keys(sheetByMedia).length > i; i++) {
		lastRow =  sheetByMedia[i].getLastRow();
		sheetByMedia[i].getRange(2,1,lastRow,44).clear();
	}
}

function getInputData() {
	const inputDataSheet = getInputDataSheet();
	const valueOfInputData = inputDataSheet.getDataRange().getValues();
	inputDataSheet.getRange(3,1,inputDataSheet.getLastRow(),1).setBackground(null);
	return valueOfInputData;
}

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
			if (valueOfInputData[i][3] === '-') {
				valueOfInputData[i][3] = valueOfInputData[i - 1][3];
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
				valueOfInputData[i].push('notad');
				sixsListbySpecification.push(valueOfInputData[i]);
			} else if (
				valueOfInputData[i][3] === 'プロダクト部門/メディア開発ユニット') {
				valueOfInputData[i].push('notad');
				mediaDevelopmentListbySpecification.push(valueOfInputData[i]);
			} else if (
				valueOfInputData[i][3] === 'プロダクト部門/メディアグロースユニット') {
				valueOfInputData[i].push('notad');
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


function callSheets() {
	const lhSheet = getLhSheet();
	const gizSheet = getGizSheet();
	const fuzeSheet = getFuzeSheet();
	const mlSheet = getMlSheet();
	const roSheet = getRoSheet();
	const biSheet = getBiSheet();
	const biPrimeSheet = getBiPrimeSheet();
	const digiSheet = getDigiSheet();
	const ecSheet = getEcSheet();
	const muSheet = getMuSheet();
	const sixsSheet = getSixsSheet();
	const businessGrowhSheet = getBusinessGrowhSheet();
	const mediaDevelopmentSheet = getMediaDevelopmentSheet();
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

function organizeList(sheetByMedia, listByMedia) {
	for (let i = 1; Object.keys(listByMedia).length >= i; i++) {
		if (listByMedia[i].length !== 0) {
			exportListByMedia(sheetByMedia[i], listByMedia[i]);
		}
	}
}

function exportListByMedia(exportToSheet, exportData) {
	exportToSheet.getRange(2, 1, exportData.length, 43).setValues(exportData);
}

function getEroorCell() {
	const inputDataSheet = getInputDataSheet();
	let lastRow          = inputDataSheet.getLastRow();
	let colorArr         = inputDataSheet.getRange(`A3:A${lastRow}`).getBackgrounds();
	let tmp = 0;

	Object.keys(colorArr).forEach(function (i) {
		if(colorArr[i] == '#ff0000'){
			tmp++;
		}
});
	exportEroorCellCount(tmp);
}

function exportEroorCellCount(tmp) {
	const inputDataSheet = getInputDataSheet();
	inputDataSheet.getRange(1,5).setValue(tmp);
}