var Global = {
	Token: 'eyJ1c2VyOElEIjoiODAwMDAwNjAiLCJleHAiOjE1MTA0Njc4MjksIlBhc3N3b3JkIjoiRGRkIn0=',
	Domain: 'https://cndev.dhc.com.cn',
	UserID: '501401',
	User8ID: '80000060',
	LanguageCode: 'en',
}

function getLeftMenuList(){
	var arr = [
		{
			title: "Project",
			href: "#/app/project",
		},
		{
			title: "Search",
			href: "#/app/search",
		},
		{
			title: 'Playlists',
			href: '#/app/playlists'
		}
	];
	return arr;
}
