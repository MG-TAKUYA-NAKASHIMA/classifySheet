function classifyTriger() {
	const valueOfInputData = getInputData();
	const listByMedia = generateExportData(valueOfInputData);
	const sheetByMedia = callSheets();
	organizeList(sheetByMedia, listByMedia);
}

function getInputData() {
	const valueOfInputData = getInputDataSheet().getDataRange().getValues();
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
		sixsListbySpecification = [];


	for (let i = 2; valueOfInputData.length > i; i++) {
		if (valueOfInputData[i][3] === '-') {
			valueOfInputData[i][3] = valueOfInputData[i - 1][3];
		}

		if (
			valueOfInputData[i][3] === 'lifehacker（通常記事）' ||
			valueOfInputData[i][3] === 'lifehacker（通常記事_業務委託編集費）') {
			valueOfInputData[i].push('notad');
			lhListbySpecification.push(valueOfInputData[i]);

		} else if(
			valueOfInputData[i][3] === 'lifehacker（広告記事）' ||
			valueOfInputData[i][3] === 'lifehacker（広告記事_業務委託編集費）'){
			valueOfInputData[i].push('ad');
			lhListbySpecification.push(valueOfInputData[i]);
		
		} else if (
			valueOfInputData[i][3] === 'GIZMODO（通常記事）' ||
			valueOfInputData[i][3] === 'GIZMODO（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			gizListbySpecification.push(valueOfInputData[i]);

			} else if (
			valueOfInputData[i][3] === 'GIZMODO（広告記事）' ||
			valueOfInputData[i][3] === 'GIZMODO（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			gizListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'FUZE（通常記事）'){
			valueOfInputData[i].push('notad');
			fuzeListbySpecification.push(valueOfInputData[i]);

		} else if( 
			valueOfInputData[i][3] === 'FUZE（広告記事）') {
			valueOfInputData[i].push('notad');
			fuzeListbySpecification.push(valueOfInputData[i]);
		
		} else if (
			valueOfInputData[i][3] === 'MYLOHAS（通常記事）' ||
			valueOfInputData[i][3] === 'MYLOHAS（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			mlListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'MYLOHAS（広告記事）' ||
			valueOfInputData[i][3] === 'MYLOHAS（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			mlListbySpecification.push(valueOfInputData[i]);
	
		} else if (
			valueOfInputData[i][3] === 'ROOMIE（通常記事）' ||
			valueOfInputData[i][3] === 'ROOMIE（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			roListbySpecification.push(valueOfInputData[i]);

		} else if(
			valueOfInputData[i][3] === 'ROOMIE（広告記事）' ||
			valueOfInputData[i][3] === 'ROOMIE（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			roListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'Business Insider Japan（通常記事）' ||
			valueOfInputData[i][3] === 'Business Insider Japan（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			biListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'Business Insider Japan（広告記事）' ||
			valueOfInputData[i][3] === 'Business Insider Japan（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			biListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'Business Insider Japan（PRIME記事）' ||
			valueOfInputData[i][3] === 'Business Insider Japan（PRIME記事_業務委託編集費）') {
			valueOfInputData[i].push('notad');
			biPrimeListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'DIGIDAY（通常記事）' ||
			valueOfInputData[i][3] === 'DIGIDAY（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			digiListbySpecification.push(valueOfInputData[i]);

		} else if(
			valueOfInputData[i][3] === 'DIGIDAY（広告記事）' ||
			valueOfInputData[i][3] === 'DIGIDAY（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			digiListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'eコマース（通常記事/machi-ya案件）' ||
			valueOfInputData[i][3] === 'eコマース（通常記事/machi-ya案件_業務委託編集費') {
			valueOfInputData[i].push('notad');
			ecListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'MASHING UP（通常記事）' ||
			valueOfInputData[i][3] === 'MASHING UP（通常記事_業務委託編集費）' ) {
			valueOfInputData[i].push('notad');
			muListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === 'MASHING UP（広告）' ||
			valueOfInputData[i][3] === 'MASHING UP（広告記事_業務委託編集費）') {
			valueOfInputData[i].push('ad');
			muListbySpecification.push(valueOfInputData[i]);

		} else if (
			valueOfInputData[i][3] === '6&SENSE') {
			valueOfInputData[i].push('notad');
			sixsListbySpecification.push(valueOfInputData[i]);
		} else {
			getInputDataSheet().getRange(i+1,1).setBackground("red");
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
		'11': sixsListbySpecification
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
		'11': sixsSheet
	}
}

function organizeList(sheetByMedia, listByMedia) {
	for (let i = 1; Object.keys(listByMedia).length > i; i++) {
		if (listByMedia[i].length !== 0) {
			exportListByMedia(sheetByMedia[i], listByMedia[i]);
		}
	}
}

function exportListByMedia(exportToSheet, exportData) {
	exportToSheet.getRange(2, 1, exportData.length, 43).setValues(exportData);
}