let keyboard=document.createElement('div');
document.body.appendChild (keyboard);
keyboard.style.textAlign='center';

createLayout = () => {
	let topRow = 'qwertyuiop[]'.split('');
	let middleRow = "asdfghjkl;'".split('');
	let bottomRow = 'zxcvbnm,./'.split('');

	let divTop =document.createElement('div');
	let divMiddle = document.createElement('div');
	let divBottom = document.createElement('div');

	for(var i=0; i<topRow.length;i++){
		let p = document.createElement('p');
		p.style.display ='inline-block';
		p.className='letter';
		p.innerHTML=topRow[i];
		keyboard.appendChild(divTop);	
		divTop.appendChild(p);
	}

	 for(var i=0; i<middleRow.length;i++){
		let p = document.createElement('p');
		p.style.display ='inline-block';
		p.className='letter';
		p.innerHTML=middleRow[i];
		keyboard.appendChild(divMiddle);	
		divMiddle.appendChild(p);
	 }

	  for(var i=0; i<bottomRow.length;i++){
		let p = document.createElement('p');
		p.style.display ='inline-block';
		p.className='letter';
		p.innerHTML=bottomRow[i];
		keyboard.appendChild(divBottom);	
		divBottom.appendChild(p);
	 }
}

createLayout();




