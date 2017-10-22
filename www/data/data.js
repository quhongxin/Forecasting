function getSearchList() {
	var obj = {
		"result": [{
				"ProjectID": "1",
				"FieldWBSNo": "FSSO-03399",
				"ProjectName": "上海港国际客运中心",
				"ProjectAddress": "上海虹口太平路1号",
				"UnitCount": 32,
				"SAPDataVersion": "07/26/2017"
			},
			{
				"ProjectID": "2",
				"FieldWBSNo": "FSSO-04561",
				"ProjectName": "上海宝静置业有限公司",
				"ProjectAddress": "虹口区昊宝路8号3号楼",
				"UnitCount": 20,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "3",
				"FieldWBSNo": "FSSO-03464",
				"ProjectName": "安亭新镇一期",
				"ProjectAddress": "嘉定安亭镇",
				"UnitCount": 20,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "4",
				"FieldWBSNo": "FSSO-04571",
				"ProjectName": "上海市精神卫生中心",
				"ProjectAddress": "上海市卢家兵号路1060号1号楼四楼",
				"UnitCount": 10,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "5",
				"FieldWBSNo": "FSSO-04572",
				"ProjectName": "上海市精神卫生中心",
				"ProjectAddress": "上海市卢家兵号路1060号1号楼四楼",
				"UnitCount": 10,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "6",
				"FieldWBSNo": "FSSO-04573",
				"ProjectName": "上海市精神卫生中心",
				"ProjectAddress": "上海市卢家兵号路1060号1号楼四楼",
				"UnitCount": 10,
				"SAPDataVersion": "07/26/2017",
			},

			{
				"ProjectID": "7",
				"FieldWBSNo": "FSSO-03398",
				"ProjectName": "上海港国际客运中心",
				"ProjectAddress": "上海虹口太平路1号",
				"UnitCount": 32,
				"SAPDataVersion": "07/26/2017"
			},
			{
				"ProjectID": "8",
				"FieldWBSNo": "FSSO-04562",
				"ProjectName": "上海宝静置业有限公司",
				"ProjectAddress": "虹口区昊宝路8号3号楼",
				"UnitCount": 20,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "9",
				"FieldWBSNo": "FSSO-03460",
				"ProjectName": "安亭新镇一期",
				"ProjectAddress": "嘉定安亭镇",
				"UnitCount": 20,
				"SAPDataVersion": "07/26/2017",
			},
			{
				"ProjectID": "10",
				"FieldWBSNo": "FSSO-04579",
				"ProjectName": "上海市精神卫生中心",
				"ProjectAddress": "上海市卢家兵号路1060号1号楼四楼",
				"UnitCount": 10,
				"SAPDataVersion": "07/26/2017",
			},
		],
		"totalcount": 19,
		"Token": "eyJ1c2VyOElEIjoiODAwMDAwNjAiLCJleHAiOjE1MDE5MTM0NzIsIlBhc3N3b3JkIjoiOHVoYipVSEIkIn0=",
		"error_code": 0,
		"error_info": ""
	}
	return obj;
}

function getSearchTypeList(){
	var arr = [
	{
		Name: 'Project Name',
		Type: 'ProjectName'
	},
	{
		Name: 'Field WBS No.',
		Type: 'FieldWBSNo'
	},
	{
		Name: 'View ID',
		Type: 'ViewID'
	}
	];
	return arr;
}
