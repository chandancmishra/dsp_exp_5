var ht;
var wd;
function  showDiv(str)
{
	if(str == '1')
	{
		document.getElementById("part1Div").style.display = '';
		document.getElementById("part2Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'none';
	}
	else if(str == '2')
	{
		document.getElementById("part2Div").style.display = '';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'none';
	}
	else
	{
		document.getElementById("part3Div").style.display = '';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part2Div").style.display = 'none';
	}
	
}


	
